import { toast } from "@/components/ui/use-toast";
import i18n from "@/config/i18n";
import { supabase } from "@/integrations/supabase/client";

export class ElevenLabsService {
  private static instance: ElevenLabsService;
  private voiceId: string = "tAyJHzLYtBgIx7ftaXQ8"; // Aria's voice ID
  private audioCache: Map<string, AudioBuffer> = new Map();
  private apiKey: string | null = null;
  private isInitialized: boolean = false;
  private initializationPromise: Promise<void> | null = null;
  
  private constructor() {
    this.initializationPromise = this.initialize();
  }
  
  public static getInstance(): ElevenLabsService {
    if (!ElevenLabsService.instance) {
      ElevenLabsService.instance = new ElevenLabsService();
    }
    return ElevenLabsService.instance;
  }

  private async initialize() {
    try {
      console.log("Initializing ElevenLabs service...");
      
      const { data, error } = await supabase
        .rpc('get_service_secret', { secret_name: 'ELEVEN_LABS_API_KEY' });
      
      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      
      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error("No API key data returned from database");
      }

      const secretData = data[0];
      if (!secretData || typeof secretData.secret !== 'string') {
        throw new Error("Invalid API key format in database");
      }

      // Verify the API key is not empty
      if (!secretData.secret.trim()) {
        throw new Error("API key is empty");
      }

      this.apiKey = secretData.secret;
      this.isInitialized = true;
      console.log("ElevenLabs service initialized successfully");
    } catch (error) {
      console.error("Failed to initialize ElevenLabs service:", error);
      this.isInitialized = false;
      toast({
        title: "Service Initialization Failed",
        description: `Voice synthesis service could not be initialized: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
      throw error;
    }
  }

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async speak(text: string): Promise<void> {
    try {
      // Wait for initialization if it's still pending
      if (this.initializationPromise) {
        await this.initializationPromise;
      }

      if (!this.isInitialized || !this.apiKey) {
        throw new Error("Service not properly initialized");
      }

      console.log("ElevenLabsService speaking:", text);

      // Generate cache key based on text content and voice ID
      const cacheKey = `${text}_${this.voiceId}`;

      // Check cache first
      const cachedAudio = this.audioCache.get(cacheKey);
      if (cachedAudio) {
        console.log("Using cached audio");
        const audioContext = new AudioContext();
        const source = audioContext.createBufferSource();
        source.buffer = cachedAudio;
        source.connect(audioContext.destination);
        // Add a small delay before starting playback
        await this.delay(100);
        source.start();
        return;
      }

      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${this.voiceId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": this.apiKey,
          },
          body: JSON.stringify({
            text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.5,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to generate speech');
      }

      const audioBlob = await response.blob();
      const audio = new Audio(URL.createObjectURL(audioBlob));
      
      // Store in cache
      const arrayBuffer = await audioBlob.arrayBuffer();
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      this.audioCache.set(cacheKey, audioBuffer);
      
      // Add a small delay before playing
      await this.delay(100);
      await audio.play();
      
      console.log("Speech generated and playing successfully");
    } catch (error) {
      console.error("Error in ElevenLabsService:", error);
      toast({
        title: "Voice Error",
        description: error instanceof Error ? error.message : "Failed to generate voice summary. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  }

  public setVoiceId(voiceId: string) {
    this.voiceId = voiceId;
  }
}