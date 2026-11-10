import React, { useRef, useState, useEffect, useCallback } from 'react';

export const Approach: React.FC = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const totalCards = 5;

  const computeVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 980) return 2;
    return 3;
  }, []);

  const maxIndex = Math.max(0, totalCards - visibleCount);
  const totalSteps = maxIndex + 1;

  useEffect(() => {
    const handleResize = () => {
      const nextVisible = computeVisibleCount();
      setVisibleCount(nextVisible);
      const nextMax = Math.max(0, totalCards - nextVisible);
      setCurrentIndex((prev) => Math.min(prev, nextMax));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [computeVisibleCount]);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (viewport && track) {
      const cards = track.querySelectorAll<HTMLElement>('.approach-card');
      const targetCard = cards[clamped];
      if (targetCard) {
        viewport.scrollTo({
          left: targetCard.offsetLeft - track.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const cards = track.querySelectorAll<HTMLElement>('.approach-card');
    if (cards.length < 2) return;
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    if (step > 0) {
      const idx = Math.round(viewport.scrollLeft / step);
      setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
    }
  };

  return (
    <section className="section approach animatedParent animateOnce" id="our-approach">
      <div className="container">
        <div className="section-head animated fadeInUpShort">
          <h2 className="section-title">
            The thinking behind the<span>defined workspace.</span>
          </h2>
          <p>
            Meaningful marketing emerges through a continuous process of understanding, planning, execution,
            measurement, and refinement. We bring these stages together.
          </p>
        </div>

        <div
          className="approach-carousel animated fadeInUpShort"
          role="region"
          aria-label="Our approach"
          aria-roledescription="carousel"
        >
          <div
            className="approach-viewport"
            aria-live="off"
            ref={viewportRef}
            onScroll={handleScroll}
          >
            <div className="approach-grid" ref={trackRef}>
              <article className="approach-card">
                <span className="approach-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="m16 16 4 4M8 10.5h5" />
                  </svg>
                </span>
                <h3>
                  <span>Understand</span>
                  <span>the opportunity</span>
                </h3>
                <p>
                  We begin by examining the business context, audience, competitive environment, and growth ambitions.
                  This helps establish where marketing can make the greatest contribution and which challenges deserve
                  attention first.
                </p>
              </article>

              <article className="approach-card">
                <span className="approach-icon" aria-hidden="true">
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
                  <span>Define</span>
                  <span>the direction</span>
                </h3>
                <p>
                  We translate the opportunity into a strategic framework that connects objectives, audience
                  priorities, messaging, channels, resources, and measures of success.
                </p>
              </article>

              <article className="approach-card">
                <span className="approach-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 16.5 10 10l4 4 6-7" />
                    <path d="M15 7h5v5" />
                  </svg>
                </span>
                <h3>
                  <span>Bring the strategy</span>
                  <span>to life</span>
                </h3>
                <p>
                  We coordinate the relevant marketing capabilities, creative assets, platforms, experiences, and
                  execution requirements to turn strategic intent into meaningful audience interactions.
                </p>
              </article>

              <article className="approach-card">
                <span className="approach-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m7 14 4-4 3 3 6-7" />
                  </svg>
                </span>
                <h3>
                  <span>Measure</span>
                  <span>what matters</span>
                </h3>
                <p>
                  We evaluate performance against the objectives that informed the strategy. Beyond surface-level
                  activity, we look for signals that help explain audience response, campaign effectiveness, and
                  opportunities for improvement.
                </p>
              </article>

              <article className="approach-card">
                <span className="approach-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 7v5h-5" />
                    <path d="M4 17v-5h5" />
                    <path d="M5.5 9a7 7 0 0 1 11.6-2L20 12M4 12l2.9 5a7 7 0 0 0 11.6-2" />
                  </svg>
                </span>
                <h3>
                  <span>Apply</span>
                  <span>what we learn</span>
                </h3>
                <p>
                  We use the findings to refine campaigns, inform future investments, and adjust priorities as the
                  business and its market evolve.
                </p>
              </article>
            </div>
          </div>

          <div className="approach-carousel-controls">
            <button
              className="approach-carousel-arrow"
              type="button"
              data-approach-direction="-1"
              aria-label="Previous approach cards"
              disabled={currentIndex <= 0}
              onClick={() => scrollToIndex(currentIndex - 1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="approach-carousel-dots" aria-label="Choose approach slide">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className="approach-carousel-dot"
                  aria-label={`Show approach step ${i + 1}`}
                  aria-pressed={currentIndex === i}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>

            <button
              className="approach-carousel-arrow"
              type="button"
              data-approach-direction="1"
              aria-label="Next approach cards"
              disabled={currentIndex >= maxIndex}
              onClick={() => scrollToIndex(currentIndex + 1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <p className="approach-note animated fadeInUpShort">
          Every stage informs the next. Every cycle creates an opportunity to move forward with greater clarity.
        </p>
      </div>
    </section>
  );
};
