const navbar = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const date = document.getElementById("date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  document.body.style.overflow = "auto";
});
// set year
date.innerHTML = new Date().getFullYear();
