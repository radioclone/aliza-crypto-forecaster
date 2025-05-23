
import {
  http,
  type Hex,
  createPublicClient,
  parseEther,
  type PublicClient,
} from "viem";
import {
  type GetPaymasterDataParameters,
  createPaymasterClient,
  type PaymasterClient,
} from "viem/account-abstraction";
import { privateKeyToAccount, type PrivateKeyAccount } from "viem/accounts";
import { soneiumMinato } from "viem/chains";
import {
  createSmartAccountClient,
  toStartaleSmartAccount,
  type StartaleSmartAccount,
} from "startale-aa-sdk";
import { supabase } from "@/integrations/supabase/client";

export interface SoneiumConfig {
  bundlerUrl: string;
  paymasterUrl: string;
  rpcUrl: string;
  apiKey: string;
}

export interface TransactionResult {
  hash: string;
  receipt?: any;
  success: boolean;
  error?: string;
}

export class SoneiumService {
  private static instance: SoneiumService;
  private config: SoneiumConfig | null = null;
  private smartAccountClient: any = null;
  private publicClient: PublicClient | null = null;

  private constructor() {}

  public static getInstance(): SoneiumService {
    if (!SoneiumService.instance) {
      SoneiumService.instance = new SoneiumService();
    }
    return SoneiumService.instance;
  }

  async initialize(): Promise<void> {
    try {
      // Get configuration from Supabase secrets
      const { data, error } = await supabase.functions.invoke('get-soneium-config');
      
      if (error) {
        throw new Error('Failed to get Soneium configuration');
      }

      this.config = data.config;
      
      // Initialize public client
      this.publicClient = createPublicClient({
        transport: http(this.config.rpcUrl),
        chain: soneiumMinato,
      });

      console.log('Soneium service initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Soneium service:', error);
      throw error;
    }
  }

  async createSmartAccount(privateKey: string): Promise<string> {
    if (!this.config || !this.publicClient) {
      throw new Error('Soneium service not initialized');
    }

    try {
      const paymasterClient: PaymasterClient = createPaymasterClient({
        transport: http(this.config.paymasterUrl),
      });

      const signer: PrivateKeyAccount = privateKeyToAccount(privateKey as Hex);
      const scsContext = { calculateGasLimits: true, policyId: "sudo" };

      const smartAccount: StartaleSmartAccount = await toStartaleSmartAccount({
        signer,
        chain: soneiumMinato,
        transport: http(),
      });

      this.smartAccountClient = createSmartAccountClient({
        account: smartAccount,
        transport: http(this.config.bundlerUrl),
        client: this.publicClient,
        paymaster: {
          async getPaymasterData(pmDataParams: GetPaymasterDataParameters) {
            pmDataParams.paymasterPostOpGasLimit = BigInt(100000);
            pmDataParams.paymasterVerificationGasLimit = BigInt(200000);
            pmDataParams.verificationGasLimit = BigInt(500000);
            const paymasterResponse = await paymasterClient.getPaymasterData(pmDataParams);
            return paymasterResponse;
          },
          async getPaymasterStubData(pmStubDataParams: GetPaymasterDataParameters) {
            const paymasterStubResponse = await paymasterClient.getPaymasterStubData(pmStubDataParams);
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

      return this.smartAccountClient.account.address;
    } catch (error) {
      console.error('Failed to create smart account:', error);
      throw error;
    }
  }

  async sendTransaction(to: string, value: string = "0"): Promise<TransactionResult> {
    if (!this.smartAccountClient) {
      throw new Error('Smart account not created');
    }

    try {
      const hash = await this.smartAccountClient.sendUserOperation({
        account: this.smartAccountClient.account,
        calls: [
          {
            to,
            value: parseEther(value),
          },
        ],
      });

      const receipt = await this.smartAccountClient.waitForUserOperationReceipt({
        hash,
      });

      return {
        hash,
        receipt,
        success: true,
      };
    } catch (error) {
      console.error('Transaction failed:', error);
      return {
        hash: '',
        success: false,
        error: (error as Error).message,
      };
    }
  }

  getSmartAccountAddress(): string | null {
    return this.smartAccountClient?.account?.address || null;
  }

  isInitialized(): boolean {
    return this.config !== null;
  }
}

export const soneiumService = SoneiumService.getInstance();
