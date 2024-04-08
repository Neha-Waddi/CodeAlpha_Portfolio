// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const scrollY = target.offsetTop;

    window.scrollTo({
      top: scrollY,
      behavior: 'smooth'
    });
  });
});
