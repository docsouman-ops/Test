import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="section testimonials animatedParent animateOnce" id="testimonials">
      <div className="container">
        <div className="testimonials-header animated fadeInUpShort">
          <span className="testimonials-accent-bar" aria-hidden="true"></span>
          <h2 className="section-title testimonials-title">Trusted by Brands That Dare to Grow</h2>
          <p className="testimonials-subtitle">A few words from the businesses we've helped scale.</p>
        </div>

        <div className="testimonials-carousel-wrapper animated fadeInUpShort">
          <button
            className="testimonials-nav-btn prev"
            type="button"
            aria-label="Previous testimonial"
            disabled
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            className="testimonials-carousel"
            role="region"
            aria-label="Client testimonials"
            aria-roledescription="carousel"
          >
            <div className="testimonials-viewport" tabIndex={0}>
              <div className="testimonials-track">
                {/* Featured Testimonial - Canrod Management Team */}
                <article className="testimonial-card is-featured">
                  <div className="testimonial-card-inner">
                    <div className="testimonial-quote-icon" aria-hidden="true">
                      <svg viewBox="0 0 32 26" fill="currentColor">
                        <path d="M0 15.6C0 7.8 4.6 2.2 13.8 0l1.8 3.2C10.2 4.6 8 7.6 7.6 10.8c1.2-.2 2.4-.2 3.6.2 3.8 1.4 6 5.2 5.2 9.2-.8 4-4.4 6.8-8.6 6.6-4.6-.2-7.8-4-7.8-11.2zm17.6 0C17.6 7.8 22.2 2.2 31.4 0l1.8 3.2c-5.4 1.4-7.6 4.4-8 7.6 1.2-.2 2.4-.2 3.6.2 3.8 1.4 6 5.2 5.2 9.2-.8 4-4.4 6.8-8.6 6.6-4.6-.2-7.8-4-7.8-11.2z" />
                      </svg>
                    </div>
                    <p className="testimonial-text">
                      “Scal It Up brought a thoughtful, strategic approach to our engagement. From shaping our company
                      profile to conducting a comprehensive website audit, their team went beyond surface-level
                      observations to identify improvement opportunities and provide actionable recommendations for our
                      next phase of digital development.”
                    </p>
                    <div className="testimonial-divider"></div>
                    <div className="testimonial-author-block">
                      <span className="testimonial-author-bar" aria-hidden="true"></span>
                      <div className="testimonial-author-meta">
                        <strong className="testimonial-author-name">Canrod Management Team</strong>
                        <span className="testimonial-author-role">Client Partner</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <button
            className="testimonials-nav-btn next"
            type="button"
            aria-label="Next testimonial"
            disabled
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="testimonials-dots" role="tablist" aria-label="Testimonial slides">
          <button
            type="button"
            className="testimonials-dot is-active"
            aria-label="Go to testimonial slide 1"
            aria-selected="true"
          />
        </div>
      </div>

      {/* Decorative Fluid Wave Ribbons matching screenshot */}
      <div className="testimonials-wave-decor" aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-40 140C120 40 280 120 460 70C560 40 680 110 760 130L760 140Z"
            fill="url(#waveBlue1)"
            opacity="0.75"
          />
          <path
            d="M-20 140C80 80 220 50 380 95C520 135 640 115 720 140Z"
            fill="url(#waveBlue2)"
            opacity="0.6"
          />
          <path
            d="M-50 140C160 110 260 30 440 80C540 110 600 140 680 140Z"
            fill="url(#waveBlue3)"
            opacity="0.45"
          />

          <path
            d="M1480 140C1320 40 1160 120 980 70C880 40 760 110 680 130L680 140Z"
            fill="url(#waveOrange1)"
            opacity="0.75"
          />
          <path
            d="M1460 140C1360 80 1220 50 1060 95C920 135 800 115 720 140Z"
            fill="url(#waveOrange2)"
            opacity="0.6"
          />
          <path
            d="M1490 140C1280 110 1180 30 1000 80C900 110 840 140 760 140Z"
            fill="url(#waveOrange3)"
            opacity="0.45"
          />

          <defs>
            <linearGradient id="waveBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="waveBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="waveBlue3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>

            <linearGradient id="waveOrange1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
            <linearGradient id="waveOrange2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c2410c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="waveOrange3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
