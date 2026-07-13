// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const header = document.querySelector('.site-header');
navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('nav-open'));
});

// Menu tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.menu-panel');

function activateTab(tab) {
  tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  panels.forEach(p => p.classList.toggle('active', p.dataset.panel === tab));
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});

// Favorites teasers jump straight to the matching menu tab
document.querySelectorAll('.fav-item[data-tab]').forEach(item => {
  item.addEventListener('click', () => activateTab(item.dataset.tab));
});

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.g-item').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
