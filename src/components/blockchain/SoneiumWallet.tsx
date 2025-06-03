
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wallet, Send, Loader, CheckCircle, AlertCircle, Wifi, WifiOff } from 'lucide-react';
import { soneiumService } from '@/services/blockchain/SoneiumService';
import type { TransactionResult, SoneiumConnectionState } from '@/types/soneium';

export const SoneiumWallet = () => {
  const [connectionState, setConnectionState] = useState<SoneiumConnectionState>({
    isInitialized: false,
    isConnected: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    initializeService();
  }, []);

  const initializeService = async () => {
    try {
      setIsLoading(true);
      await soneiumService.initialize();
      setConnectionState(soneiumService.getConnectionState());
      
      toast({
        title: "🎉 Soneium Connected",
        description: "Ready to create smart accounts and send transactions.",
      });
    } catch (error) {
      console.error('Failed to initialize Soneium service:', error);
      setConnectionState(soneiumService.getConnectionState());
      
      toast({
        title: "Connection Failed",
        description: error instanceof Error ? error.message : "Could not connect to Soneium network.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const createSmartAccount = async () => {
    if (!privateKey) {
      toast({
        title: "Private Key Required",
        description: "Please enter your private key to create a smart account.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      const address = await soneiumService.createSmartAccount({ 
        privateKey,
        calculateGasLimits: true,
        policyId: "sudo"
      });
      
      setConnectionState(soneiumService.getConnectionState());
      
      toast({
        title: "🎉 Smart Account Created",
        description: `Account address: ${address}`,
      });
    } catch (error) {
      console.error('Failed to create smart account:', error);
      toast({
        title: "Account Creation Failed",
        description: error instanceof Error ? error.message : "Could not create smart account.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendTransaction = async () => {
    if (!recipient || !connectionState.smartAccountAddress) {
      toast({
        title: "Missing Information",
        description: "Please ensure you have a smart account and recipient address.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      const result: TransactionResult = await soneiumService.sendTransaction(recipient, amount || "0");
      
      if (result.success) {
        toast({
          title: "🎉 Transaction Successful",
          description: `Transaction hash: ${result.hash}`,
        });
        setRecipient('');
        setAmount('');
      } else {
        toast({
          title: "Transaction Failed",
          description: result.error || "Unknown error occurred",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Transaction failed:', error);
      toast({
        title: "Transaction Error",
        description: error instanceof Error ? error.message : "Could not send transaction.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const ConnectionStatus = () => {
    if (!connectionState.isInitialized) {
      return (
        <Alert className="mb-4">
          <WifiOff className="h-4 w-4" />
          <AlertDescription className="flex items-center gap-2">
            <span>Initializing Soneium service...</span>
            <Loader className="h-4 w-4 animate-spin" />
          </AlertDescription>
        </Alert>
      );
    }

    if (connectionState.error) {
      return (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Connection Error: {connectionState.error}
          </AlertDescription>
        </Alert>
      );
    }

    if (connectionState.isConnected) {
      return (
        <Alert className="mb-4 border-green-500/20 bg-green-500/10">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <AlertDescription className="text-green-400">
            Connected to Soneium Minato network
          </AlertDescription>
        </Alert>
      );
    }

    return null;
  };

  return (
    <Card className="p-6 neo-blur">
      <div className="flex items-center gap-2 mb-6">
        <Wallet className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Soneium Wallet</h3>
        {connectionState.isConnected ? (
          <Wifi className="h-4 w-4 text-green-400 ml-auto" />
        ) : (
          <WifiOff className="h-4 w-4 text-red-400 ml-auto" />
        )}
      </div>

      <ConnectionStatus />

      {connectionState.isInitialized && connectionState.isConnected ? (
        <div className="space-y-4">
          {!connectionState.smartAccountAddress ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="privateKey" className="text-white/80">Private Key</Label>
                <Input
                  id="privateKey"
                  type="password"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  placeholder="0x..."
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <Button 
                onClick={createSmartAccount}
                disabled={isLoading || !privateKey}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? <Loader className="h-4 w-4 animate-spin mr-2" /> : null}
                Create Smart Account
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-400">Smart Account Address:</p>
                <p className="text-xs text-white font-mono break-all">{connectionState.smartAccountAddress}</p>
              </div>

              <div>
                <Label htmlFor="recipient" className="text-white/80">Recipient Address</Label>
                <Input
                  id="recipient"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="0x..."
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <div>
                <Label htmlFor="amount" className="text-white/80">Amount (ETH)</Label>
                <Input
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                  type="number"
                  step="0.001"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <Button 
                onClick={sendTransaction}
                disabled={isLoading || !recipient}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isLoading ? <Loader className="h-4 w-4 animate-spin mr-2" /> : <Send className="h-4 w-4 mr-2" />}
                Send Transaction
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center py-8">
          <Button 
            onClick={initializeService}
            disabled={isLoading}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            {isLoading ? <Loader className="h-4 w-4 animate-spin mr-2" /> : null}
            Retry Connection
          </Button>
        </div>
      )}
    </Card>
  );
};
