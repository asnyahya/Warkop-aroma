const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar .navbar-item');

hamburgerMenu.addEventListener('click', function (e) {
  e.preventDefault();
  navbarNav.classList.toggle('active');
});
