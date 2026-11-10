import React from 'react';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero animatedParent animateOnce" id="home">
      <div className="container hero-inner">
        <div className="hero-content animated fadeInUpShort">
          <h1 className="section-title">
            Beyond marketing.<span>Towards meaningful growth.</span>
          </h1>
          <p>
            We bring strategy, creativity, technology, and customer experiences together to help businesses build
            stronger brands, create meaningful connections, and turn marketing opportunities into measurable progress.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
