import { ElizaService } from "../ai/eliza";

export class GoatService {
  private static instance: GoatService;
  private elizaService: ElizaService;
  
  private constructor() {
    this.elizaService = ElizaService.getInstance();
  }
  
  public static getInstance(): GoatService {
    if (!GoatService.instance) {
      GoatService.instance = new GoatService();
    }
    return GoatService.instance;
  }

  async processUserRequest(message: string) {
    try {
      // Future: Add wallet and plugin processing here
      const response = await this.elizaService.processMessage(message);
      return response;
    } catch (error) {
      console.error("Error processing request:", error);
      throw error;
    }
  }
}