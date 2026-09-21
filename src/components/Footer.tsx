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

  const isArabic = language === 'ar';

  return (
    <footer className="site-footer">
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

        {/* Footer Links */}
        <div className="footer-links">

          {/* Company */}
          <div className="footer-column">
            <span className="footer-label">
              {isArabic ? 'الشركة' : 'Company'}
            </span>

            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {t(link.label)}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="footer-column">
            <span className="footer-label">
              {isArabic ? 'الخدمات' : 'Services'}
            </span>

            {services.slice(0, 5).map((service) => (
              <Link key={service.title} to="/services">
                {tService(service, language).title}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact-column">
            <span className="footer-label">
              {isArabic ? 'تواصل معنا' : 'Contact'}
            </span>

            {/* General */}
            <a
              className="footer-contact-item"
              href="mailto:info@gnsprime.com"
            >
              <Mail size={15} />

              <span>
                <strong>info@gnsprime.com</strong>
                <small>
                  {isArabic
                    ? 'الاستفسارات العامة'
                    : 'General Inquiries'}
                </small>
              </span>
            </a>

            {/* Sales */}
            <a
              className="footer-contact-item"
              href="mailto:sales@gnsprime.com"
            >
              <Mail size={15} />

              <span>
                <strong>sales@gnsprime.com</strong>
                <small>
                  {isArabic
                    ? 'المبيعات والأعمال'
                    : 'Sales & Business'}
                </small>
              </span>
            </a>

            {/* Support */}
            <a
              className="footer-contact-item"
              href="mailto:support@gnsprime.com"
            >
              <Mail size={15} />

              <span>
                <strong>support@gnsprime.com</strong>
                <small>
                  {isArabic
                    ? 'دعم العملاء'
                    : 'Customer Support'}
                </small>
              </span>
            </a>

            {/* Phone */}
            <a
              className="footer-contact-item"
              href="tel:+96871517838"
            >
              <Phone size={15} />

              <span>
                <strong>+968 7151 7838</strong>
                <small>
                  {isArabic
                    ? 'الهاتف / واتساب'
                    : 'Phone / WhatsApp'}
                </small>
              </span>
            </a>

            {/* Location */}
            <div className="footer-contact-item footer-location">
              <MapPin size={15} />

              <span>
                <strong>
                  {isArabic
                    ? 'مسقط، سلطنة عُمان'
                    : 'Muscat, Sultanate of Oman'}
                </strong>

                <small>
                  {isArabic ? 'الموقع' : 'Location'}
                </small>
              </span>
            </div>

            {/* CTA */}
            <Link className="footer-cta" to="/contact">
              {isArabic ? 'ابدأ محادثة' : 'Start a conversation'}
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