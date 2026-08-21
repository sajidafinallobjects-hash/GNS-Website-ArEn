import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, Globe } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { Logo } from './Logo';
import { useLanguage } from '@/i18n/useLanguage';

function LangButton({ lang, label, language, setLanguage }: { lang: 'en' | 'ar'; label: string; language: 'en' | 'ar'; setLanguage: (l: 'en' | 'ar') => void }) {
  return (
    <button
      type="button"
      className={language === lang ? 'lang-active' : ''}
      onClick={() => setLanguage(lang)}
      aria-label={label}
      aria-pressed={language === lang}
    >
      {label}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth > 800) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={open ? 'mobile-open' : ''} aria-label={language === 'ar' ? 'التنقل' : 'Main navigation'}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className={location.pathname === link.to ? 'active' : ''}
              to={link.to}
              onClick={() => setOpen(false)}
            >
              {t(link.label)}
            </Link>
          ))}
          <div className="lang-switch">
            <Globe size={14} />
            {language === 'ar' ? (
              <>
                <LangButton lang="ar" label="العربية" language={language} setLanguage={setLanguage} />
                <span className="lang-sep">|</span>
                <LangButton lang="en" label="EN" language={language} setLanguage={setLanguage} />
              </>
            ) : (
              <>
                <LangButton lang="en" label="EN" language={language} setLanguage={setLanguage} />
                <span className="lang-sep">|</span>
                <LangButton lang="ar" label="العربية" language={language} setLanguage={setLanguage} />
              </>
            )}
          </div>
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            {t('Start a conversation')} <ArrowRight size={15} />
          </Link>
        </nav>
        <div className="mobile-header-controls">
          <LangButton lang="en" label="EN" language={language} setLanguage={setLanguage} />
          <span className="lang-sep">|</span>
          <LangButton lang="ar" label="العربية" language={language} setLanguage={setLanguage} />
        </div>
        <button
          className="menu-button"
          aria-label={open ? (language === 'ar' ? 'إغلاق القائمة' : 'Close navigation') : (language === 'ar' ? 'فتح القائمة' : 'Open navigation')}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
