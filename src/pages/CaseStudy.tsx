import { useParams, Link, Navigate } from 'react-router-dom';
import { ScanSearch, BrainCircuit, Code2, Database, BarChart3, FileText, History, ImagePlus, Activity, Eye, ShieldCheck, Layers } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { Eyebrow, SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/useLanguage';
import { tProject } from '@/i18n/translations';

const featureIcons = [BrainCircuit, ScanSearch, Eye, BarChart3, ImagePlus, History, FileText, Activity, Code2, Database, Layers, ShieldCheck];

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const tp = tProject(project, language);
  const Icon = tp.icon;

  const lesionClasses = ['AKIEC', 'BCC', 'BKL', 'DF', 'MEL', 'NV', 'VASC'];

  return (
    <PageShell>
      <section className="case-hero">
        <div className="container">
          <Link className="back-link" to="/projects"><span className="back-arrow">←</span> {t('Back to projects')}</Link>
          <div className="case-meta">
            <Eyebrow>{t('Case study')}</Eyebrow>
            <span>{tp.category}</span>
          </div>
          <h1>{tp.title}<em>.</em></h1>
          <p>{tp.description}</p>
          <div className="case-hero-art">
            <div className="visual-grid" />
            <div className="case-circle"><Icon size={70} strokeWidth={1} /></div>
            <span>{tp.technologies.slice(0, 2).join(' · ').toUpperCase()}<br />{tp.technologies.slice(2, 4).join(' · ').toUpperCase()}</span>
          </div>
        </div>
      </section>

      <section className="section case-overview">
        <div className="container case-grid">
          <Reveal>
            <div>
              <Eyebrow>{t('Overview')}</Eyebrow>
              <h2>{t('The story behind the')} <em>{t('build.')}</em></h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="large-copy">{tp.overview}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container case-challenge">
          <Reveal>
            <div>
              <Eyebrow>{t('The challenge')}</Eyebrow>
              <h2>{t('Turning complex signals into a clear next')} <em>{t('step.')}</em></h2>
              <p>{tp.challenge}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section case-solution">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('The solution')} title={<>{t('A thoughtful interface for')}<br /><em>{t('intelligent systems.')}</em></>} text={tp.solution} />
          </Reveal>
          <div className="feature-grid">
            {tp.features.map((feature, index) => {
              const FeatureIcon = featureIcons[index % featureIcons.length];
              return (
                <Reveal key={feature.title} delay={index * 60}>
                  <div className="feature">
                    <div><FeatureIcon size={28} strokeWidth={1.5} /></div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-navy case-tech">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('The toolkit')} title={<>{t('AI technology that does the')}<br /><em>{t('heavy lifting.')}</em></>} light />
          </Reveal>
          <Reveal delay={100}>
            <div className="case-tags">
              {tp.technologies.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint case-dataset">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('Dataset & model')} title={<>{t('Training data and')}<br /><em>{t('AI architecture.')}</em></>} />
          </Reveal>
          <div className="case-info-grid">
            <Reveal>
              <div className="case-info-card">
                <div className="case-info-icon"><Database size={28} strokeWidth={1.5} /></div>
                <h3>{t('Dataset')}</h3>
                <p>{language === 'ar'
                  ? 'دُرّب النموذج على مجموعتي بيانات HAM10000 و ISIC 2019، مع إزالة الصور المكرّرة ومعالجة دقيقة للبيانات تشمل تغيير الحجم والتوسيع والتطبيع وغيرها من تقنيات المعالجة المسبقة.'
                  : 'The model was trained on the HAM10000 and ISIC 2019 datasets, with duplicate-image removal and data preprocessing including resizing, augmentation, normalization and other preprocessing techniques.'}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="case-info-card">
                <div className="case-info-icon"><BrainCircuit size={28} strokeWidth={1.5} /></div>
                <h3>{t('AI model')}</h3>
                <p>{language === 'ar'
                  ? 'نموذج تعلم عميق مبني على EfficientNet مُدرَّب مسبقاً، اختير لأدائه المتوازن في تصنيف الصور الطبية.'
                  : 'A pretrained EfficientNet-based deep learning model, chosen for its balanced performance on medical image classification.'}</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="case-info-card">
                <div className="case-info-icon"><ScanSearch size={28} strokeWidth={1.5} /></div>
                <h3>{t('Image processing')}</h3>
                <p>{language === 'ar'
                  ? 'تشمل معالجة الصور تغيير الحجم والتوسيع والتطبيع وغيرها من تقنيات المعالجة المسبقة لتحسين أداء النموذج وموثوقيته.'
                  : 'Image processing includes resizing, augmentation, normalization and other preprocessing techniques to improve model performance and reliability.'}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section case-classes">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('Classification')} title={<>{t('Seven skin lesion')} <em>{t('categories.')}</em></>} text={language === 'ar'
              ? 'يصنّف النظام آفات الجلد ضمن سبع فئات:'
              : 'The system classifies skin lesions across seven categories:'} />
          </Reveal>
          <Reveal delay={100}>
            <div className="classes-grid">
              {lesionClasses.map((cls, index) => (
                <Reveal key={cls} delay={index * 60}>
                  <div className="class-card">
                    <span className="class-code">{cls}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint case-explainability">
        <div className="container case-grid">
          <Reveal>
            <div>
              <Eyebrow>{t('Explainability')}</Eyebrow>
              <h2>{t('Grad-CAM')} <em>{t('visualization.')}</em></h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="large-copy">{language === 'ar'
                ? 'يستخدم النظام تصور Grad-CAM لإبراز مناطق الصورة التي أثّرت في تنبؤ النموذج، مما يساعد المتخصصين على فهم استدلال الذكاء الاصطناعي وتقييمه بدلاً من الاعتماد عليه ثقةً عمياء. هذا يضيف طبقة من الشفافية والثقة إلى عملية اتخاذ القرار السريري.'
                : 'The system uses Grad-CAM visualization to highlight the image regions that influenced the model prediction, helping clinicians understand and evaluate the AI reasoning rather than relying on it blindly. This adds a layer of transparency and trust to the clinical decision-making process.'}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section case-results">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('Results')} title={<>{t('Outcomes that')} <em>{t('matter.')}</em></>} />
          </Reveal>
          <div className="results-grid">
            {tp.results.map((result, index) => (
              <Reveal key={result.label} delay={index * 80}>
                <div className="result-card">
                  <strong>{result.value}</strong>
                  <span>{result.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy case-disclaimer">
        <div className="container">
          <Reveal>
            <div className="disclaimer-card">
              <ShieldCheck size={32} strokeWidth={1.5} />
              <p>{language === 'ar'
                ? 'DermaVision AI تقنية لدعم القرار والمساعدة السريرية والتعليمية، وليست بديلاً عن اختصاصي أمراض جلدية مؤهَّل. التقييم الطبي النهائي يبقى مسؤولية المختص.'
                : 'DermaVision AI is a decision-support and educational/clinical-assistance technology, not a replacement for a qualified dermatologist. Final medical assessment remains the responsibility of the qualified specialist.'}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
