import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="section contact animatedParent animateOnce" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy animated fadeInUpShort">
          <h2 className="section-title">
            What could your next stage<span>of growth look like?</span>
          </h2>
          <p>
            Perhaps you're building a brand, exploring a new market, rethinking customer engagement, or looking for a
            more connected approach to marketing.
          </p>
          <p>
            Wherever you are in your journey, the starting point is understanding the opportunity—and what it could
            take to move forward.
          </p>
          <p>
            Let's focus your ambitions, explore the possibilities, and identify the right way to turn them into action.
          </p>
          <p>Scale It Up. Let's build what's next.</p>
        </div>
        <div className="contact-panel animated fadeInUpShort">
          <div className="contact-actions">
            <a className="btn btn-primary contact-primary" href="mailto:scalitup.dm@gmail.com">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Email Us
            </a>
            <a className="btn btn-primary contact-primary" href="tel:+916292234836">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
