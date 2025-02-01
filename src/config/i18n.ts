import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enUS = {
  common: {
    search: 'Search cryptocurrencies...',
    suggestions: 'Suggestions',
    liveMarketData: 'Live Market Data',
    currentPrice: 'Current Price',
    predictedPrice: 'Predicted Price',
    volume: '24h Volume',
    marketCap: 'Market Cap',
    priceHistory: 'Price History & Prediction',
  },
  tabs: {
    market: 'Market',
    education: 'Education',
    news: 'News',
  },
  chat: {
    placeholder: 'Ask anything about crypto...',
    analyzing: 'Analyzing your question...',
    disclaimer: 'Ask Aliza provides educational content about cryptocurrency. Not financial advice.',
    suggestedQuestions: 'Suggested Questions',
    refresh: 'Refresh',
  },
  toast: {
    responseReceived: 'Response received',
    responseDescription: 'Got the latest crypto insights for you!',
    error: 'Error',
    errorDescription: 'Failed to get response. Please try again.',
    suggestions: 'Suggestions',
    suggestionsDescription: "Have ideas to improve our platform? We'd love to hear them! Send us your feedback.",
  },
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enUS },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;