import { ElizaService } from "../ai/eliza";
import { ElevenLabsService } from "../voice/ElevenLabsService";

export class GoatService {
  private static instance: GoatService;
  private elizaService: ElizaService;
  private voiceService: ElevenLabsService;
  
  private constructor() {
    this.elizaService = ElizaService.getInstance();
    this.voiceService = ElevenLabsService.getInstance();
  }
  
  public static getInstance(): GoatService {
    if (!GoatService.instance) {
      GoatService.instance = new GoatService();
    }
    return GoatService.instance;
  }

  async processUserRequest(message: string): Promise<string> {
    try {
      console.log("GoatService processing message:", message);
      const response = await this.elizaService.processMessage(message);
      console.log("GoatService received response:", response);
      
      // Generate speech for the response
      await this.voiceService.speak(response);
      
      return response;
    } catch (error) {
      console.error("Error in GoatService:", error);
      throw error;
    }
  }
}