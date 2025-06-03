
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.48.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('🔄 Fetching Soneium configuration...');
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get secrets from Supabase vault
    const { data: secrets, error } = await supabase
      .from('vault.decrypted_secrets')
      .select('name, decrypted_secret')
      .in('name', [
        'SONEIUM_RPC_URL', 
        'SONEIUM_API_KEY', 
        'SONEIUM_BUNDLER_URL', 
        'SONEIUM_PAYMASTER_URL'
      ])

    if (error) {
      console.error('❌ Error fetching secrets:', error)
      throw new Error('Failed to fetch configuration from vault')
    }

    if (!secrets || secrets.length === 0) {
      console.error('❌ No secrets found in vault')
      throw new Error('No Soneium configuration found in vault')
    }

    const configMap = secrets.reduce((acc: any, secret: any) => {
      acc[secret.name] = secret.decrypted_secret
      return acc
    }, {})

    // Validate that we have all required secrets
    const requiredSecrets = ['SONEIUM_RPC_URL', 'SONEIUM_API_KEY', 'SONEIUM_BUNDLER_URL', 'SONEIUM_PAYMASTER_URL'];
    const missingSecrets = requiredSecrets.filter(key => !configMap[key]);
    
    if (missingSecrets.length > 0) {
      console.error('❌ Missing required secrets:', missingSecrets);
      throw new Error(`Missing required secrets: ${missingSecrets.join(', ')}`);
    }

    const config = {
      rpcUrl: configMap.SONEIUM_RPC_URL,
      apiKey: configMap.SONEIUM_API_KEY,
      bundlerUrl: configMap.SONEIUM_BUNDLER_URL,
      paymasterUrl: configMap.SONEIUM_PAYMASTER_URL,
    }

    console.log('✅ Soneium configuration loaded successfully');
    console.log('🌐 RPC URL:', config.rpcUrl ? 'configured' : 'missing');
    console.log('🔑 API Key:', config.apiKey ? 'configured' : 'missing');
    console.log('📦 Bundler URL:', config.bundlerUrl ? 'configured' : 'missing');
    console.log('💳 Paymaster URL:', config.paymasterUrl ? 'configured' : 'missing');

    return new Response(
      JSON.stringify({ config }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('❌ Error in get-soneium-config function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
