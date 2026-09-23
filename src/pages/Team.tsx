import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { Eyebrow } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const team = [
  {
    name: 'GNS Leadership',
    role: 'Strategy & Direction',
    description:
      'Driving the vision, partnerships and strategic direction behind GNS and its technology initiatives.',
    initials: 'GNS',
  },
  {
    name: 'AI & Data Team',
    role: 'Artificial Intelligence & Data Science',
    description:
      'Designing intelligent systems, machine learning models and data-driven solutions for real-world challenges.',
    initials: 'AI',
  },
  {
    name: 'Engineering Team',
    role: 'Software & Product Engineering',
    description:
      'Turning ideas and AI capabilities into reliable, scalable and production-ready digital products.',
    initials: 'ENG',
  },
];

export function Team() {
  const { t } = useLanguage();

  return (
    <PageShell>
      <PageHero
        eyebrow={t('Our team')}
        title={
          <>
            People behind the
            <br />
            <em>intelligence.</em>
          </>
        }
        text={t(
          'A multidisciplinary team bringing together strategy, artificial intelligence, data science and engineering to build technology that matters.'
        )}
      />

      <section className="section team-page">
        <div className="container">
          <div className="team-intro">
            <Reveal>
              <Eyebrow>{t('The people')}</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <p>
                {t(
                  'GNS brings together different technical perspectives around one goal: turning complex problems into practical technology.'
                )}
              </p>
            </Reveal>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <article className="team-card">
                  <div className="team-card-image">
                    <span>{member.initials}</span>
                  </div>

                  <div className="team-card-content">
                    <span className="team-role">
                      {t(member.role)}
                    </span>

                    <h3>{t(member.name)}</h3>

                    <p>{t(member.description)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint team-values">
        <div className="container">
          <div className="team-values-grid">
            <Reveal>
              <div>
                <Eyebrow>{t('How we think')}</Eyebrow>

                <h2>
                  Different disciplines.
                  <br />
                  <em>One direction.</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="team-values-copy">
                <p>
                  {t(
                    'We believe strong technology comes from combining business understanding with technical depth. Our teams work across disciplines to keep every solution practical, measurable and ready for the real world.'
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}