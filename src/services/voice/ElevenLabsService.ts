import { toast } from "@/components/ui/use-toast";
import i18n from "@/config/i18n";

export class ElevenLabsService {
  private static instance: ElevenLabsService;
  private voiceId: string = "tAyJHzLYtBgIx7ftaXQ8"; // Aria's voice ID
  private audioCache: Map<string, AudioBuffer> = new Map();
  private apiKey: string | null = null;
  
  private constructor() {
    // Get API key from environment
    this.apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;
  }
  
  public static getInstance(): ElevenLabsService {
    if (!ElevenLabsService.instance) {
      ElevenLabsService.instance = new ElevenLabsService();
    }
    return ElevenLabsService.instance;
  }

  public async speak(text: string): Promise<void> {
    try {
      console.log("ElevenLabsService speaking:", text);
      
      if (!this.apiKey) {
        toast({
          title: "Voice Service Unavailable",
          description: "Voice synthesis is currently unavailable. Please try again later.",
          variant: "destructive",
        });
        return;
      }

      // Generate cache key based on text content
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