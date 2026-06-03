import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') || 'fr';
        }
        return 'fr';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    };

    const t = (obj) => {
        if (!obj) return "";
        if (typeof obj === 'string') return obj;
        return obj[language] || obj['fr'] || "";
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
