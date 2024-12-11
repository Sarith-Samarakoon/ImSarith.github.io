document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("navbar-active");
  });

// Select all cards with the class 'scroll-image-card'
const scrollImageCards = document.querySelectorAll(".scroll-image-card");

// Loop through each relevant card and add hover event listeners
scrollImageCards.forEach((card) => {
  const imageWrapper = card.querySelector(".image-wrapper");
  const projectImage = card.querySelector(".project-image-scroll");

  // Add hover effect to scroll the image down
  imageWrapper.addEventListener("mouseenter", () => {
    projectImage.style.transition = "transform 0.5s ease";
    projectImage.style.transform = "translateY(-70%)"; // Scroll down the image by 50%
  });

  // Reset the image position on mouse leave
  imageWrapper.addEventListener("mouseleave", () => {
    projectImage.style.transition = "transform 0.5s ease";
    projectImage.style.transform = "translateY(0)"; // Reset the image position
  });
});

$(document).ready(function () {
  $(".tab").click(function () {
    var value = $(this).attr("data-filter");

    if (value === "all") {
      $(".project-card").show("1000"); // Show all elements
    } else {
      $(".project-card")
        .not("[data-filter*='" + value + "']")
        .hide("3000"); // Hide elements not matching the filter
      $(".project-card")
        .filter("[data-filter*='" + value + "']")
        .show("3000"); // Show matching elements
    }

    // Toggle active class
    $(".tab").removeClass("active");
    $(this).addClass("active");
  });
});
