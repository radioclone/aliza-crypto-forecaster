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
    title: 'Crypto Analytics',
    aiPrompt1: 'What is the future of Bitcoin?',
    aiPrompt2: 'How does blockchain work?',
    aiPrompt3: 'Explain smart contracts',
    aiPrompt4: 'What are NFTs?',
    aiPrompt5: 'How to start investing in crypto?',
    aiPrompt6: 'What is DeFi?',
    aiPrompt7: 'What is AiFi in crypto?', // New AiFi prompt
    aiPrompt8: 'What is Mode Network?', // New Mode Network prompt
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
    title: '暗号通貨分析',
    aiPrompt1: 'ビットコインの将来は？',
    aiPrompt2: 'ブロックチェーンの仕組みは？',
    aiPrompt3: 'スマートコントラクトについて説明',
    aiPrompt4: 'NFTとは？',
    aiPrompt5: '暗号通貨投資を始めるには？',
    aiPrompt6: 'DeFiとは？',
    aiPrompt7: '暗号通貨のAiFiとは？', // New AiFi prompt
    aiPrompt8: 'Mode Networkとは何ですか？', // New Mode Network prompt
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
    title: 'Krypto-Analyse',
    aiPrompt1: 'Wie ist die Zukunft von Bitcoin?',
    aiPrompt2: 'Wie funktioniert Blockchain?',
    aiPrompt3: 'Erklären Sie Smart Contracts',
    aiPrompt4: 'Was sind NFTs?',
    aiPrompt5: 'Wie fängt man mit Krypto-Investment an?',
    aiPrompt6: 'Was ist DeFi?',
    aiPrompt7: 'Was ist AiFi in Krypto?', // New AiFi prompt
    aiPrompt8: 'Was ist das Mode Network?', // New Mode Network prompt
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
    title: 'Krypto Analyse',
    aiPrompt1: 'Hvad er fremtiden for Bitcoin?',
    aiPrompt2: 'Hvordan fungerer blockchain?',
    aiPrompt3: 'Forklar smart contracts',
    aiPrompt4: 'Hvad er NFTs?',
    aiPrompt5: 'Hvordan starter man med at investere i krypto?',
    aiPrompt6: 'Hvad er DeFi?',
    aiPrompt7: 'Hvad er AiFi i krypto?', // New AiFi prompt
    aiPrompt8: 'Hvad er Mode Network?', // New Mode Network prompt
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

// Arabic translations
const arAR = {
  common: {
    search: 'البحث عن العملات المشفرة...',
    suggestions: 'اقتراحات',
    liveMarketData: 'بيانات السوق المباشرة',
    currentPrice: 'السعر الحالي',
    predictedPrice: 'السعر المتوقع',
    volume: 'حجم 24 ساعة',
    marketCap: 'القيمة السوقية',
    priceHistory: 'تاريخ السعر والتنبؤ',
    title: 'تحليلات العملات المشفرة',
    aiPrompt1: 'ما هو مستقبل البيتكوين؟',
    aiPrompt2: 'كيف تعمل البلوكتشين؟',
    aiPrompt3: 'اشرح العقود الذكية',
    aiPrompt4: 'ما هي الرموز غير القابلة للاستبدال؟',
    aiPrompt5: 'كيف أبدأ الاستثمار في العملات المشفرة؟',
    aiPrompt6: 'ما هو التمويل اللامركزي؟',
    aiPrompt7: 'ما هو AiFi في العملات المشفرة؟', // New AiFi prompt
    aiPrompt8: 'ما هو Mode Network؟', // New Mode Network prompt
  },
  tabs: {
    market: 'السوق',
    education: 'التعليم',
    news: 'الأخبار',
  },
  chat: {
    placeholder: 'اسأل أي شيء عن العملات المشفرة...',
    analyzing: 'تحليل سؤالك...',
    disclaimer: 'تقدم Aliza محتوى تعليمي حول العملات المشفرة. ليست نصيحة مالية.',
    suggestedQuestions: 'أسئلة مقترحة',
    refresh: 'تحديث',
  },
  toast: {
    responseReceived: 'تم استلام الرد',
    responseDescription: 'حصلت على أحدث رؤى العملات المشفرة!',
    error: 'خطأ',
    errorDescription: 'فشل في الحصول على رد. حاول مرة اخرى.',
    suggestions: 'اقتراحات',
    suggestionsDescription: 'هل لديك أفكار لتحسين منصتنا؟ نود أن نسمع ملاحظاتك!',
  },
};

