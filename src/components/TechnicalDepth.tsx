import {
  BrainCircuit,
  Database,
  Code2,
  Cloud,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

import { Eyebrow } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    text: 'Machine learning, deep learning and intelligent systems designed around real business problems.',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Computer Vision'],
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    text: 'Turning complex datasets into structured insights, predictive models and measurable outcomes.',
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL'],
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    text: 'Building reliable applications and APIs that connect intelligent models with real-world workflows.',
    technologies: ['Python', 'FastAPI', 'React', 'REST APIs'],
  },
  {
    icon: Cloud,
    title: 'AI Applications',
    text: 'Taking AI from experimentation to usable applications through practical product engineering.',
    technologies: ['Model Integration', 'APIs', 'Automation', 'Deployment'],
  },
  {
    icon: BarChart3,
    title: 'Computer Vision',
    text: 'Extracting meaningful information from images and visual data using modern vision models.',
    technologies: ['CNNs', 'Transfer Learning', 'Image Classification', 'Object Detection'],
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Systems',
    text: 'Designing systems with security, maintainability and production reliability in mind.',
    technologies: ['Authentication', 'Validation', 'Monitoring', 'Scalable Architecture'],
  },
];

export function TechnicalDepth() {
  const { t } = useLanguage();

  return (
    <section className="section technical-depth section-tint">
      <div className="container">
        <Reveal>
          <div className="technical-depth-heading">
            <div>
              <Eyebrow>{t('Technical depth')}</Eyebrow>

              <h2>
                Built on real
                <br />
                <em>technology.</em>
              </h2>
            </div>

            <p>
              {t(
                'We combine modern AI frameworks, data technologies and software engineering practices to build intelligent systems that are practical, scalable and ready for real-world use.'
              )}
            </p>
          </div>
        </Reveal>

        <div className="technical-depth-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <Reveal key={capability.title} delay={index * 70}>
                <article className="technical-card">
                  <div className="technical-card-top">
                    <span>0{index + 1}</span>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3>{t(capability.title)}</h3>

                  <p>{t(capability.text)}</p>

                  <div className="technical-tags">
                    {capability.technologies.map((technology) => (
                      <span key={technology}>
                        {t(technology)}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}