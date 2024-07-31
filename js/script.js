const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar .navbar-item');
const searchBtn = document.querySelector('#search-button');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// Event click untuk hamburger menu
hamburgerMenu.addEventListener('click', function (e) {
  e.preventDefault(); // Mencegah tindakan default browser
  navbarNav.classList.toggle('active');
});

// Event click untuk search form
searchBtn.addEventListener('click', (e) => {
  searchForm.classList.toggle('show');
  searchBox.focus();
  e.preventDefault();
});

// Menambahkan event click ke seluruh dokumen untuk pengkondisian
document.addEventListener('click', function (e) {
  // Kondisi dimana hamburger menu di tutup di luar bagian navigation
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  // Kondisi untuk search
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.toggle('show');
  }
});
