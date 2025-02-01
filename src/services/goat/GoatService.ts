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
    if (prompt.toLowerCase().includes('bitcoin')) {
      return "Bitcoin is the first and most well-known cryptocurrency. It was created in 2009 by an anonymous person or group using the name Satoshi Nakamoto. Bitcoin operates on a decentralized network using blockchain technology, allowing for secure peer-to-peer transactions without the need for intermediaries like banks.";
    }

    if (prompt.toLowerCase().includes('blockchain')) {
      return "Blockchain is a distributed ledger technology that records transactions across a network of computers. Each block contains a list of transactions, and once recorded, the data cannot be altered retroactively. This technology ensures transparency, security, and decentralization, making it fundamental to cryptocurrencies and many other applications.";
    }

    if (prompt.toLowerCase().includes('smart contract')) {
      return "Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute when predetermined conditions are met, without the need for intermediaries. Smart contracts are primarily used on blockchain platforms like Ethereum and enable the creation of decentralized applications (dApps) and automated financial services.";
    }

    if (prompt.toLowerCase().includes('nft')) {
      return "NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of specific items or content on the blockchain. Unlike cryptocurrencies, each NFT is unique and cannot be replaced with something else of equal value. They're commonly used for digital art, collectibles, gaming items, and other forms of digital ownership verification.";
    }

    if (prompt.toLowerCase().includes('defi')) {
      return "DeFi (Decentralized Finance) refers to financial services built on blockchain technology that operate without traditional financial intermediaries like banks. This includes lending, borrowing, trading, and earning interest on crypto assets. DeFi aims to create an open, accessible, and transparent financial system using smart contracts and blockchain technology.";
    }

    if (prompt.toLowerCase().includes('aifi')) {
      return `AiFi (AI Finance) is an emerging trend in cryptocurrency that combines artificial intelligence with decentralized finance (DeFi). According to Forbes, it represents the intersection of AI and blockchain technology, enabling more intelligent and automated financial services. AiFi platforms can analyze market data, automate trading strategies, and provide personalized financial services using AI algorithms. You can learn more about AiFi in this Forbes article: https://www.forbes.com/sites/clorischen/2024/11/20/what-is-ai-fi-in-crypto-and-why-you-should-care/`;
    }

    if (prompt.toLowerCase().includes('invest')) {
      return "To start investing in cryptocurrency: 1) Research and understand the basics of blockchain and different cryptocurrencies. 2) Choose a reputable cryptocurrency exchange. 3) Create and verify your account. 4) Set up secure payment methods. 5) Start with small investments to learn the market. 6) Use secure storage solutions like hardware wallets. Remember to never invest more than you can afford to lose and always do your own research.";
    }

    soundManager.playSound('error');
    return "I apologize, but I don't have specific information about that topic. Please try asking about Bitcoin, blockchain technology, smart contracts, NFTs, or cryptocurrency investing in general.";
  }
}