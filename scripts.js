// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
