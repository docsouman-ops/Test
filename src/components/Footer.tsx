import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer animatedParent animateOnce">
      <div className="container footer-inner">
        <div className="footer-top animated fadeInUpShort">
          <div className="footer-brand">
            <img className="footer-logo" src="/assets/aistudio/logo-footer_2168f1df.png" alt="Scal It Up" />
            <p className="footer-tagline">Integrated Marketing. Intelligent Growth.</p>
            <p>
              Connecting strategy, creative experiences, technology, and intelligence to help businesses move forward
              with purpose.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h3>Explore</h3>
              <a href="#capabilities">Integrated Capabilities</a>
              <a href="#about">About Us</a>
              <a href="#our-approach">Our Approach</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-col">
              <h3>Connect</h3>
              <div className="footer-social-links" aria-label="Social media">
                <a
                  href="https://www.facebook.com/profile.php?id=61595934330868"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/scal.it.up/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCnKOvNkCFylbrZNwT_reA2g"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                </a>
              </div>
              <a href="mailto:scalitup.dm@gmail.com">Email: scalitup.dm@gmail.com</a>
              <a href="tel:+916292234836">Phone: +91 62922 34836</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom animated fadeInUpShort">
          <span>Thoughtfully connected. Purposefully executed and continuously refined.</span>
          <span>© 2026 Scal It Up. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
