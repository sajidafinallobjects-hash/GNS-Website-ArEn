import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ProjectCaseStudy } from '@/types';
import { Reveal } from './Reveal';
import { useLanguage } from '@/i18n/useLanguage';
import { tProject } from '@/i18n/translations';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const tp = tProject(project, language);
  const Icon = tp.icon;

  if (featured) {
    return (
      <Reveal delay={index * 100}>
        <Link to={`/projects/${project.slug}`} className="project-card project-card-featured">
          <div className="project-card-visual project-card-visual-featured">
            <div className="visual-grid" />
            <div className="project-card-ring project-card-ring-featured">
              <Icon size={48} strokeWidth={1} />
            </div>
            <span className="project-card-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="project-card-badge">{t('Featured')}</span>
          </div>
          <div className="project-card-copy project-card-copy-featured">
            <span className="project-index">{tp.category}</span>
            <h2>{tp.title}</h2>
            <p>{tp.description}</p>
            <div className="project-card-tags">
              {tp.technologies.slice(0, 4).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="button button-light project-card-cta">
              {t('View Case Study')} <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 100}>
      <Link to={`/projects/${project.slug}`} className="project-card project-card-standard">
        <div className="project-card-visual">
          <div className="visual-grid" />
          <div className="project-card-ring">
            <Icon size={32} strokeWidth={1.2} />
          </div>
          <span className="project-card-number">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="project-card-copy">
          <span className="project-index">{tp.category}</span>
          <h2>{tp.title}</h2>
          <p>{tp.description}</p>
          <span className="under-link">{t('View Case Study')} <ArrowRight size={16} /></span>
        </div>
      </Link>
    </Reveal>
  );
}
