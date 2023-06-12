function setActive(event) {
    var links = document.querySelectorAll(".navigation-links li a");
    links.forEach(function(link) {
        link.classList.remove("active");
    });
    event.target.classList.add("active");
    event.preventDefault(); // Prevent default link behavior
}