document.addEventListener("DOMContentLoaded", function () {
  /* ==========================================================================
     1. Toggle Navigation Menu
     ========================================================================== */
  // Assuming you have a hamburger icon element with class "menu-toggle"
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    // Toggle a class (e.g., "active") that shows/hides the nav links
    navLinks.classList.toggle("active");
  }

  /* ==========================================================================
     2. Smooth Scrolling for Navigation Links
     ========================================================================== */
  const navAnchors = document.querySelectorAll("nav a");

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      // Get the section id from the anchor href attribute
      const targetID = this.getAttribute("href");
      const targetSection = document.querySelector(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  /* ==========================================================================
     3. Filter Projects by Category
     ========================================================================== */
  // This function expects your project articles to have a 'data-category' attribute.
  // For example: <article data-category="web"> ... </article>
  window.filterProjects = function (category) {
    const projects = document.querySelectorAll("#projects article");
    projects.forEach((project) => {
      if (category === "all" || project.getAttribute("data-category") === category) {
        project.style.display = "";
      } else {
        project.style.display = "none";
      }
    });
  };

  /* ==========================================================================
     4. Lightbox Effect for Project Images
     ========================================================================== */
  // Create a modal container for lightbox if it doesn't exist yet
  let lightboxModal = document.createElement("div");
  lightboxModal.id = "lightbox-modal";
  lightboxModal.style.display = "none";
  lightboxModal.style.position = "fixed";
  lightboxModal.style.top = "0";
  lightboxModal.style.left = "0";
  lightboxModal.style.width = "100%";
  lightboxModal.style.height = "100%";
  lightboxModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  lightboxModal.style.justifyContent = "center";
  lightboxModal.style.alignItems = "center";
  lightboxModal.style.zIndex = "1000";
  lightboxModal.style.cursor = "pointer";
  document.body.appendChild(lightboxModal);

  // Create an image element inside the modal to display the clicked project image
  let lightboxImage = document.createElement("img");
  lightboxImage.style.maxWidth = "90%";
  lightboxImage.style.maxHeight = "90%";
  lightboxModal.appendChild(lightboxImage);

  // Add click listeners to each project image inside the Projects section for lightbox
  const projectImages = document.querySelectorAll("#projects img");
  projectImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      openLightbox(this.src);
    });
  });

  function openLightbox(src) {
    lightboxImage.src = src;
    lightboxModal.style.display = "flex";
  }

  // Close the lightbox when clicking outside the image (on the modal)
  lightboxModal.addEventListener("click", function (e) {
    if (e.target !== lightboxImage) {
      lightboxModal.style.display = "none";
    }
  });

  /* ==========================================================================
     5. Contact Form Validation
     ========================================================================== */
  const contactForm = document.querySelector("#contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", validateContactForm);
  }

  function validateContactForm(e) {
    e.preventDefault(); // Prevent form submission by default

    // Retrieve form fields
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    // Basic validation
    if (
      nameField.value.trim() === "" ||
      emailField.value.trim() === "" ||
      messageField.value.trim() === ""
    ) {
      alert("Please fill in all fields before submitting the form.");
      return;
    }

    // Optionally, add more validation (e.g., email pattern matching)
    // Provide feedback and simulate successful submission
    alert("Thank you for your message! We'll get back to you shortly.");

    // Reset form after submission
    contactForm.reset();
  }

  /* ==========================================================================
     6. Debugging Assistance
     ========================================================================== */
  // Example logging to help debug interactivity
  console.log("Script loaded! All functions are initialized.");
});