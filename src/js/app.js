window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
};

const scrollTop = document.querySelector('.scroll-top');

document.addEventListener('scroll', () => {
  const showScrollAt = 500;
  if (window.pageYOffset > showScrollAt) {
    scrollTop.className = 'scroll-top active';
  } else {
    scrollTop.className = 'scroll-top';
  }
});
