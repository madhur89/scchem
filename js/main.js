/**
 * Shanghai Everest Chemicals Co., Ltd
 * Main UI Controller & Global Helpers
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initBackToTop();
  initHeroSearch();
});

// Mobile Navigation & Header Scroll State
function initNavbar() {
  const header = document.querySelector('.main-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile nav when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
}

// Animated Numerical Stats Counters
function initCounters() {
  const counters = document.querySelectorAll('.stat-count');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-target'), 10);
        let current = 0;
        const duration = 1800; // ms
        const stepTime = 20;
        const step = Math.ceil(countTo / (duration / stepTime));

        const timer = setInterval(() => {
          current += step;
          if (current >= countTo) {
            target.textContent = countTo.toLocaleString();
            clearInterval(timer);
          } else {
            target.textContent = current.toLocaleString();
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
}

// Back to Top Button
function initBackToTop() {
  const backTopBtn = document.querySelector('.btn-back-top');
  if (!backTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backTopBtn.classList.add('show');
    } else {
      backTopBtn.classList.remove('show');
    }
  });

  backTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Quick Search from Hero Section
function initHeroSearch() {
  const heroForm = document.getElementById('heroSearchForm');
  const heroInput = document.getElementById('heroSearchInput');
  
  if (heroForm && heroInput) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = heroInput.value.trim();
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      } else {
        window.location.href = 'products.html';
      }
    });
  }
}
