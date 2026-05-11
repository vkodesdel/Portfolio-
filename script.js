// Smooth fade in when page loads
window.addEventListener("load", function() {
  document.querySelector(".hero-content").style.opacity = "0";
  setTimeout(function() {
    document.querySelector(".hero-content").style.transition = "opacity 1.5s";
    document.querySelector(".hero-content").style.opacity = "1";
  }, 100);
});

// Typing animation
let titles = [
  "Aspiring Web Developer 💻",
  "JavaScript Enthusiast ⚡",
  "Based in Nairobi, Kenya 🇰🇪",
  "Available for Hire 💰"
];

let index = 0;
let charIndex = 0;
let currentTitle = "";

function type() {
  if (charIndex < titles[index].length) {
    currentTitle += titles[index][charIndex];
    document.querySelector(".typing").textContent = currentTitle;
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    currentTitle = titles[index].substring(0, charIndex - 1);
    document.querySelector(".typing").textContent = currentTitle;
    charIndex--;
    setTimeout(erase, 40);
  } else {
    index = (index + 1) % titles.length;
    setTimeout(type, 500);
  }
}

// Highlight active nav link on scroll
window.addEventListener("scroll", function() {
  let sections = document.querySelectorAll("section");
  sections.forEach(function(section) {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document.querySelectorAll("nav ul a").forEach(function(link) {
        link.style.color = "white";
        link.style.fontWeight = "normal";
        link.style.borderBottom = "none";
      });
      let activeLink = document.querySelector(`nav ul a[href="#${id}"]`);
      if (activeLink) {
        activeLink.style.color = "steelblue";
        activeLink.style.fontWeight = "bold";
        activeLink.style.borderBottom = "2px solid steelblue";
      }
    }
  });
});
setTimeout(type, 2000);
// Scroll animations - triggers every time
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".skill, .project-card");
  elements.forEach(function(el) {
    let position = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
    }
  });
});

// Set initial state
document.querySelectorAll(".skill, .project-card").forEach(function(el) {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});
