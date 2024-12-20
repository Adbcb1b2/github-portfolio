// Open the burger menu when clicked
function toggleMenu(event) {
    event.preventDefault(); // Prevent default action of the event only for the hamburger icon
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Add open class to elements, can then target in CSS
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Close the menu if a link is clicked
function closeMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.remove("open");
    icon.classList.remove("open");
}

// Close the menu if screen is resized to desktop width and back to mobile
window.addEventListener('resize', () => {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (window.innerWidth > 768) {
        menuLinks.classList.remove('open'); // Hide menu on larger screens
        hamburgerIcon.classList.remove('open'); // Reset icon
    }
});