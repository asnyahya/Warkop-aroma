const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar .navbar-item');

hamburgerMenu.addEventListener('click', function (e) {
  e.preventDefault(); // Mencegah tindakan default browser
  navbarNav.classList.toggle('active');
});

// Menambahkan event click ke seluruh dokumen untuk menutup hamburger menu di luar manapun
document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
