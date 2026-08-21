import { Sparkles, Zap, ShieldCheck, Target, Telescope, Cpu, Layers, Gauge } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { Eyebrow, SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const valueTexts: Record<string, string> = {
  'Make it meaningful': 'We focus on outcomes, not output. Every AI solution should earn its place by creating real value.',
  'Stay curious': 'We keep learning, questioning and finding a better way to solve the problem at hand.',
  'Build trust': 'We communicate clearly, act responsibly and do the work with care and integrity.',
  'Be precise': 'We measure twice and build once. Clarity and discipline produce AI systems that last.',
  'Think long-term': 'We design intelligent systems and relationships that grow with our clients, not just for the next launch.',
  'Stay grounded': 'We keep things practical. Ambition matters, but only when it translates into something that works.',
};

const valuesAr: Record<string, string> = {
  'Make it meaningful': 'نركز على الأثر لا على المخرجات. كل حل ذكاء اصطناعي يجب أن يكتسب مكانه بخلق قيمة حقيقية.',
  'Stay curious': 'نواصل التعلم والتساؤل والبحث عن طريقة أفضل لمعالجة المشكلة المطروحة.',
  'Build trust': 'نتواصل بوضوح ونتصرف بمسؤولية ونؤدي العمل بعناية ونزاهة.',
  'Be precise': 'نقيس مرتين ونبني مرة. الوضوح والانضباط ينتجان أنظمة ذكاء اصطناعي تدوم.',
  'Think long-term': 'نصمم أنظمة ذكية وعلاقات تنمو مع عملائنا، لا لمجرد الإطلاق القادم.',
  'Stay grounded': 'نبقي الأمور عملية. الطموح مهم، لكن فقط حين يترجم إلى شيء يعمل.',
};

function Value({ icon, titleKey }: { icon: React.ReactNode; titleKey: string }) {
  const { language, t } = useLanguage();
  const text = language === 'ar' ? valuesAr[titleKey] : valueTexts[titleKey];
  return (
    <Reveal>
      <div className="value">
        <div className="value-icon">{icon}</div>
        <h3>{t(titleKey)}</h3>
        <p>{text}</p>
      </div>
    </Reveal>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <PageShell>
      <PageHero eyebrow={t('About GNS')} title={<>{t('Intelligence built around')}<br /><em>{t('people.')}</em></>} text={t('We are a Gulf-based AI-first technology company with a simple belief: the best intelligent systems are the ones that create real momentum.')} />

      <section className="section about-story">
        <div className="container about-grid">
          <div className="about-aside">
            <span>{t('Our story')}</span>
            <div className="vertical-rule" />
            <span>{t('Est. 2026')}</span>
          </div>
          <Reveal>
            <div>
              <h2>{t('Local perspective.')}<br /><em>{t('Global standards.')}</em></h2>
              <p className="large-copy">{t('Gulf Net Solution SPC was founded to help businesses in the region navigate a fast-changing AI landscape with a partner they can trust.')}</p>
              <p>{t('We combine an understanding of Gulf markets with modern AI engineering practices to deliver work that is ambitious, practical and built for the long term. Our team works across AI research, product and engineering — bringing the right people to the right problem.')}</p>
              <p>{t('From Artificial Intelligence and Machine Learning to computer vision and intelligent automation, we help organisations use AI to solve real business problems — not to chase trends. Every engagement starts with listening, and ends with something measurable.')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('What guides us')} title={<>{t('Principles that keep us')}<br /><em>{t('moving forward.')}</em></>} />
          </Reveal>
          <div className="values-grid">
            <Value icon={<Sparkles />} titleKey="Make it meaningful" />
            <Value icon={<Zap />} titleKey="Stay curious" />
            <Value icon={<ShieldCheck />} titleKey="Build trust" />
            <Value icon={<Target />} titleKey="Be precise" />
            <Value icon={<Telescope />} titleKey="Think long-term" />
            <Value icon={<Layers />} titleKey="Stay grounded" />
          </div>
        </div>
      </section>

      <section className="section vision">
        <div className="container vision-grid">
          <Reveal>
            <div>
              <Eyebrow>{t('Our vision')}</Eyebrow>
              <h2>{t('A region where every business can use AI to')} <em>{t('thrive.')}</em></h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="vision-mission">
              <Eyebrow>{t('Our mission')}</Eyebrow>
              <p>{t("To make exceptional AI accessible, useful and human for the businesses shaping the Gulf's future.")}</p>
              <p>{t('We do this by combining deep technical expertise with an honest understanding of the region — building intelligent systems that fit the way Gulf organisations actually work.')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-navy about-approach">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('How we work')} title={<>{t('An AI-first')}<br /><em>{t('approach.')}</em></>} text={t('We bring engineering discipline and product thinking to every engagement — turning complex problems into intelligent systems that are reliable, maintainable and built to scale.')} light />
          </Reveal>
          <div className="approach-grid">
            <div className="approach-steps">
              <Reveal>
                <div className="approach-step">
                  <span className="step-number">01</span>
                  <div>
                    <h3>{t('Understand')}</h3>
                    <p>{t('We start with the business, not the technology. What are you trying to achieve? What gets in the way? The right solution follows from the right questions.')}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="approach-step">
                  <span className="step-number">02</span>
                  <div>
                    <h3>{t('Architect')}</h3>
                    <p>{t('We design systems that fit the problem — choosing tools and patterns deliberately, and planning for scale, security and maintainability from day one.')}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="approach-step">
                  <span className="step-number">03</span>
                  <div>
                    <h3>{t('Build')}</h3>
                    <p>{t('We ship in tight iterations, with working software at every stage. Nothing arrives as a surprise — you see progress and can steer throughout.')}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="approach-step">
                  <span className="step-number">04</span>
                  <div>
                    <h3>{t('Sustain')}</h3>
                    <p>{t('Launch is a milestone, not the finish line. We stay engaged to monitor, refine and extend — so the system keeps delivering long after it goes live.')}</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="approach-visual">
                <div className="visual-grid" />
                <div className="approach-ring">
                  <Cpu size={56} strokeWidth={1} />
                </div>
                <div className="approach-tags">
                  <span><Gauge size={13} /> {t('Performance')}</span>
                  <span><ShieldCheck size={13} /> {t('Security')}</span>
                  <span><Layers size={13} /> {t('Scalability')}</span>
                  <span><Cpu size={13} /> {t('Reliability')}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-stats">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('By the numbers')} title={<>{t('What we bring to')}<br /><em>{t('every engagement.')}</em></>} text={t('A measure of the depth and range we apply to each AI project — not a trophy case.')} />
          </Reveal>
          <div className="stats-grid">
            <Reveal>
              <div className="stat-card">
                <strong>2026</strong>
                <span>{t('Founded')}</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="stat-card">
                <strong>6</strong>
                <span>{t('AI capabilities')}</span>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="stat-card">
                <strong>GCC</strong>
                <span>{t('Regional focus')}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
