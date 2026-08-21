import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { Eyebrow } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/useLanguage';

export function Projects() {
  const { t } = useLanguage();
  const featured = projects.filter((p) => p.featured);

  return (
    <PageShell>
      <PageHero eyebrow={t('Selected work')} title={<>{t('Proof in the')}<br /><em>{t('possibility.')}</em></>} text={t('We partner with people who see an opportunity to use AI differently — and give them the intelligent systems to make it real.')} />

      <section className="section projects-list">
        <div className="container">
          <div className="projects-list-intro">
            <Reveal>
              <Eyebrow>{t('Featured project')}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <p>{t('DermaVision AI is our featured flagship project — a full-stack AI platform for skin lesion analysis and clinical decision support.')}</p>
            </Reveal>
          </div>

          {featured.length > 0 && (
            <div className="projects-featured">
              {featured.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} featured />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
