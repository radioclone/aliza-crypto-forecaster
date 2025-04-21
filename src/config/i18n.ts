
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enUS } from './i18n/translations/en';
import { jaJP } from './i18n/translations/ja';
import { deDE } from './i18n/translations/de';
import { daDK } from './i18n/translations/da';
import { arAR } from './i18n/translations/ar';
import { heIL } from './i18n/translations/he';
import { hiIN } from './i18n/translations/hi';
import { urPK } from './i18n/translations/ur';
import { zhCN } from './i18n/translations/zh';
import { esES } from './i18n/translations/es';

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
      es: { translation: esES },
    },
    lng: 'ja', // Set Japanese as the default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
