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

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-83834093-1', 'auto');
ga('send', 'pageview');

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

