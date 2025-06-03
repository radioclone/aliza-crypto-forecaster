
import {
  http,
  type Hex,
  createPublicClient,
  parseEther,
} from "viem";
import {
  type GetPaymasterDataParameters,
  createPaymasterClient,
} from "viem/account-abstraction";
import { privateKeyToAccount } from "viem/accounts";
import { soneiumMinato } from "viem/chains";
import {
  createSmartAccountClient,
  toStartaleSmartAccount,
} from "startale-aa-sdk";
import { supabase } from "@/integrations/supabase/client";
import type { 
  SoneiumConfig, 
  TransactionResult, 
  SoneiumConnectionState, 
  SmartAccountOptions 
} from "@/types/soneium";

export class SoneiumService {
  private static instance: SoneiumService;
  private config: SoneiumConfig | null = null;
  private smartAccountClient: any = null;
  private publicClient: any = null;
  private paymasterClient: any = null;
  private connectionState: SoneiumConnectionState = {
    isInitialized: false,
    isConnected: false,
  };

  private constructor() {}

  public static getInstance(): SoneiumService {
    if (!SoneiumService.instance) {
      SoneiumService.instance = new SoneiumService();
    }
    return SoneiumService.instance;
  }

  async initialize(): Promise<void> {
    try {
      console.log('🔄 Initializing Soneium service...');
      
      // Get configuration from Supabase secrets
      const { data, error } = await supabase.functions.invoke('get-soneium-config');
      
      if (error) {
        throw new Error(`Failed to get Soneium configuration: ${error.message}`);
      }

      if (!data?.config) {
        throw new Error('Invalid configuration received from Supabase');
      }

      this.config = data.config;
      
      // Validate required configuration
      this.validateConfig();
      
      // Initialize public client with RPC endpoint
      this.publicClient = createPublicClient({
        transport: http(this.config.rpcUrl),
        chain: soneiumMinato,
      });

      // Initialize paymaster client
      this.paymasterClient = createPaymasterClient({
        transport: http(this.config.paymasterUrl),
      });

      // Test connection
      await this.testConnection();
      
      this.connectionState = {
        isInitialized: true,
        isConnected: true,
      };

      console.log('✅ Soneium service initialized successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('❌ Failed to initialize Soneium service:', errorMessage);
      
      this.connectionState = {
        isInitialized: false,
        isConnected: false,
        error: errorMessage,
      };
      
      throw error;
    }
  }

  private validateConfig(): void {
    if (!this.config) {
      throw new Error('Configuration not loaded');
    }

    const required = ['bundlerUrl', 'paymasterUrl', 'rpcUrl', 'apiKey'];
    const missing = required.filter(key => !this.config![key as keyof SoneiumConfig]);
    
    if (missing.length > 0) {
      throw new Error(`Missing required configuration: ${missing.join(', ')}`);
    }
  }

  private async testConnection(): Promise<void> {
    try {
      // Test public client connection
      const chainId = await this.publicClient.getChainId();
      console.log(`🌐 Connected to chain ID: ${chainId}`);
      
      if (chainId !== soneiumMinato.id) {
        throw new Error(`Unexpected chain ID: ${chainId}, expected: ${soneiumMinato.id}`);
      }
    } catch (error) {
      throw new Error(`Connection test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async createSmartAccount(options: SmartAccountOptions): Promise<string> {
    if (!this.config) {
      throw new Error('Soneium service not initialized');
    }

    if (!this.connectionState.isConnected) {
      throw new Error('Soneium service not connected');
    }

    try {
      console.log('🔑 Creating smart account...');
      
      const signer = privateKeyToAccount(options.privateKey as Hex);
      
      // Context configuration based on your script
      const scsContext = { 
        calculateGasLimits: options.calculateGasLimits ?? true, 
        policyId: options.policyId ?? "sudo" 
      };

      this.smartAccountClient = createSmartAccountClient({
        account: await toStartaleSmartAccount({
          signer: signer as any,
          chain: soneiumMinato as any,
          transport: http() as any,
        }),
        transport: http(this.config.bundlerUrl) as any,
        client: this.publicClient as any,
        paymaster: {
          async getPaymasterData(pmDataParams: GetPaymasterDataParameters) {
            // Gas limit configuration from your script
            pmDataParams.paymasterPostOpGasLimit = BigInt(100000);
            pmDataParams.paymasterVerificationGasLimit = BigInt(200000);
            pmDataParams.verificationGasLimit = BigInt(500000);
            
            const paymasterResponse = await this.paymasterClient.getPaymasterData(pmDataParams);
            return paymasterResponse;
          },
          async getPaymasterStubData(pmStubDataParams: GetPaymasterDataParameters) {
            const paymasterStubResponse = await this.paymasterClient.getPaymasterStubData(pmStubDataParams);
            return paymasterStubResponse;
          },
        },
        paymasterContext: scsContext,
        userOperation: {
          estimateFeesPerGas: async () => {
            return {
              maxFeePerGas: BigInt(10000000),
              maxPriorityFeePerGas: BigInt(10000000),
            };
          },
        },
      });

      const smartAccountAddress = this.smartAccountClient.account.address;
      this.connectionState.smartAccountAddress = smartAccountAddress;
      
      console.log('✅ Smart account created:', smartAccountAddress);
      console.log('👤 Signer address:', signer.address);
      
      return smartAccountAddress;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('❌ Failed to create smart account:', errorMessage);
      throw new Error(`Smart account creation failed: ${errorMessage}`);
    }
  }

  async sendTransaction(to: string, value: string = "0"): Promise<TransactionResult> {
    if (!this.smartAccountClient) {
      throw new Error('Smart account not created');
    }

    try {
      console.log(`💸 Sending transaction to ${to} with value ${value} ETH...`);
      
      const hash = await this.smartAccountClient.sendUserOperation({
        account: this.smartAccountClient.account,
        calls: [
          {
            to,
            value: parseEther(value),
          },
        ],
      });

      console.log('📝 Transaction hash:', hash);

      const receipt = await this.smartAccountClient.waitForUserOperationReceipt({
        hash,
      });

      console.log('✅ Transaction confirmed:', receipt);

      return {
        hash,
        receipt,
        success: true,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('❌ Transaction failed:', errorMessage);
      return {
        hash: '',
        success: false,
        error: errorMessage,
      };
    }
  }

  getSmartAccountAddress(): string | null {
    return this.connectionState.smartAccountAddress || null;
  }

  getConnectionState(): SoneiumConnectionState {
    return { ...this.connectionState };
  }

  isInitialized(): boolean {
    return this.connectionState.isInitialized;
  }

  isConnected(): boolean {
    return this.connectionState.isConnected;
  }

  // Reset the service state (useful for testing or reconnection)
  reset(): void {
    this.config = null;
    this.smartAccountClient = null;
    this.publicClient = null;
    this.paymasterClient = null;
    this.connectionState = {
      isInitialized: false,
      isConnected: false,
    };
  }
}

export const soneiumService = SoneiumService.getInstance();
