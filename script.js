const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.panel, .card, .timeline-item, .hero-card, .hero-text').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get('name');
  const business = data.get('business');
  const message = data.get('message');

  const body = encodeURIComponent(
    `Name: ${name}\nBusiness: ${business}\nProject description: ${message}`
  );
  const subject = encodeURIComponent('Project inquiry from Uplift Web');

  window.location.href = `mailto:hello@upliftweb.studio?subject=${subject}&body=${body}`;
  status.textContent = 'Thanks! Your email client should open shortly.';
});
