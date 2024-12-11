document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to the About section when the "Discover More" button is clicked
  const discoverMoreBtn = document.getElementById("discover-more");
  discoverMoreBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  // Dynamic highlight of active nav link based on the scroll position
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });

  // Add a scroll-to-top button functionality
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "↑";
  scrollToTopBtn.classList.add("scroll-to-top");
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
});
