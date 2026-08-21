import { Plus } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';
import type { Service } from '@/types';
import { useLanguage } from '@/i18n/useLanguage';
import { tService } from '@/i18n/translations';

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Reveal delay={index * 60}>
      <div className="service-row">
        <span className="row-number">0{index + 1}</span>
        <div className="row-icon"><Icon size={24} /></div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <span className="row-plus"><Plus size={18} /></span>
      </div>
    </Reveal>
  );
}

export function Services() {
  const { language, t } = useLanguage();

  return (
    <PageShell>
      <PageHero eyebrow={t('Our capabilities')} title={<>{t('The right tools for')}<br /><em>{t("what's next.")}</em></>} text={t('We connect strategic thinking with deep AI expertise to create intelligent systems that are ready for the real world.')} />

      <section className="section service-list-section">
        <div className="container">
          <div className="service-list-head">
            <Reveal>
              <SectionHeading eyebrow={t('What we do')} title={<>{t('From first concept')}<br />{t('to ')}<em>{t('full scale.')}</em></>} />
            </Reveal>
            <p>{t('Every AI engagement is tailored to your goals, your context and your ambition.')}</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <ServiceRow key={service.title} service={tService(service, language)} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
