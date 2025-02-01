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

// Japanese translations
const jaJP = {
  common: {
    search: '暗号通貨を検索...',
    suggestions: '提案',
    liveMarketData: 'リアルタイム市場データ',
    currentPrice: '現在価格',
    predictedPrice: '予測価格',
    volume: '24時間取引高',
    marketCap: '時価総額',
    priceHistory: '価格履歴と予測',
  },
  tabs: {
    market: '市場',
    education: '教育',
    news: 'ニュース',
  },
  chat: {
    placeholder: '暗号通貨について質問する...',
    analyzing: '質問を分析中...',
    disclaimer: 'Alizaは暗号通貨に関する教育コンテンツを提供します。投資アドバイスではありません。',
    suggestedQuestions: '提案された質問',
    refresh: '更新',
  },
  toast: {
    responseReceived: '応答を受信',
    responseDescription: '最新の暗号通貨の洞察を入手しました！',
    error: 'エラー',
    errorDescription: '応答の取得に失敗しました。もう一度お試しください。',
    suggestions: '提案',
    suggestionsDescription: 'プラットフォームの改善アイデアをお持ちですか？フィードバックをお送りください。',
  },
};

// German translations
const deDE = {
  common: {
    search: 'Kryptowährungen suchen...',
    suggestions: 'Vorschläge',
    liveMarketData: 'Live-Marktdaten',
    currentPrice: 'Aktueller Preis',
    predictedPrice: 'Vorhergesagter Preis',
    volume: '24h Volumen',
    marketCap: 'Marktkapitalisierung',
    priceHistory: 'Preisverlauf & Prognose',
  },
  tabs: {
    market: 'Markt',
    education: 'Bildung',
    news: 'Nachrichten',
  },
  chat: {
    placeholder: 'Fragen Sie etwas über Krypto...',
    analyzing: 'Analysiere Ihre Frage...',
    disclaimer: 'Aliza bietet Bildungsinhalte über Kryptowährungen. Keine Finanzberatung.',
    suggestedQuestions: 'Vorgeschlagene Fragen',
    refresh: 'Aktualisieren',
  },
  toast: {
    responseReceived: 'Antwort erhalten',
    responseDescription: 'Neueste Krypto-Einblicke für Sie!',
    error: 'Fehler',
    errorDescription: 'Antwort konnte nicht abgerufen werden. Bitte versuchen Sie es erneut.',
    suggestions: 'Vorschläge',
    suggestionsDescription: 'Haben Sie Ideen zur Verbesserung unserer Plattform? Wir freuen uns über Ihr Feedback!',
  },
};

// Danish translations
const daDK = {
  common: {
    search: 'Søg kryptovalutaer...',
    suggestions: 'Forslag',
    liveMarketData: 'Live Markedsdata',
    currentPrice: 'Nuværende Pris',
    predictedPrice: 'Forventet Pris',
    volume: '24t Volume',
    marketCap: 'Markedsværdi',
    priceHistory: 'Prishistorik & Forudsigelse',
  },
  tabs: {
    market: 'Marked',
    education: 'Uddannelse',
    news: 'Nyheder',
  },
  chat: {
    placeholder: 'Spørg om krypto...',
    analyzing: 'Analyserer dit spørgsmål...',
    disclaimer: 'Aliza giver uddannelsesindhold om kryptovaluta. Ikke finansiel rådgivning.',
    suggestedQuestions: 'Foreslåede Spørgsmål',
    refresh: 'Opdater',
  },
  toast: {
    responseReceived: 'Svar modtaget',
    responseDescription: 'Fik de seneste krypto-indsigter til dig!',
    error: 'Fejl',
    errorDescription: 'Kunne ikke få svar. Prøv igen.',
    suggestions: 'Forslag',
    suggestionsDescription: 'Har du ideer til at forbedre vores platform? Vi vil gerne høre din feedback!',
  },
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enUS },
      ja: { translation: jaJP },
      de: { translation: deDE },
      da: { translation: daDK },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;