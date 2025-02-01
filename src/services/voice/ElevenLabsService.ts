import { toast } from "@/components/ui/use-toast";
import i18n from "@/config/i18n";
import { supabase } from "@/integrations/supabase/client";

export class ElevenLabsService {
  private static instance: ElevenLabsService;
  private voiceId: string = "tAyJHzLYtBgIx7ftaXQ8"; // Aria's voice ID
  private audioCache: Map<string, AudioBuffer> = new Map();
  private apiKey: string | null = null;
  private isInitialized: boolean = false;
  
  private constructor() {
    this.initialize();
  }
  
  public static getInstance(): ElevenLabsService {
    if (!ElevenLabsService.instance) {
      ElevenLabsService.instance = new ElevenLabsService();
    }
    return ElevenLabsService.instance;
  }

  private async initialize() {
    try {
      const { data: { secret }, error } = await supabase.rpc('get_service_secret', {
        secret_name: 'ELEVEN_LABS_API_KEY'
      });
      
      if (error) throw error;
      
      this.apiKey = secret;
      this.isInitialized = true;
      console.log("ElevenLabs service initialized successfully");
    } catch (error) {
      console.error("Failed to initialize ElevenLabs service:", error);
      this.isInitialized = false;
    }
  }

  public async speak(text: string): Promise<void> {
    try {
      console.log("ElevenLabsService speaking:", text);
      
      if (!this.isInitialized || !this.apiKey) {
        await this.initialize();
        if (!this.apiKey) {
          toast({
            title: "Voice Service Unavailable",
            description: "Voice synthesis is currently unavailable. Please try again later.",
            variant: "destructive",
          });
          return;
        }
      }

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
        throw new Error(`Failed to generate speech: ${response.statusText}`);
      }

      const audioBlob = await response.blob();
      const audio = new Audio(URL.createObjectURL(audioBlob));
      
      // Store in cache
      const arrayBuffer = await audioBlob.arrayBuffer();
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      this.audioCache.set(cacheKey, audioBuffer);
      
      await audio.play();
      
      console.log("Speech generated and playing successfully");
    } catch (error) {
      console.error("Error in ElevenLabsService:", error);
      toast({
        title: "Voice Error",
        description: "Failed to generate voice summary. Please try again.",
        variant: "destructive",
      });
    }
  }

  public setVoiceId(voiceId: string) {
    this.voiceId = voiceId;
  }
}