document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    const navLinks = Array.from(mainNav.querySelectorAll('a[href^="#"]'));
    const sections = navLinks
      .map(function (link) {
        return document.querySelector(link.getAttribute('href'));
      })
      .filter(Boolean);

    function updateActiveNavLink() {
      const activeSection = sections.reduce(function (current, section) {
        return section.getBoundingClientRect().top <= 120 ? section : current;
      }, sections[0]);

      navLinks.forEach(function (link) {
        const isActive = activeSection && link.getAttribute('href') === '#' + activeSection.id;
        link.classList.toggle('active', Boolean(isActive));
        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    window.addEventListener('resize', updateActiveNavLink);
    updateActiveNavLink();

    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        updateActiveNavLink();
      });
    });
  }

  const approachCarousel = document.querySelector('.approach-carousel');

  if (approachCarousel) {
    const viewport = approachCarousel.querySelector('.approach-viewport');
    const track = approachCarousel.querySelector('.approach-grid');
    const cards = Array.from(track.querySelectorAll('.approach-card'));
    const dotsContainer = approachCarousel.querySelector('.approach-carousel-dots');
    const arrows = Array.from(approachCarousel.querySelectorAll('[data-approach-direction]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activeIndex = 0;
    let scrollTimer;
    let autoplayTimer;
    let visibleCount = 0;
    let cloneCount = 0;
    let physicalIndex = 0;

    function getVisibleCount() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 980) return 2;
      return 3;
    }

    function getStep() {
      const allCards = Array.from(track.querySelectorAll('.approach-card'));
      return allCards.length > 1 ? allCards[1].offsetLeft - allCards[0].offsetLeft : 0;
    }

    function updateControls() {
      Array.from(dotsContainer.children).forEach(function (dot, index) {
        dot.setAttribute('aria-pressed', String(index === activeIndex));
      });
    }

    function setPhysicalIndex(index, behavior) {
      const allCards = Array.from(track.querySelectorAll('.approach-card'));
      physicalIndex = index;
      viewport.scrollTo({
        left: allCards[physicalIndex].offsetLeft - allCards[0].offsetLeft,
        behavior: behavior
      });
    }

    function updateActiveIndex() {
      activeIndex = ((physicalIndex - cloneCount) % cards.length + cards.length) % cards.length;
      updateControls();
    }

    function normalizePhysicalIndex() {
      const step = getStep();
      if (!step) return;

      physicalIndex = Math.round(viewport.scrollLeft / step);
      if (physicalIndex < cloneCount) {
        setPhysicalIndex(physicalIndex + cards.length, 'auto');
      } else if (physicalIndex >= cloneCount + cards.length) {
        setPhysicalIndex(physicalIndex - cards.length, 'auto');
      }

      updateActiveIndex();
    }

    function moveBy(direction) {
      setPhysicalIndex(physicalIndex + direction, 'smooth');
      updateActiveIndex();
      startAutoplay();
    }

    function goTo(index) {
      const forward = (index - activeIndex + cards.length) % cards.length;
      const backward = forward - cards.length;
      const direction = Math.abs(forward) <= Math.abs(backward) ? forward : backward;
      moveBy(direction);
    }

    function buildDots() {
      if (dotsContainer.children.length !== cards.length) {
        dotsContainer.replaceChildren();

        cards.forEach(function (_, index) {
          const dot = document.createElement('button');
          dot.className = 'approach-carousel-dot';
          dot.type = 'button';
          dot.setAttribute('aria-label', 'Show approach step ' + (index + 1));
          dot.setAttribute('aria-pressed', 'false');
          dot.addEventListener('click', function () {
            goTo(index);
          });
          dotsContainer.appendChild(dot);
        });
      }

      updateControls();
    }

    function rebuild() {
      track.querySelectorAll('.approach-card.is-clone').forEach(function (card) {
        card.remove();
      });

      visibleCount = getVisibleCount();
      cloneCount = Math.min(visibleCount, cards.length);
      const before = document.createDocumentFragment();
      const after = document.createDocumentFragment();

      cards.slice(-cloneCount).forEach(function (card) {
        const clone = card.cloneNode(true);
        clone.classList.add('is-clone');
        clone.setAttribute('aria-hidden', 'true');
        before.appendChild(clone);
      });

      cards.slice(0, cloneCount).forEach(function (card) {
        const clone = card.cloneNode(true);
        clone.classList.add('is-clone');
        clone.setAttribute('aria-hidden', 'true');
        after.appendChild(clone);
      });

      track.prepend(before);
      track.append(after);
      buildDots();
      setPhysicalIndex(cloneCount + activeIndex, 'auto');
      updateActiveIndex();
    }

    function startAutoplay() {
      window.clearInterval(autoplayTimer);
      if (reducedMotion.matches || document.hidden || cards.length < 2) return;
      autoplayTimer = window.setInterval(function () {
        moveBy(1);
      }, 4500);
    }

    arrows.forEach(function (arrow) {
      arrow.addEventListener('click', function () {
        moveBy(Number(arrow.dataset.approachDirection));
      });
    });

    viewport.addEventListener('scroll', function () {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(function () {
        normalizePhysicalIndex();
      }, 120);
    });

    approachCarousel.addEventListener('pointerenter', function () {
      window.clearInterval(autoplayTimer);
    });

    approachCarousel.addEventListener('pointerleave', startAutoplay);
    approachCarousel.addEventListener('focusin', function () {
      window.clearInterval(autoplayTimer);
    });

    approachCarousel.addEventListener('focusout', function (event) {
      if (!approachCarousel.contains(event.relatedTarget)) startAutoplay();
    });

    document.addEventListener('visibilitychange', startAutoplay);
    reducedMotion.addEventListener('change', startAutoplay);
    window.addEventListener('resize', function () {
      if (getVisibleCount() !== visibleCount) rebuild();
    });

    rebuild();
    startAutoplay();
  }

  /* Testimonials Carousel */
  const testimonialsWrapper = document.querySelector('.testimonials-carousel-wrapper');
  if (testimonialsWrapper) {
    const viewport = testimonialsWrapper.querySelector('.testimonials-viewport');
    const track = testimonialsWrapper.querySelector('.testimonials-track');
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const prevBtn = testimonialsWrapper.querySelector('.testimonials-nav-btn.prev');
    const nextBtn = testimonialsWrapper.querySelector('.testimonials-nav-btn.next');
    const dotsContainer = document.querySelector('.testimonials-dots');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let currentIndex = 0;
    let scrollDebounce;
    let autoplayTimer;

    function getVisibleCount() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 980) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function updateActiveHighlight(targetIndex) {
      const visible = getVisibleCount();
      let featuredIndex = targetIndex;
      if (visible === 3) {
        featuredIndex = Math.min(targetIndex + 1, cards.length - 1);
      } else if (visible === 2) {
        featuredIndex = targetIndex;
      }
      cards.forEach(function (card, idx) {
        card.classList.toggle('is-featured', idx === featuredIndex);
      });
    }

    function updateDots() {
      if (!dotsContainer) return;
      const totalSteps = getMaxIndex() + 1;

      if (dotsContainer.children.length !== totalSteps) {
        dotsContainer.replaceChildren();
        for (let i = 0; i < totalSteps; i++) {
          const dot = document.createElement('button');
          dot.className = 'testimonials-dot' + (i === currentIndex ? ' is-active' : '');
          dot.type = 'button';
          dot.setAttribute('aria-label', 'Go to testimonial slide ' + (i + 1));
          dot.setAttribute('aria-selected', String(i === currentIndex));
          (function (index) {
            dot.addEventListener('click', function () {
              scrollToIndex(index);
              startAutoplay();
            });
          })(i);
          dotsContainer.appendChild(dot);
        }
      } else {
        Array.from(dotsContainer.children).forEach(function (dot, i) {
          const isActive = i === currentIndex;
          dot.classList.toggle('is-active', isActive);
          dot.setAttribute('aria-selected', String(isActive));
        });
      }

      if (prevBtn) prevBtn.disabled = currentIndex <= 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= getMaxIndex();
    }

    function scrollToIndex(index) {
      const maxIdx = getMaxIndex();
      currentIndex = Math.max(0, Math.min(index, maxIdx));
      const targetCard = cards[currentIndex];
      if (targetCard) {
        viewport.scrollTo({
          left: targetCard.offsetLeft - track.offsetLeft,
          behavior: 'smooth'
        });
      }
      updateActiveHighlight(currentIndex);
      updateDots();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        scrollToIndex(currentIndex - 1);
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        scrollToIndex(currentIndex + 1);
        startAutoplay();
      });
    }

    viewport.addEventListener('scroll', function () {
      window.clearTimeout(scrollDebounce);
      scrollDebounce = window.setTimeout(function () {
        const step = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : cards[0].offsetWidth;
        if (step > 0) {
          const newIndex = Math.round(viewport.scrollLeft / step);
          currentIndex = Math.max(0, Math.min(newIndex, getMaxIndex()));
          updateActiveHighlight(currentIndex);
          updateDots();
        }
      }, 80);
    });

    function startAutoplay() {
      window.clearInterval(autoplayTimer);
      if (reducedMotion.matches || document.hidden || cards.length < 2) return;
      autoplayTimer = window.setInterval(function () {
        const nextIdx = (currentIndex >= getMaxIndex()) ? 0 : currentIndex + 1;
        scrollToIndex(nextIdx);
      }, 5500);
    }

    testimonialsWrapper.addEventListener('pointerenter', function () {
      window.clearInterval(autoplayTimer);
    });
    testimonialsWrapper.addEventListener('pointerleave', startAutoplay);
    testimonialsWrapper.addEventListener('focusin', function () {
      window.clearInterval(autoplayTimer);
    });
    testimonialsWrapper.addEventListener('focusout', function (event) {
      if (!testimonialsWrapper.contains(event.relatedTarget)) startAutoplay();
    });

    window.addEventListener('resize', function () {
      updateDots();
      scrollToIndex(currentIndex);
    });

    updateActiveHighlight(0);
    updateDots();
    startAutoplay();
  }

});
