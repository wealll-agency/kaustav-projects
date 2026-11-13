import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FOOTER_PERKS,
  FOOTER_NAV_COLUMNS,
  FOOTER_SOCIALS,
  FOOTER_INFO
} from './data/footerData';
import '../../../assets/styles/footer.css';

/**
 * Service Perk Icon Renderer
 */
const PerkIcon = ({ type }) => {
  if (type === 'samples') {
    return (
      <svg
        className="footer-perk-icon-svg"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        {/* Cosmetic jar & bottle */}
        <rect x="8" y="24" width="22" height="28" rx="3" />
        <path d="M14 24V16h10v8" />
        <rect x="36" y="20" width="20" height="32" rx="4" />
        <path d="M42 20V12h8v8" />
        <path d="M46 12V8h-6" />
        <line x1="12" y1="36" x2="26" y2="36" />
        <line x1="40" y1="32" x2="52" y2="32" />
      </svg>
    );
  }

  if (type === 'rewards') {
    return (
      <svg
        className="footer-perk-icon-svg"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        {/* Ticket / Coupon with gift bow & stars */}
        <rect x="10" y="20" width="44" height="28" rx="4" />
        <path d="M10 34a4 4 0 0 1 0-8" />
        <path d="M54 26a4 4 0 0 1 0 8" />
        <line x1="28" y1="20" x2="28" y2="48" strokeDasharray="3 3" />
        <path d="M37 32l3 3 6-6" />
        <circle cx="20" cy="34" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'delivery') {
    return (
      <svg
        className="footer-perk-icon-svg"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        {/* Shipping / delivery truck with motion lines */}
        <path d="M8 20h28v20H8z" />
        <path d="M36 26h12l6 7v7H36z" />
        <circle cx="20" cy="44" r="5" />
        <circle cx="46" cy="44" r="5" />
        <line x1="25" y1="44" x2="41" y2="44" />
        <line x1="4" y1="26" x2="7" y2="26" />
        <line x1="2" y1="32" x2="6" y2="32" />
      </svg>
    );
  }

  return null;
};

/**
 * Social SVG Icons
 */
const SocialIcon = ({ type }) => {
  switch (type) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.372-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#ffffff" />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * Main Footer Component
 */
export const Footer = () => {
  return (
    <footer className="aira-site-footer" id="colophon" aria-label="Site Footer">
      <Container>
        {/* ========================================================== */}
        {/* 1. TOP SERVICE PERKS SECTION                               */}
        {/* ========================================================== */}
        <Row className="footer-perks-row">
          {FOOTER_PERKS.map((perk) => (
            <Col
              key={perk.id}
              lg={4}
              md={4}
              sm={12}
              className="footer-perk-col"
            >
              <div className="footer-perk-item">
                <div className="footer-perk-icon-wrapper">
                  <PerkIcon type={perk.iconType} />
                </div>
                <h5 className="footer-perk-title">{perk.title}</h5>
                <p className="footer-perk-subtitle">{perk.subtitle}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Horizontal Divider Line */}
        <hr className="footer-horizontal-divider" />

        {/* ========================================================== */}
        {/* 2. MAIN 5-COLUMN FOOTER                                    */}
        {/* ========================================================== */}
        <Row className="footer-main-row">
          {/* Column 1: Brand Info & Contact */}
          <Col lg={4} md={6} sm={12} className="footer-brand-col">
            <a href="/" className="footer-brand-logo" aria-label="Aira Home">
              <span className="footer-brand-text">A</span>
              {/* Orchid emblem matching header */}
              <svg
                className="footer-brand-orchid"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20 4C20 4 23 12 28 14C33 16 38 18 36 23C34 28 28 27 24 25C22 24 20 22 20 22C20 22 18 24 16 25C12 27 6 28 4 23C2 18 7 16 12 14C17 12 20 4 20 4Z"
                  fill="#FA9090"
                  opacity="0.85"
                />
                <circle cx="20" cy="22" r="3" fill="#D85A5A" />
              </svg>
              <span className="footer-brand-text">IRA</span>
            </a>
            <p className="footer-brand-desc">{FOOTER_INFO.description}</p>
            <div className="footer-contact-info">
              <a
                href={`tel:${FOOTER_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="footer-contact-link"
              >
                {FOOTER_INFO.phone}
              </a>
              <a
                href={`mailto:${FOOTER_INFO.email}`}
                className="footer-contact-link"
              >
                {FOOTER_INFO.email}
              </a>
            </div>
          </Col>

          {/* Columns 2, 3, 4: About us, Support, Services */}
          {FOOTER_NAV_COLUMNS.map((column) => (
            <Col key={column.id} lg={2} md={3} sm={6} xs={6}>
              <h5 className="footer-column-title">{column.title}</h5>
              <ul className="footer-nav-list">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          {/* Column 5: Socials with Icon circles */}
          <Col lg={2} md={3} sm={6} xs={6}>
            <h5 className="footer-column-title">Socials</h5>
            <ul className="footer-socials-list">
              {FOOTER_SOCIALS.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-item-link"
                  >
                    <span className="footer-social-circle">
                      <SocialIcon type={social.icon} />
                    </span>
                    <span className="footer-social-label">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      {/* ========================================================== */}
      {/* 3. COPYRIGHT BAR WITH WE ALLL LOGO                         */}
      {/* ========================================================== */}
      <div className="footer-copyright-bar">
        <Container>
          <p className="footer-copyright-content">
            <span>
              &copy; {FOOTER_INFO.copyrightYear}{' '}
              <strong className="footer-copyright-brand">
                {FOOTER_INFO.brandName}
              </strong>
              . All rights reserved. {FOOTER_INFO.developerText}
            </span>
            <a
              href="https://wealll.com"
              target="_blank"
              rel="noopener noreferrer"
              className="wealll-footer-logo-link"
              aria-label="We Alll"
            >
              <img
                src={FOOTER_INFO.developerLogo}
                alt="We Alll"
                className="wealll-footer-logo"
                loading="lazy"
              />
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
