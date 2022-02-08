window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// toggle

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".nav");

  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
