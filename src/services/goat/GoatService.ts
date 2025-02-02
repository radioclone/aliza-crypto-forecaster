import { supabase } from "@/integrations/supabase/client";
import { soundManager } from "@/utils/sounds";

export class GoatService {
  private static instance: GoatService;
  
  private constructor() {}

  public static getInstance(): GoatService {
    if (!GoatService.instance) {
      GoatService.instance = new GoatService();
    }
    return GoatService.instance;
  }

  async processUserRequest(prompt: string): Promise<string> {
    try {
      console.log('Sending request to AI:', prompt);
      const { data, error } = await supabase.functions.invoke('process-ai-request', {
        body: { message: prompt }
      });

      if (error) {
        console.error('Error calling AI function:', error);
        soundManager.playSound('error');
        throw error;
      }

      console.log('AI response:', data);
      return data.response;
    } catch (error) {
      console.error('Error in processUserRequest:', error);
      soundManager.playSound('error');
      throw error;
    }
  }
}