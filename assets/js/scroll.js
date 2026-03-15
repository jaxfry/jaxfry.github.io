document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('.parallax-caption');
  const parallaxImages = document.querySelectorAll('.parallax-image');
  const hiddenElements = document.querySelectorAll('.hidden');
  let ticking = false;

  function parallaxEffect() {
    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || window.innerWidth <= 768) {
      parallaxElements.forEach(element => {
        element.style.transform = '';
      });
      parallaxImages.forEach(image => {
        image.style.transform = '';
      });
      return;
    }

    const scrollPosition = window.scrollY;

    parallaxElements.forEach(element => {
      const speed = 0.2;
      const offset = scrollPosition * speed;
      element.style.transform = `translateY(-${offset}px)`;
    });

    parallaxImages.forEach(image => {
      const speed = 0.3;
      const offset = scrollPosition * speed;
      image.style.transform = `translateY(${offset}px)`;
    });
  }

  function requestParallaxUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(function() {
      parallaxEffect();
      ticking = false;
    });
  }

  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  window.addEventListener('resize', requestParallaxUpdate);
  requestParallaxUpdate();

  // Intersection Observer to show/hide elements based on visibility
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  hiddenElements.forEach((element) => observer.observe(element));
});
