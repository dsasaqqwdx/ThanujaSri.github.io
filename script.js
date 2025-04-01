// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add active class to current nav link
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    const itemCount = items.length;

    // Create dots
    items.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = idx;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
    }

    // Auto-advance every 5 seconds
    const autoAdvance = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    track.addEventListener('mouseenter', () => clearInterval(autoAdvance));
    track.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));

    // Button click handlers
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });
}); 