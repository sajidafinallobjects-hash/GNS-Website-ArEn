import {
  Search,
  Database,
  BrainCircuit,
  Rocket,
  Activity,
} from 'lucide-react';

import { Eyebrow } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    text: 'We understand your goals, challenges, data and business context before defining the right technology approach.',
  },
  {
    number: '02',
    icon: Database,
    title: 'Data preparation',
    text: 'We prepare the data, architecture and technical foundation required to build a reliable intelligent system.',
  },
  {
    number: '03',
    icon: BrainCircuit,
    title: 'Model development',
    text: 'We design, train and integrate AI and machine learning models around the real problem we are solving.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deployment',
    text: 'We turn the solution into a usable product or production-ready system that fits your workflow.',
  },
  {
    number: '05',
    icon: Activity,
    title: 'Monitoring & support',
    text: 'We monitor performance, learn from real-world usage and continuously improve the system as your needs evolve.',
  },
];

export function HowWeWork() {
  const { t } = useLanguage();

  return (
    <section className="section how-we-work">
      <div className="container">
        <Reveal>
          <div className="how-we-work-heading">
            <div>
              <Eyebrow>{t('How we work')}</Eyebrow>

              <h2>
                From first idea to
                <br />
                <em>intelligent delivery.</em>
              </h2>
            </div>

            <p>
              {t(
                'We combine strategy, data, engineering and AI into a practical process designed to move ideas from concept to real-world impact.'
              )}
            </p>
          </div>
        </Reveal>

        <div className="how-we-work-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 80}>
                <div className="how-we-work-step">
                  <div className="how-we-work-top">
                    <span>{step.number}</span>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3>{t(step.title)}</h3>

                  <p>{t(step.text)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}