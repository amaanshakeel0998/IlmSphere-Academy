  const mobileMenu = document.getElementById('mobileMenu');

  // Mobile menu
  function openMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('open');
    }
  }

  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
    }
  }

  // FAQ toggle
  function toggleFaq(item) {
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
    item.classList.toggle('open');
  }

  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', openMenu);
  }

  const mobileClose = document.querySelector('.mobile-close');
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMenu);
  }

  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleFaq(item));
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Stagger children
  document.querySelectorAll('.courses-grid, .why-grid, .testimonials-grid, .pricing-grid').forEach(grid => {
    grid.querySelectorAll('.fade-up').forEach((card, i) => {
      card.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) {
      return;
    }
    if (window.scrollY > 80) {
      nav.style.borderBottomColor = 'rgba(201, 162, 39, 0.5)';
    } else {
      nav.style.borderBottomColor = 'rgba(201, 162, 39, 0.3)';
    }
  });