// Hebrew translations
const heIL = {
  common: {
    search: 'חפש מטבעות קריפטו...',
    suggestions: 'הצעות',
    liveMarketData: 'נתוני שוק בזמן אמת',
    currentPrice: 'מחיר נוכחי',
    predictedPrice: 'מחיר חזוי',
    volume: 'נפח 24 שעות',
    marketCap: 'שווי שוק',
    priceHistory: 'היסטוריית מחירים ותחזית',
    title: 'ניתוח מטבעות דיגיטליים',
    aiPrompt1: 'מה העתיד של ביטקוין?',
    aiPrompt2: 'איך עובד בלוקצ\'יין?',
    aiPrompt3: 'הסבר על חוזים חכמים',
    aiPrompt4: 'מה זה NFT?',
    aiPrompt5: 'איך מתחילים להשקיע בקריפטו?',
    aiPrompt6: 'מה זה DeFi?',
    aiPrompt7: 'מה זה AiFi בקריפטו?', // New AiFi prompt
    aiPrompt8: 'מה זה Mode Network?', // New Mode Network prompt
  },
  tabs: {
    market: 'שוק',
    education: 'חינוך',
    news: 'חדשות',
  },
  chat: {
    placeholder: 'שאל כל דבר על קריפטו...',
    analyzing: 'מנתח את השאלה שלך...',
    disclaimer: 'Aliza מספקת תוכן חינוכי על מטבעות קריפטוגרפיים. לא ייעוץ פיננסי.',
    suggestedQuestions: 'שאלות מוצעות',
    refresh: 'רענן',
  },
  toast: {
    responseReceived: 'התקבלה תשובה',
    responseDescription: 'קיבלת את התובנות העדכניות ביותר על קריפטו!',
    error: 'שגיאה',
    errorDescription: 'נכשל בקבלת תשובה. אנא נסה שוב.',
    suggestions: 'הצעות',
    suggestionsDescription: 'יש לך רעיונות לשיפור הפלטפורמה שלנו? נשמח לשמוע את המשוב שלך!',
  },
};

// Hindi translations
const hiIN = {
  common: {
    search: 'क्रिप्टोकरेंसी खोजें...',
    suggestions: 'सुझाव',
    liveMarketData: 'लाइव मार्केट डेटा',
    currentPrice: 'वर्तमान मूल्य',
    predictedPrice: 'अनुमानित मूल्य',
    volume: '24 घंटे का वॉल्यूम',
    marketCap: 'मार्केट कैप',
    priceHistory: 'मूल्य इतिहास और भविष्यवाणी',
    title: 'क्रिप्टो विश्लेषण',
    aiPrompt1: 'बिटकॉइन का भविष्य क्या है?',
    aiPrompt2: 'ब्लॉकचेन कैसे काम करता है?',
    aiPrompt3: 'स्मार्ट कॉन्ट्रैक्ट्स की व्याख्या करें',
    aiPrompt4: 'NFT क्या हैं?',
    aiPrompt5: 'क्रिप्टो में निवेश कैसे शुरू करें?',
    aiPrompt6: 'DeFi क्या है?',
    aiPrompt7: 'क्रिप्टो में AiFi क्या है?', // New AiFi prompt
    aiPrompt8: 'Mode Network क्या है?', // New Mode Network prompt
  },
  tabs: {
    market: 'मार्केट',
    education: 'शिक्षा',
    news: 'समाचार',
  },
  chat: {
    placeholder: 'क्रिप्टो के बारे में कुछ भी पूछें...',
    analyzing: 'आपका प्रश्न विश्लेषण कर रहे हैं...',
    disclaimer: 'Aliza क्रिप्टोकरेंसी के बारे में शैक्षिक सामग्री प्रदान करती है। वित्तीय सलाह नहीं है।',
    suggestedQuestions: 'सुझाए गए प्रश्न',
    refresh: 'रीफ्रेश',
  },
  toast: {
    responseReceived: 'जवाब मिला',
    responseDescription: 'आपके लिए नवीनतम क्रिप्टो अंतर्दृष्टि मिली!',
    error: 'त्रुटि',
    errorDescription: 'जवाब प्राप्त करने में विफल। कृपया पुनः प्रयास करें।',
    suggestions: 'सुझाव',
    suggestionsDescription: 'हमारे प्लेटफॉर्म को बेहतर बनाने के लिए विचार हैं? हम आपकी प्रतिक्रिया सुनना चाहेंगे!',
  },
};

