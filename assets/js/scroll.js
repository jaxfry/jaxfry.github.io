
// Existing parallax effect code
document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const parallaxElements = document.querySelectorAll('.parallax-caption');
  const parallaxImages = document.querySelectorAll('.parallax-image');

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
});

const body = document.body;
const main = document.getElementById('main');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;

body.style.height = (main.clientHeight - 10000) + 'px';


// Throttle the scroll event for better performance
let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      easeScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function easeScroll() {
  sx = window.scrollX;
  sy = window.scrollY;
  const dampingFactor = 0.05; // Lower value for more momentum
  dx += (sx - dx) * dampingFactor;
  dy += (sy - dy) * dampingFactor;
  main.style.transform = `translate3d(${-dx}px, ${-dy}px, 0)`;
}

window.requestAnimationFrame(render);

function render() {
  easeScroll();
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
  observer.observe(element);
});
