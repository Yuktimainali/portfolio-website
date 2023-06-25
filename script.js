document.getElementById('namelink').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById('skills-page').style.display = 'none';
  document.getElementById('intro-page').style.display = 'block';
});

document.getElementById('skills-link').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById('skills-page').style.display = 'block';
  document.getElementById('intro-page').style.display = 'none';
});

const navLinks = document.querySelectorAll('.nav-bar li a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all nav links
    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    // Add 'active' class to the clicked nav link
    this.classList.add('active');
  });
});

const nameLinks = document.querySelectorAll('.nav-bar a');
nameLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all nav links
    nameLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    // Add 'active' class to the clicked nav link
    this.classList.add('active');
  });
});



var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2500);

const textElement = document.getElementById("text-animation");
const initialText = textElement.textContent;

setInterval(() => {
  textElement.style.animation = "none";
  textElement.textContent = textElement.textContent.includes("Software") ? "I am also a Web Developer." : "I am a Software Developer.";
  void textElement.offsetWidth; // Trigger reflow
  textElement.style.animation = "text-appear 0.7s ease-in-out";
}, 3500);

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});