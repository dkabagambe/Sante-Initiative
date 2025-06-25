// Mobile Navigation Functionality
const mobileToggle = document.getElementById("mobileToggle");
const menuIcon = document.getElementById("menuIcon");
const offCanvasMenu = document.getElementById("offCanvasMenu");
const menuOverlay = document.getElementById("menuOverlay");
const body = document.body;

// Function to close the menu
function closeMenu() {
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
  offCanvasMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  body.classList.remove("no-scroll");
}

// Function to open the menu
function openMenu() {
  menuIcon.classList.remove("fa-bars");
  menuIcon.classList.add("fa-times");
  offCanvasMenu.classList.add("active");
  menuOverlay.classList.add("active");
  body.classList.add("no-scroll");
}

// Toggle mobile menu
mobileToggle.addEventListener("click", function () {
  if (offCanvasMenu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close menu when clicking overlay
menuOverlay.addEventListener("click", closeMenu);

// Close menu when clicking a menu item
const menuLinks = document.querySelectorAll(".off-canvas-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Header scroll effect
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".objective-card, .program-card, .involve-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial state for animation
document
  .querySelectorAll(".objective-card, .program-card, .involve-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
