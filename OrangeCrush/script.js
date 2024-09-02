function toggleMenu() {
    const overlay = document.getElementById('menu-overlay');
    const hamburger = document.querySelector('.hamburger-menu');
    
    overlay.classList.toggle('show');
    hamburger.classList.toggle('open');
    
    // Close the menu when clicking anywhere on the overlay
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.classList.remove('show');
            hamburger.classList.remove('open');
        }
    });
}