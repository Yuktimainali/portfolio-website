window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const websiteContent = document.querySelector(".website-content");
  const body = document.body;

  // Simulate a minimum loading time of 3 seconds
  setTimeout(function () {
    preloader.style.display = "none";
    websiteContent.style.display = "block";
    body.classList.add("show-scrollbar"); // Show the scrollbar when content is loaded
  }, 4000); // 3000 milliseconds = 3 seconds
});



document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu a");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      const checkbox = document.getElementById("check");
      checkbox.checked = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-bar a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

$(document).ready(function () {
  const textElement = document.getElementById("text-animation");
  const initialText = textElement.textContent;

  setInterval(() => {
    textElement.style.animation = "none";
    textElement.textContent = textElement.textContent.includes("Software")
      ? "I am also a Web Developer."
      : "I am a Software Developer.";
    void textElement.offsetWidth; // Trigger reflow
    textElement.style.animation = "text-appear 0.7s ease-in-out";
  }, 3500);
});

//toastr js

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Toastr
  toastr.options = {
    positionClass: "toast-top-right", // Adjust the position as needed
    closeButton: true,
    progressBar: false,
  };

  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form data
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("text").value;
    const message = document.getElementById("textarea").value;

    // Perform form submission using fetch
    fetch("http://localhost:3000/submitform.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `full-name=${encodeURIComponent(
        fullName
      )}&email=${encodeURIComponent(email)}&text=${encodeURIComponent(
        subject
      )}&textarea=${encodeURIComponent(message)}`,
    })
      .then((response) => {
        if (response.ok) {
          // Form submission was successful, display Toastr success message
          toastr.success("Data inserted successfully");
          contactForm.reset(); // Clear the form fields if needed
        } else {
          // Form submission failed, display Toastr error message
          toastr.error("Error: Data insertion failed");
          contactForm.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toastr.error("Error: Data insertion failed");
        
      });
  });
});
