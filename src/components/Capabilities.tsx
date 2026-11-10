import React from 'react';

export const Capabilities: React.FC = () => {
  return (
    <section className="section capabilities animatedParent animateOnce" id="capabilities">
      <div className="container">
        <div className="capabilities-header animated fadeInUpShort">
          <span className="capabilities-eyebrow">OUR INTEGRATED CAPABILITIES</span>
          <h2 className="capabilities-title section-title">Different capabilities. One connected direction.</h2>
          <div className="capabilities-intro-copy">
            <p>
              Customers experience brands across digital platforms, physical environments, interactive experiences, and
              everyday decisions.We bring these touchpoints together through an integrated marketing ecosystem that
              connects brand building, audience engagement, digital experiences, and performance intelligence.
            </p>
          </div>
        </div>

        <div className="capability-grid">
          <article className="capability-card animated fadeInUpShort">
            <img
              src="/assets/aistudio/digital-growth_78e23644.jpg"
              alt="Team reviewing digital growth analytics on multiple screens"
            />
            <div className="capability-card-content">
              <div className="capability-card-heading">
                <span className="capability-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4M8 11h6M11 8v6" />
                  </svg>
                </span>
                <h3>
                  <span>Digital Growth</span>
                  <span>&amp; Demand Generation</span>
                </h3>
              </div>
              <p>
                Build visibility, attract relevant audiences, and create pathways from discovery to consideration and
                action. We connect digital channels, audience intelligence, content, and performance measurement to help
                businesses strengthen their market presence and make more informed acquisition decisions.
              </p>
            </div>
          </article>

          <article className="capability-card animated fadeInUpShort">
            <img
              src="/assets/aistudio/brand-visibility_6558185f.jpg"
              alt="Team exploring brand visibility and gamified customer experiences"
            />
            <div className="capability-card-content">
              <div className="capability-card-heading">
                <span className="capability-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18M3 12h18" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>
                <h3>
                  <span>Brand Visibility</span>
                  <span>&amp; Experiential Marketing</span>
                </h3>
              </div>
              <p>
                Brand experiences are not confined to screens. They unfold in public spaces, at events, through
                entertainment, and wherever audiences encounter something worth remembering.
              </p>
            </div>
          </article>

          <article className="capability-card animated fadeInUpShort">
            <img
              src="/assets/aistudio/interactive-engagement_9fdcd6c4.jpg"
              alt="Audience interacting with a gamified brand experience"
            />
            <div className="capability-card-content">
              <div className="capability-card-heading">
                <span className="capability-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 8h8v8H8z" />
                    <path d="M4 4h3M17 4h3M4 20h3M17 20h3M4 7v3M20 7v3M4 14v3M20 14v3" />
                  </svg>
                </span>
                <h3>
                  <span>Interactive Engagement</span>
                  <span>&amp; Gamified Experiences</span>
                </h3>
              </div>
              <p>
                In an environment where audiences are constantly competing for time and attention, participation can
                create a more memorable relationship with a brand.
              </p>
            </div>
          </article>

          <article className="capability-card animated fadeInUpShort">
            <img
              src="/assets/aistudio/digita-products_c91e8a69.jpg"
              alt="Customer using a mobile shopping experience"
            />
            <div className="capability-card-content">
              <div className="capability-card-heading">
                <span className="capability-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M8 21h8M12 17v4M7 8h10M7 12h6" />
                  </svg>
                </span>
                <h3>
                  <span>Digital Products</span>
                  <span>&amp; Customer Experiences</span>
                </h3>
              </div>
              <p>
                A website or application is more than a digital destination. It is an extension of the brand, a point
                of interaction, and often a critical part of the customer journey.
              </p>
            </div>
          </article>

          <article className="capability-card animated fadeInUpShort">
            <img
              src="/assets/aistudio/srategy_dc3df1cd.jpg"
              alt="Marketing team planning growth strategy using charts and a whiteboard"
            />
            <div className="capability-card-content">
              <div className="capability-card-heading">
                <span className="capability-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19V5M4 19h17" />
                    <path d="m7 15 4-4 3 2 6-7" />
                  </svg>
                </span>
                <h3>
                  <span>Strategy, Analytics</span>
                  <span>&amp; Marketing Intelligence</span>
                </h3>
              </div>
              <p>
                Effective marketing requires more than execution. It requires an understanding of the market, the
                audience, the business priorities, and the factors that influence performance.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
