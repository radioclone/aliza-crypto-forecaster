
export interface SoneiumConfig {
  bundlerUrl: string;
  paymasterUrl: string;
  rpcUrl: string;
  rpcWssUrl?: string;
  apiKey: string;
}

export interface TransactionResult {
  hash: string;
  receipt?: any;
  success: boolean;
  error?: string;
}

export interface SoneiumConnectionState {
  isInitialized: boolean;
  isConnected: boolean;
  smartAccountAddress?: string;
  error?: string;
}

export interface SmartAccountOptions {
  privateKey: string;
  calculateGasLimits?: boolean;
  policyId?: string;
}
