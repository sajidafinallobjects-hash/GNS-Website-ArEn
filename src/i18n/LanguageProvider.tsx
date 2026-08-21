import { useEffect, useMemo, useState } from 'react';
import { LanguageContext, type LanguageContextValue } from './LanguageContext';
import { translate, type Language } from './translations';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('gns-language') as Language) || 'en');

  useEffect(() => {
    localStorage.setItem('gns-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = 'GNS | GULF NET SOLUTION SPC';
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (value: string) => translate(value, language),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
