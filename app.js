const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuBackdrop = document.getElementById('menuBackdrop');
const navLinks = document.querySelectorAll('#menu a');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isMenuOpen = false;

// Toggle menu with animation
hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        menu.classList.remove('hidden');
        menuBackdrop.classList.remove('hidden');
        
        // Animate hamburger to X
        line1.style.transform = 'rotate(45deg) translateY(10px)';
        line2.style.opacity = '0';
        line3.style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        menu.classList.add('hidden');
        menuBackdrop.classList.add('hidden');
        
        // Reset hamburger animation
        line1.style.transform = 'rotate(0) translateY(0)';
        line2.style.opacity = '1';
        line3.style.transform = 'rotate(0) translateY(0)';
    }
});

// Close menu when clicking backdrop
menuBackdrop.addEventListener('click', () => {
    hamburger.click();
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (isMenuOpen) {
            hamburger.click();
        }
    });
});

// Close menu on window resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
        hamburger.click();
    }
});

// Toggle intro card functionality
const toggleSection = document.querySelector("#toggleSection");
const toggleButton = document.querySelector("#toggleButton");

if (toggleButton && toggleSection) {
    toggleButton.addEventListener("click", (e) => {
        e.preventDefault();
        // Toggle the 'hidden' class on the section
        toggleSection.classList.toggle("hidden");
        
        // Change the button text depending on the visibility
        if (toggleSection.classList.contains("hidden")) {
            toggleButton.textContent = "SHOW ME";
        } else {
            toggleButton.textContent = "HIDE ME";
        }
    });
}

// Projects Carousel Scroll Functionality
const projectsContainer = document.getElementById('projectsContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (projectsContainer && scrollLeftBtn && scrollRightBtn) {
    // Scroll amount in pixels
    const scrollAmount = 320;

    scrollLeftBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update button visibility based on scroll position
    function updateScrollButtons() {
        scrollLeftBtn.style.opacity = projectsContainer.scrollLeft > 0 ? '1' : '0.5';
        scrollLeftBtn.style.pointerEvents = projectsContainer.scrollLeft > 0 ? 'auto' : 'none';
        
        const maxScroll = projectsContainer.scrollWidth - projectsContainer.clientWidth;
        scrollRightBtn.style.opacity = projectsContainer.scrollLeft < maxScroll ? '1' : '0.5';
        scrollRightBtn.style.pointerEvents = projectsContainer.scrollLeft < maxScroll ? 'auto' : 'none';
    }

    projectsContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();
}
