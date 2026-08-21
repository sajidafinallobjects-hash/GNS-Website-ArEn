import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from './SectionHeading';
import { useLanguage } from '@/i18n/useLanguage';

export function CTA() {
  const { t } = useLanguage();
  return (
    <section className="cta section">
      <div className="container cta-inner">
        <div>
          <Eyebrow>{t("Let's make progress")}</Eyebrow>
          <h2>{t("Have an AI challenge")}<br /><em>{t('worth solving?')}</em></h2>
        </div>
        <Link className="button button-primary" to="/contact">
          {t('Start a conversation')} <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
