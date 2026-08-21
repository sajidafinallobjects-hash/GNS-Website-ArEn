import { Lightbulb, BrainCircuit, Briefcase, Server, Handshake } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { Eyebrow, SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/i18n/useLanguage';

const reasonTextsEn: Record<string, string> = {
  'Innovation-driven AI solutions': 'We approach every problem as an opportunity to do something better. Rather than reaching for the obvious answer, we look for the AI solution that creates lasting advantage — combining proven engineering with fresh thinking.',
  'Deep AI and ML expertise': 'From machine learning and computer vision to generative AI and intelligent automation, we bring the technologies that matter — applied where they create real value, not just novelty.',
  'Business-focused approach': 'AI is only useful when it serves the business. We start with your goals, your market and your constraints — and build intelligent systems that fit the way your organisation actually works.',
  'Scalable and reliable AI systems': 'We engineer intelligent systems to grow with you. Performance, security and maintainability are designed in from the start — so your investment keeps delivering as demand and complexity increase.',
  'Long-term AI partnership': 'We are not a one-project vendor. We stay engaged — maintaining, improving and extending your AI systems over time, building a relationship that compounds in value with every cycle.',
};

const reasonTextsAr: Record<string, string> = {
  'Innovation-driven AI solutions': 'نتعامل مع كل مشكلة كفرصة لفعل شيء أفضل. بدلاً من الاكتفاء بالإجابة السهلة، نبحث عن حل الذكاء الاصطناعي الذي يصنع ميزة دائمة — جامعين بين هندسة مثبتة وتفكير متجدد.',
  'Deep AI and ML expertise': 'من تعلم الآلة والرؤية الحاسوبية إلى الذكاء الاصطناعي التوليدي والأتمتة الذكية، نقدم التقنيات المهمة — مطبقة حيث تصنع قيمة حقيقية لا مجرد حداثة.',
  'Business-focused approach': 'الذكاء الاصطناعي لا ينفع إلا حين يخدم الأعمال. نبدأ بأهدافك وسوقك وقيودك — ونبني أنظمة ذكية تناسب طريقة عمل مؤسستك فعلياً.',
  'Scalable and reliable AI systems': 'نهندس أنظمة ذكية لتنمو معك. الأداء والأمن وقابلية الصيانة مصممة من البداية — ليستمر استثمارك في العطاء مع نمو الطلب والتعقيد.',
  'Long-term AI partnership': 'لسنا مزوداً لمشروع واحد. نبقى معك — نحسن ونطور ونوسع أنظمة الذكاء الاصطناعي لديك مع الوقت، مبنيين علاقة تتنامى قيمتها مع كل دورة.',
};

const approachStepsAr: Record<string, { title: string; text: string }> = {
  Understand: { title: 'نفهم', text: 'نبدأ بالاستماع — لأهدافك وقيودك والمشكلة التي تحاول حلها حقاً.' },
  Design: { title: 'نصمم', text: 'نشكّل حل الذكاء الاصطناعي حول سياقك — ببنية مصممة للأداء والأمن وقابلية الصيانة طويلة الأمد.' },
  Build: { title: 'نبني', text: 'نسلم في دورات تكرارية، نبقيك على اطلاع ومشارك في كل مرحلة من العملية.' },
  Support: { title: 'ندعم', text: 'نبقى معك بعد الإطلاق — نراقب ونحسن ونضمن استمرار أنظمة الذكاء الاصطناعي لديك في الأداء.' },
};

const stats = [
  { value: '2026', labelKey: 'Founded' },
  { value: '6', labelKey: 'AI capabilities' },
  { value: 'GCC', labelKey: 'Regional focus' },
];

export function WhyGNS() {
  const { language, t } = useLanguage();

  const reasons = [
    { icon: Lightbulb, titleKey: 'Innovation-driven AI solutions' },
    { icon: BrainCircuit, titleKey: 'Deep AI and ML expertise' },
    { icon: Briefcase, titleKey: 'Business-focused approach' },
    { icon: Server, titleKey: 'Scalable and reliable AI systems' },
    { icon: Handshake, titleKey: 'Long-term AI partnership' },
  ];

  return (
    <PageShell>
      <PageHero eyebrow={t('Why Choose GNS')} title={<>{t('The difference is in')}<br />{t('the ')}<em>{t('delivery.')}</em></>} text={t("Choosing an AI partner is a decision about trust, capability and fit. Here's what sets GNS apart.")} />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('Our advantages')} title={<>{t('Reasons businesses')}<br />{t('choose ')}<em>{t('GNS.')}</em></>} />
          </Reveal>
          <div className="reasons-grid why-reasons-grid">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const text = language === 'ar' ? reasonTextsAr[reason.titleKey] : reasonTextsEn[reason.titleKey];
              return (
                <Reveal key={reason.titleKey} delay={index * 70}>
                  <div className="reason-card why-reason-card">
                    <div className="reason-icon"><Icon size={28} strokeWidth={1.5} /></div>
                    <span className="why-reason-number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{t(reason.titleKey)}</h3>
                    <p>{text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={t('By the numbers')} title={<>{t('What we bring to')}<br />{t('every ')}<em>{t('engagement.')}</em></>} light />
          </Reveal>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Reveal key={stat.labelKey} delay={index * 80}>
                <div className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{t(stat.labelKey)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container approach-grid">
          <Reveal>
            <div>
              <Eyebrow>{t('Our approach')}</Eyebrow>
              <h2>{t('How we')} <em>{t('work.')}</em></h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="approach-steps">
              {(['Understand', 'Design', 'Build', 'Support'] as const).map((stepKey, idx) => {
                const step = language === 'ar' ? approachStepsAr[stepKey] : { title: stepKey, text: stepTextsEn[stepKey] };
                return (
                  <div className="approach-step" key={stepKey}>
                    <span className="step-number">0{idx + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}

const stepTextsEn: Record<string, string> = {
  Understand: 'We start by listening — to your goals, your constraints and the problem you\'re really trying to solve.',
  Design: 'We shape an AI solution around your context — architecting for performance, security and long-term maintainability.',
  Build: 'We deliver in iterative cycles, keeping you informed and involved at every stage of the process.',
  Support: 'We stay engaged after launch — monitoring, improving and ensuring your AI systems keep performing.',
};
