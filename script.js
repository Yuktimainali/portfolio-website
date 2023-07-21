
  // Your existing JavaScript code here
  $(document).ready(function () {
    // Get the initial position of the .nav div
    const navTop = $('.nav').offset().top;

    // Function to check the scroll position and add/remove the .scrolled class
    function checkScrollPosition() {
      const scrollPosition = $(window).scrollTop();

      if (scrollPosition > navTop) {
        $('.nav').addClass('scrolled');
      } else {
        $('.nav').removeClass('scrolled');
      }
    }

    // Execute the checkScrollPosition function on page load
    checkScrollPosition();

    // Bind the checkScrollPosition function to the scroll event
    $(window).on('scroll', function () {
      checkScrollPosition();
    });

    // Add the nameLinks functionality
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

    // Add the counter and text animation functionality
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
      textElement.textContent = textElement.textContent.includes("Software")
        ? "I am also a Web Developer."
        : "I am a Software Developer.";
      void textElement.offsetWidth; // Trigger reflow
      textElement.style.animation = "text-appear 0.7s ease-in-out";
    }, 3500);
  });

