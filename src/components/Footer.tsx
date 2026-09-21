import { Link } from 'react-router-dom';

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
} from 'lucide-react';

import { Logo } from './Logo';
import { navLinks } from '../data/navigation';
import { services } from '../data/services';
import { useLanguage } from '../i18n/useLanguage';
import { tService } from '../i18n/translations';

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer>
      <div className="container footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <Logo />

          <p className="footer-intro">
            {t(
              'Gulf Net Solution SPC is a Gulf-based AI-first technology company helping businesses across the region solve real problems with intelligent systems, machine learning and automation.'
            )}
          </p>

          <div className="footer-socials">
            <a href="#linkedin" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>

            <a href="#instagram" aria-label="Instagram">
              <Instagram size={17} />
            </a>

            <a href="#twitter" aria-label="Twitter">
              <Twitter size={17} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">

          <div>
            <span className="footer-label">
              {t('Company')}
            </span>

            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {t(link.label)}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <span className="footer-label">
              {t('Services')}
            </span>

            {services.slice(0, 5).map((service) => (
              <Link key={service.title} to="/services">
                {tService(service, language).title}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span className="footer-label">
              {t('Contact')}
            </span>

            {/* General Inquiries */}
            <a href="mailto:info@gnsprime.com">
              <Mail size={13} />
              <span>
                <strong>info@gnsprime.com</strong>
                <small>{t('General Inquiries')}</small>
              </span>
            </a>

            {/* Sales */}
            <a href="mailto:sales@gnsprime.com">
              <Mail size={13} />
              <span>
                <strong>sales@gnsprime.com</strong>
                <small>{t('Sales & Business')}</small>
              </span>
            </a>

            {/* Support */}
            <a href="mailto:support@gnsprime.com">
              <Mail size={13} />
              <span>
                <strong>support@gnsprime.com</strong>
                <small>{t('Customer Support')}</small>
              </span>
            </a>

            {/* Phone */}
            <a href="tel:+96871517838">
              <Phone size={13} />
              <span>
                <strong>+968 7151 7838</strong>
                <small>{t('Phone / WhatsApp')}</small>
              </span>
            </a>

            {/* Location */}
            <span className="footer-location">
              <MapPin size={13} />
              <span>
                <strong>
                  {language === 'ar'
                    ? 'مسقط، سلطنة عُمان'
                    : 'Muscat, Sultanate of Oman'}
                </strong>
                <small>{t('Location')}</small>
              </span>
            </span>

            {/* CTA */}
            <Link className="footer-cta" to="/contact">
              {t('Start a conversation')}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container footer-bottom">
        <span>
          © 2026 Gulf Net Solution SPC.{' '}
          {t('All rights reserved.')}
        </span>

        <span>
          {t("Built for what's next.")}
        </span>
      </div>
    </footer>
  );
}