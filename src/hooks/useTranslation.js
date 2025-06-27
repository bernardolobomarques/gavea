import { useLanguage } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const { t, language, changeLanguage, isEnglish, isPortuguese } = useLanguage();
  
  return {
    t,
    language,
    changeLanguage,
    isEnglish,
    isPortuguese
  };
};
