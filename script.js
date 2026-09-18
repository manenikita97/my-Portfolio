// Mobile nav toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav.topnav.links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Theme toggle (light / dark / system)
const themeToggle = document.querySelector('.theme-toggle');
let manualTheme = null;
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    manualTheme = manualTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', manualTheme);
  });
}

// Active section highlighting
const sections = document.querySelectorAll('section[id], .profile[id]');
const navItems = document.querySelectorAll('nav.topnav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(sec => observer.observe(sec));
