let lastScrollTop = 0;
let scrollDirection = 'down';

function openMenu() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}

// Scroll detection for menu button visibility
window.addEventListener('scroll', function() {
    let menuBtn = document.querySelector('.menu-btn');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check scroll direction
    if (currentScroll > lastScrollTop) {
        // Scrolling DOWN
        scrollDirection = 'down';
        if (menuBtn) {
            menuBtn.classList.remove('visible');
        }
    } else if (currentScroll < lastScrollTop) {
        // Scrolling UP
        scrollDirection = 'up';
        if (currentScroll > 100) { // Only show when scrolled past hero section
            if (menuBtn) {
                menuBtn.classList.add('visible');
            }
        }
    }
    
    // Show menu on hero section
    if (currentScroll < 100) {
        if (menuBtn) {
            menuBtn.classList.add('hero-visible');
            menuBtn.classList.remove('visible');
        }
    } else if (currentScroll > 100 && scrollDirection === 'down') {
        if (menuBtn) {
            menuBtn.classList.remove('visible');
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
