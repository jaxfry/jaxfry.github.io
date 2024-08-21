document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('.parallax-caption');
  const parallaxImages = document.querySelectorAll('.parallax-image');
  const hiddenElements = document.querySelectorAll('.hidden');
  const main = document.getElementById('main');
  const body = document.body;

  let sx = 0, sy = 0;
  let dx = 0, dy = 0;
  let ticking = false;

  // Adjust body height based on main content
  body.style.height = (main.clientHeight - 10000) + 'px';

  function parallaxEffect() {
    const scrollPosition = window.scrollY;

    parallaxElements.forEach(element => {
      const speed = 0.2; // Adjust this value to change the speed of the parallax effect
      const offset = scrollPosition * speed;
      element.style.transform = `translateY(-${offset}px)`;
    });

    parallaxImages.forEach(image => {
      const speed = 0.3; // Adjust this value to change the speed of the parallax effect
      const offset = scrollPosition * speed;
      image.style.transform = `translateY(${offset}px)`;
    });
  }

  function easeScroll() {
    sx = window.scrollX;
    sy = window.scrollY;
    const dampingFactor = 0.05; // Lower value for more momentum
    dx += (sx - dx) * dampingFactor;
    dy += (sy - dy) * dampingFactor;
    main.style.transform = `translate3d(${-dx}px, ${-dy}px, 0)`;

    parallaxEffect(); // Apply parallax effect during the smooth scroll
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        easeScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Start the rendering loop for smooth scroll
  window.requestAnimationFrame(function render() {
    easeScroll();
    window.requestAnimationFrame(render);
  });

  // Intersection Observer to show/hide elements based on visibility
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  hiddenElements.forEach((element) => observer.observe(element));
});
