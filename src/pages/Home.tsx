import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, ChevronDown, ScanSearch } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { Eyebrow, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/useLanguage';
import { tService, tProject } from '@/i18n/translations';

export function Home() {
  const { language, t } = useLanguage();

  return (
    <PageShell>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <Eyebrow>{t('AI-first technology')}</Eyebrow>
            <h1>{t("Build what's")}<br /><em>{t('next')}</em></h1>
            <p>{t('We build intelligent systems that turn ambitious ideas into real-world solutions.')}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">{t('Start a conversation')} <ArrowRight size={17} /></Link>
              <Link className="text-link" to="/services">{t('Explore our capabilities')} <span>↗</span></Link>
            </div>
            <p className="hero-supporting">{t('From Artificial Intelligence and Machine Learning to intelligent applications and automation, GNS transforms ideas into practical technology designed to solve real-world problems.')}</p>
          </div>
          <div className="hero-art">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="hero-card">
              <span className="card-kicker">GNS / 01</span>
              <div className="card-icon"><ScanSearch size={28} /></div>
              <strong>{t('Intelligence in motion.')}</strong>
              <span className="card-line" />
            </div>
            <div className="hero-stat">
              <strong>01</strong>
              <span>{t('AI-first technology')}<br />{t('partner in the Gulf')}</span>
            </div>
          </div>
        </div>
        <div className="container hero-foot">
          <span>{t('Muscat · Oman')}</span>
          <span>{t('Scroll to explore')} <ChevronDown size={15} /></span>
        </div>
      </section>

      <section className="intro section">
        <div className="container intro-grid">
          <Reveal>
            <Eyebrow>{t('Who we are')}</Eyebrow>
            <h2>{t('Intelligence is only powerful when it solves')} <em>{t('real problems.')}</em></h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="intro-body">
              <p>{t('We bring together AI research, engineering and product thinking to solve meaningful business challenges. From first concept to long-term growth, GNS makes intelligent systems practical, reliable and genuinely useful.')}</p>
              <Link className="under-link" to="/about">{t('More about GNS')} <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="services-preview section section-tint">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('What we do')} title={<>{t('Intelligence for a')} <em>{t('changing world.')}</em></>} text={t('From Artificial Intelligence and Machine Learning to intelligent applications and automation, we build the systems that help businesses move with confidence.')} />
          </Reveal>
          <div className="service-grid">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.title} service={tService(service, language)} index={index} />
            ))}
          </div>
          <Link className="button button-outline" to="/services">{t('View all capabilities')} <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="projects-preview section section-navy">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('Selected work')} title={<>{t('Ideas turned into')} <em>{t('intelligence.')}</em></>} text={t('A glimpse into the kinds of AI challenges we love to take on.')} light />
          </Reveal>
          <Reveal delay={150}>
            <div className="project-feature">
              <div className="project-visual">
                <div className="visual-grid" />
                <div className="project-chip"><BrainCircuit size={20} /><span>{t('Computer vision')}<br />{t('deep learning')}</span></div>
                <div className="visual-ring" />
              </div>
              <div className="project-detail">
                <span className="project-index">01 / {t('Case study')}</span>
                <h3>{tProject(projects[0], language).title}</h3>
                <p>{tProject(projects[0], language).description}</p>
                <div className="tag-list">
                  {projects[0].technologies.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link className="button button-light" to={`/projects/${projects[0].slug}`}>{t('View case study')} <ArrowRight size={16} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="statement section">
        <div className="container statement-inner">
          <div className="statement-number">02</div>
          <Reveal>
            <Eyebrow>{t('Why GNS')}</Eyebrow>
            <h2>{t('Big-picture thinking.')}<br /><em>{t('Grounded delivery.')}</em></h2>
            <p>{t('We stay close to the real world — your people, your customers and the outcomes that matter. No hype. No unnecessary complexity. Just intelligent systems built to perform.')}</p>
            <Link className="under-link" to="/why-gns">{t('Why clients choose us')} <ArrowRight size={16} /></Link>
          </Reveal>
          <div className="statement-accent">◒</div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
