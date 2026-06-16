let lastScrollTop = 0;
let scrollDirection = 'down';

function openMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.add('active');
    }
}

function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.remove('active');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector('.menu-btn');
    
    if (sidebar && menuBtn && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        closeMenu();
    }
});

// Close menu when pressing Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMenu();
    }
});

// Scroll detection for menu button visibility
window.addEventListener('scroll', function() {
    let menuBtn = document.querySelector('.menu-btn');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check scroll direction
    if (currentScroll > lastScrollTop) {
        // Scrolling DOWN - hide menu button
        scrollDirection = 'down';
        if (menuBtn) {
            menuBtn.classList.remove('visible');
        }
    } else if (currentScroll < lastScrollTop) {
        // Scrolling UP - show menu button
        scrollDirection = 'up';
        if (menuBtn) {
            menuBtn.classList.add('visible');
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
