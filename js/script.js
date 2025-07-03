// main.js  (load with <script src="main.js" defer></script> or just before </body>)
document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------- 1. Simple cart demo ------------------------- */
  const cart = [];
  document.querySelectorAll('.card .c-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const card  = btn.closest('.card');
      const title = card.querySelector('.card-title').textContent;
      const price = card.querySelector('.card-text').textContent;

      cart.push({ title, price });
      alert(`${title} added to cart!`);
      console.log(cart);
    });
  });

  /* -------------------- 2. Smooth scroll for navbar links -------------------- */
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* -------------------------- 3. Sticky navbar -------------------------- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 50);
  });

  /* -------------------- 4. Contact form → WhatsApp -------------------- */
  const contactForm = document.getElementById('contactForm');           // matches new id
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();                                               // stop default post

      const name    = document.getElementById('userName').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !message) {
        alert('Please fill in both fields.');
        return;
      }

      // ⚠️  wa.me links MUST NOT contain a plus sign or spaces
      const phone  = '+245717372882';                                    // digits only
      const text   = encodeURIComponent(`Name: ${name}\nMessage: ${message}`);
      const waLink = `https://wa.me/${phone}?text=${text}`;

      window.open(waLink, '_blank');                                    // launch WhatsApp
      contactForm.reset();
    });
  }

  /* ----------------------- 5. Back‑to‑top button ----------------------- */
  const backBtn = Object.assign(document.createElement('button'), {
    id: 'btn-back-to-top',
    textContent: '↑',
    style: 'display:none; position:fixed; bottom:2rem; right:2rem;'
  });
  document.body.appendChild(backBtn);

  window.addEventListener('scroll', () => {
    backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});







/*linear-gradient(to top left, lime, transparent),
    linear-gradient(red, transparent),
    linear-gradient(to top right, blue, transparent);*/