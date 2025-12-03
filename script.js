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
  const email = data.get('email');
  const website = data.get('website');
  const message = data.get('message');

  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${message}`);
  const subject = encodeURIComponent('Project inquiry from Uplift Web');

  window.location.href = `mailto:hello@upliftweb.studio?subject=${subject}&body=${body}`;
  status.textContent = 'Thanks! Your email client should open shortly.';
});
