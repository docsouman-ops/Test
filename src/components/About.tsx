import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="section about animatedParent animateOnce" id="about">
      <div className="container about-container">
        <div className="about-header animated fadeInUpShort">
          <span className="about-eyebrow">ABOUT SCAL IT UP</span>
          <h2 className="about-title section-title">
            About Scal It Up - <span>Explore connected business opportunities.</span>
          </h2>
          <h3 className="about-main-lead">We see marketing differently.</h3>
          <p className="about-intro-text">
            Not as individual campaigns or disconnected activities, but as an interconnected opportunity to build
            brands, create experiences, and move businesses forward.
          </p>
        </div>

        <div className="about-divider" aria-hidden="true"></div>

        <div className="about-section animated fadeInUpShort">
          <h3 className="about-subheading">Three things shape the way we work.</h3>
          <div className="about-paragraphs-list">
            <div className="about-point-flow">
              <h4 className="about-point-title">1. Think beyond the brief.</h4>
              <p className="about-point-desc">
                Understand the business, challenge assumptions, and identify the bigger opportunity.
              </p>
            </div>
            <div className="about-point-flow">
              <h4 className="about-point-title">2. Connect the possibilities.</h4>
              <p className="about-point-desc">
                Bring strategy, creativity, media, experiences, and technology together.
              </p>
            </div>
            <div className="about-point-flow">
              <h4 className="about-point-title">3. Build on what works.</h4>
              <p className="about-point-desc">
                Turn outcomes into insights that inform smarter decisions and future growth.
              </p>
            </div>
          </div>
        </div>

        <div className="about-belief-block animated fadeInUpShort">
          <span className="about-belief-badge">OUR BELIEF</span>
          <h3 className="about-belief-lead">
            Good marketing starts with understanding people. Good partnerships do too.
          </h3>
          <p className="about-belief-text">
            We believe the best work happens when strategic thinking and practical execution come together around a
            shared ambition.
          </p>
        </div>
      </div>
    </section>
  );
};
