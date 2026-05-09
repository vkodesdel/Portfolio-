// Smooth fade in when page loads
window.addEventListener("load", function() {
  document.querySelector(".hero-content").style.opacity = "0";
  setTimeout(function() {
    document.querySelector(".hero-content").style.transition = "opacity 1.5s";
    document.querySelector(".hero-content").style.opacity = "1";
  }, 100);
});

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