const navLinks = document.querySelectorAll('.navlink');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      // Remove "active" class from all links
      navLinks.forEach((link) => {
        link.classList.remove('active');
        link.style.color = ''; // Reset the color
      });

      // Add "active" class to the clicked link
      link.classList.add('active');
      link.style.color = 'rgba(199, 3, 3, 0.842)';
    }
  });
});