// Urdu translations
const urPK = {
  common: {
    search: 'کرپٹو کرنسی تلاش کریں...',
    suggestions: 'تجاویز',
    liveMarketData: 'لائیو مارکیٹ ڈیٹا',
    currentPrice: 'موجودہ قیمت',
    predictedPrice: 'متوقع قیمت',
    volume: '24 گھنٹے کا والیوم',
    marketCap: 'مارکیٹ کیپ',
    priceHistory: 'قیمت کی تاریخ اور پیشن گوئی',
    title: 'کرپٹو تجزیہ',
    aiPrompt1: 'بٹ کوائن کا مستقبل کیا ہے؟',
    aiPrompt2: 'بلاکچین کیسے کام کرتی ہے؟',
    aiPrompt3: 'سمارٹ کنٹریکٹس کی وضاحت کریں',
    aiPrompt4: 'NFTs کیا ہیں؟',
    aiPrompt5: 'کرپٹو میں سرمایہ کاری کیسے شروع کریں؟',
    aiPrompt6: 'DeFi کیا ہے؟',
    aiPrompt7: 'کرپٹو میں AiFi کیا ہے؟', // New AiFi prompt
    aiPrompt8: 'Mode Network کیا ہے؟', // New Mode Network prompt
  },
  tabs: {
    market: 'مارکیٹ',
    education: 'تعلیم',
    news: 'خبریں',
  },
  chat: {
    placeholder: 'کرپٹو کے بارے میں کچھ بھی پوچھیں...',
    analyzing: 'آپ کا سوال تجزیہ کر رہے ہیں...',
    disclaimer: 'Aliza کرپٹو کرنسی کے بارے میں تعلیمی مواد فراہم کرتی ہے۔ مالی مشورہ نہیں ہے۔',
    suggestedQuestions: 'تجویز کردہ سوالات',
    refresh: 'ریفریش',
  },
  toast: {
    responseReceived: 'جواب موصول ہوا',
    responseDescription: 'آپ کے لیے تازہ ترین کرپٹو بصیرت حاصل کی!',
    error: 'خرابی',
    errorDescription: 'جواب حاصل کرنے میں ناکام۔ براہ کرم دوبارہ کوشش کریں۔',
    suggestions: 'اقتراحات',
    suggestionsDescription: 'ہمارے پلیٹ فارم کو بہتر بنانے کے لیے خیالات ہیں؟ ہم آپ کی رائے سننا چاہیں گے!',
  },
};

// Mandarin translations
const zhCN = {
  common: {
    search: '搜索加密货币...',
    suggestions: '建议',
    liveMarketData: '实时市场数据',
    currentPrice: '当前价格',
    predictedPrice: '预测价格',
    volume: '24小时交易量',
    marketCap: '市值',
    priceHistory: '价格历史和预测',
    title: '加密货币分析',
    aiPrompt1: '比特币的未来如何？',
    aiPrompt2: '区块链是如何运作的？',
    aiPrompt3: '解释智能合约',
    aiPrompt4: '什么是NFT？',
    aiPrompt5: '如何开始加密货币投资？',
    aiPrompt6: '什么是DeFi？',
    aiPrompt7: '什么是加密货币中的AiFi？', // New AiFi prompt
    aiPrompt8: 'Mode Network是什么？', // New Mode Network prompt
  },
  tabs: {
    market: '市场',
    education: '教育',
    news: '新闻',
  },
  chat: {
    placeholder: '询问任何关于加密货币的问题...',
    analyzing: '正在分析您的问题...',
    disclaimer: 'Aliza提供加密货币教育内容。不构成财务建议。',
    suggestedQuestions: '建议的问题',
    refresh: '刷新',
  },
};

// Spanish translations
const esES = {
  common: {
    search: 'Buscar criptomonedas...',
    suggestions: 'Sugerencias',
    liveMarketData: 'Datos del Mercado en Vivo',
    currentPrice: 'Precio Actual',
    predictedPrice: 'Precio Previsto',
    volume: 'Volumen 24h',
    marketCap: 'Capitalización de Mercado',
    priceHistory: 'Historial de Precios y Predicción',
    title: 'Análisis Cripto',
    aiPrompt1: '¿Cuál es el futuro del Bitcoin?',
    aiPrompt2: '¿Cómo funciona blockchain?',
    aiPrompt3: 'Explica los contratos inteligentes',
    aiPrompt4: '¿Qué son los NFTs?',
    aiPrompt5: '¿Cómo empezar a invertir en cripto?',
    aiPrompt6: '¿Qué es DeFi?',
    aiPrompt7: '¿Qué es AiFi en cripto?', // New AiFi prompt
    aiPrompt8: '¿Qué es Mode Network?', // New Mode Network prompt
  },
  tabs: {
    market: 'Mercado',
    education: 'Educación',
    news: 'Noticias',
  },
  chat: {
    placeholder: 'Pregunta cualquier cosa sobre cripto...',
    analyzing: 'Analizando tu pregunta...',
    disclaimer: 'Aliza proporciona contenido educativo sobre criptomonedas. No es asesoramiento financiero.',
    suggestedQuestions: 'Preguntas Sugeridas',
    refresh: 'Actualizar',
  },
  toast: {
    responseReceived: 'Respuesta recibida',
    responseDescription: '¡Tenemos las últimas perspectivas cripto para ti!',
    error: 'Error',
    errorDescription: 'No se pudo obtener respuesta. Por favor, inténtalo de nuevo.',
    suggestions: 'Sugerencias',
    suggestionsDescription: '¿Tienes ideas para mejorar nuestra plataforma? ¡Nos encantaría escuchar tus comentarios!',
  },
};

// Update i18n initialization to include Spanish
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enUS },
      ja: { translation: jaJP },
      de: { translation: deDE },
      da: { translation: daDK },
      ar: { translation: arAR },
      he: { translation: heIL },
      hi: { translation: hiIN },
      ur: { translation: urPK },
      zh: { translation: zhCN },
      es: { translation: esES }, // Add Spanish
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
