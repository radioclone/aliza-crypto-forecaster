# Aliza Crypto Forecaster

## Architecture Overview

### Core Technologies
- **Frontend Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state
- **Internationalization**: i18next for multi-language support
- **Voice Integration**: ElevenLabs API for text-to-speech

### AI Integration
- **Model**: Custom Eliza-based AI service
- **Features**: 
  - Natural language processing for crypto queries
  - Real-time response generation
  - Voice synthesis for spoken responses
  - Multi-language support

### Blockchain Integration
- **Market Data**: Real-time cryptocurrency price tracking
- **Price Predictions**: AI-powered market analysis
- **Educational Content**: Comprehensive blockchain and crypto education

### User Interface
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Optimized for reduced eye strain
- **Interactive Elements**: 
  - Live market data ticker
  - Price charts and predictions
  - AI chat interface
  - Voice interaction capabilities

### Key Features
1. **Real-time Market Analysis**
   - Live cryptocurrency price updates
   - Market cap and volume tracking
   - Historical price charts

2. **AI Assistant (Aliza)**
   - Natural language chat interface
   - Voice-enabled interactions
   - Educational content delivery
   - Multi-language support (10 languages)

3. **Educational Resources**
   - Blockchain technology explanations
   - Cryptocurrency investment guides
   - DeFi and NFT education
   - Smart contract tutorials

### User Interaction Flow
1. **Initial Engagement**
   - Users are greeted with live market data
   - Can select their preferred language
   - Access to quick navigation tabs

2. **Market Analysis**
   - View real-time crypto prices
   - Analyze historical data
   - Access price predictions

3. **AI Interaction**
   - Chat with Aliza via text
   - Receive voice responses
   - Get educational content
   - Access suggested questions

4. **Learning Journey**
   - Browse educational resources
   - Understand blockchain basics
   - Learn about crypto investment
   - Explore DeFi concepts

### Security Features
- Secure API key management
- Client-side data encryption
- Protected voice synthesis integration

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   ```
   ELEVEN_LABS_API_KEY=your_key_here
   ```
4. Start development server: `npm run dev`

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.