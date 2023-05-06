const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
