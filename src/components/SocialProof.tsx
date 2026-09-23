import {
  BrainCircuit,
  Code2,
  Database,
  Globe2,
} from 'lucide-react';

import { Eyebrow } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const proofItems = [
  {
    icon: BrainCircuit,
    value: 'AI-first',
    label: 'Technology approach',
    text: 'Artificial Intelligence and Machine Learning at the core of our solutions.',
  },
  {
    icon: Code2,
    value: 'End-to-end',
    label: 'Development',
    text: 'From concept and model development to application and deployment.',
  },
  {
    icon: Database,
    value: 'Data-driven',
    label: 'Engineering',
    text: 'Solutions designed around data, measurable outcomes and real-world requirements.',
  },
  {
    icon: Globe2,
    value: 'Gulf',
    label: 'Technology partner',
    text: 'Building practical technology solutions for businesses across the region.',
  },
];

export function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="section social-proof">
      <div className="container">
        <Reveal>
          <div className="social-proof-heading">
            <div>
              <Eyebrow>{t('Why businesses trust the approach')}</Eyebrow>

              <h2>
                Technology with
                <br />
                <em>purpose.</em>
              </h2>
            </div>

            <p>
              {t(
                'We focus on practical technology, transparent collaboration and solutions designed around the outcomes that matter.'
              )}
            </p>
          </div>
        </Reveal>

        <div className="social-proof-grid">
          {proofItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.value} delay={index * 80}>
                <article className="social-proof-card">
                  <div className="social-proof-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <strong>{t(item.value)}</strong>

                  <span>{t(item.label)}</span>

                  <p>{t(item.text)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}