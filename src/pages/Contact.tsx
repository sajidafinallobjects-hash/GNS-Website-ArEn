import { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, Check, ArrowRight, Linkedin, Instagram, Twitter, AlertCircle } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHero } from '@/components/PageHero';
import { Eyebrow } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';
import { useLanguage } from '@/i18n/useLanguage';
import { tService } from '@/i18n/translations';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  serviceType?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialState: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  serviceType: '',
  message: '',
};

export function Contact() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = useCallback((): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = t('Please enter your name.');
    if (!form.email.trim()) {
      next.email = t('Please enter your email.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = t('Please enter a valid email address.');
    }
    if (!form.serviceType) next.serviceType = t('Please select a service type.');
    if (!form.message.trim()) {
      next.message = t('Please enter a message.');
    } else if (form.message.trim().length < 10) {
      next.message = t('Message should be at least 10 characters.');
    }
    return next;
  }, [form, t]);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  return (
    <PageShell>
      <PageHero eyebrow={t('Get in touch')} title={<>{t("Let's start a")}<br /><em>{t('conversation.')}</em></>} text={t("Tell us what you're building, where you're headed or what's getting in the way. We'll take it from there.")} />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <Reveal>
              <Eyebrow>{t('Contact details')}</Eyebrow>
              <h2>{t('Good things start')}<br />{t('with a')} <em>{t('hello.')}</em></h2>
              <p>{t("Whether you have a clear AI brief or an early idea, our team is ready to listen. Reach out and we'll get back to you within one business day.")}</p>
              <div className="contact-detail"><Mail size={18} /><a href="mailto:hello@gns.om">hello@gns.om</a></div>
              <div className="contact-detail"><Phone size={18} /><a href="tel:+96824000000">+968 24 000 000</a></div>
              <div className="contact-detail"><MapPin size={18} /><span>{t('Gulf Region')}</span></div>
              <div className="socials">
                <span>{t('Follow along')}</span>
                <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#instagram" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#twitter" aria-label="Twitter"><Twitter size={18} /></a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label className={errors.name ? 'has-error' : ''}>
                  {t('Full name')}
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder={t('Your name')}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </label>
                <label>
                  {t('Email address')}
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </label>
              </div>
              <div className="form-row">
                <label>
                  {t('Company')} <span>({t('optional')})</span>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder={t('Your company')}
                  />
                </label>
                <label>
                  {t('Phone')} <span>({t('optional')})</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+968"
                  />
                </label>
              </div>
              <label className={errors.serviceType ? 'has-error' : ''}>
                {t('Service / Project type')}
                <select
                  name="serviceType"
                  value={form.serviceType}
                  onChange={(e) => handleChange('serviceType', e.target.value)}
                  aria-invalid={!!errors.serviceType}
                >
                  <option value="">{t('Select a service...')}</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>{tService(service, language).title}</option>
                  ))}
                  <option value="Other">{t('Other / Not sure yet')}</option>
                </select>
                {errors.serviceType && <span className="field-error">{errors.serviceType}</span>}
              </label>
              <label className={errors.message ? 'has-error' : ''}>
                {t('Message')}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder={t('Tell us a little about your project or challenge...')}
                  rows={5}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </label>
              <button
                className="button button-primary contact-submit"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>{t('Sending')}</>
                ) : (
                  <>{t('Send inquiry')} <ArrowRight size={17} /></>
                )}
              </button>
              {status === 'success' && (
                <p className="form-success">
                  <Check size={15} /> {t("Thanks — your message has been received. We'll be in touch within one business day.")}
                </p>
              )}
              {status === 'error' && (
                <p className="form-error">
                  <AlertCircle size={15} /> {t('Please correct the highlighted fields and try again.')}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
