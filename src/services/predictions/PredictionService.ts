
import { supabase } from "@/integrations/supabase/client";

export class PredictionService {
  static async sendMessage(message: string) {
    try {
      const { data, error } = await supabase.functions.invoke('process-message', {
        body: { message }
      });

      if (error) {
        console.error('Error calling message processing function:', error);
        throw new Error('Failed to process message');
      }

      return data;
    } catch (error) {
      console.error('Error in PredictionService:', error);
      throw error;
    }
  }
}
