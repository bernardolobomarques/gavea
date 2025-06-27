import React, { createContext, useContext, useState, useEffect } from 'react';
import { pt } from '../translations/pt';
import { en } from '../translations/en';

const LanguageContext = createContext();

const translations = {
  'pt-BR': pt,
  'en': en
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Recupera o idioma salvo no localStorage ou usa português como padrão
    return localStorage.getItem('gavea-language') || 'pt-BR';
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('gavea-language', newLanguage);
  };

  const t = translations[language] || translations['pt-BR'];

  useEffect(() => {
    // Salva no localStorage sempre que o idioma mudar
    localStorage.setItem('gavea-language', language);
  }, [language]);

  const value = {
    language,
    changeLanguage,
    t,
    isEnglish: language === 'en',
    isPortuguese: language === 'pt-BR'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};
