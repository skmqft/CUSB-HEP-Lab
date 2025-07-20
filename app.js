// Enhanced JavaScript for HEP-Detector Development Lab

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initPublicationFilters();
    initScrollAnimations();
    initSmoothScrolling();
    initHeroAnimations();
});

// Publication filtering functionality
function initPublicationFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');

    if (!filterButtons.length || !publicationItems.length) return;

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter publications with animation
            filterPublications(category, publicationItems);
        });
    });
}

// Filter publications based on category
function filterPublications(category, items) {
    items.forEach((item, index) => {
        const itemCategory = item.getAttribute('data-category');
        const shouldShow = category === 'all' || itemCategory === category;
        
        if (shouldShow) {
            // Show with staggered animation
            setTimeout(() => {
                item.classList.remove('hidden');
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                requestAnimationFrame(() => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                });
            }, index * 50);
        } else {
            // Hide with animation
            item.style.transition = 'all 0.2s ease';
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                item.classList.add('hidden');
            }, 200);
        }
    });
}

// Initialize scroll-based animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate cards on scroll
    const animateElements = document.querySelectorAll(
        '.research-card, .faculty-card, .member-card, .facility-card, .collaboration-card'
    );

    animateElements.forEach((element, index) => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(element);
    });

    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'all 0.5s ease';
        observer.observe(title);
    });
}

// Initialize smooth scrolling for navigation links
function initSmoothScrolling() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for potential fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Hero section animations
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroStats = document.querySelector('.hero-stats');

    if (!heroContent) return;

    // Set initial states
    [heroTitle, heroSubtitle, heroDescription, heroStats].forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease';
            element.style.transitionDelay = `${index * 0.2}s`;
        }
    });

    // Trigger animations after a short delay
    setTimeout(() => {
        [heroTitle, heroSubtitle, heroDescription, heroStats].forEach(element => {
            if (element) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }, 300);

    // Animate stats numbers
    animateStatsNumbers();
}

// Animate statistics numbers with counting effect
function animateStatsNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 60; // Animate over roughly 1 second
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + suffix;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + suffix;
            }
        }, 16); // ~60fps
    });
}

// Add hover effects for cards
function initCardHoverEffects() {
    const cards = document.querySelectorAll(
        '.research-card, .faculty-card, .member-card, .facility-card, .collaboration-card'
    );

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add parallax effect to hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled <= heroHeight) {
            const parallaxSpeed = scrolled * 0.5;
            hero.style.transform = `translateY(${parallaxSpeed}px)`;
        }
    });
}

// Initialize loading animations
function initLoadingAnimations() {
    // Add staggered loading animation to grid items
    const gridContainers = document.querySelectorAll(
        '.research-grid, .faculty-grid, .members-grid, .facilities-grid, .collaborations-grid'
    );

    gridContainers.forEach(container => {
        const items = container.children;
        Array.from(items).forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('fade-in-up');
        });
    });
}

// Add keyboard navigation support
function initKeyboardNavigation() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach((button, index) => {
        button.addEventListener('keydown', (e) => {
            let nextIndex;
            
            switch (e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    nextIndex = (index + 1) % filterButtons.length;
                    filterButtons[nextIndex].focus();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    nextIndex = (index - 1 + filterButtons.length) % filterButtons.length;
                    filterButtons[nextIndex].focus();
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    button.click();
                    break;
            }
        });
    });
}

// Add scroll-to-top functionality
function initScrollToTop() {
    // Create scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: var(--color-white);
        border: none;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        box-shadow: var(--shadow-lg);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all additional features after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add small delay to ensure CSS is fully loaded
    setTimeout(() => {
        initCardHoverEffects();
        initKeyboardNavigation();
        initScrollToTop();
        initLoadingAnimations();
    }, 100);
});

// Handle window resize events
window.addEventListener('resize', () => {
    // Recalculate any position-dependent animations
    // This ensures animations work correctly on mobile devices
    const animatedElements = document.querySelectorAll('[style*="transform"]');
    animatedElements.forEach(element => {
        // Reset transform if needed
        if (window.innerWidth < 768) {
            element.style.transform = 'none';
        }
    });
});

// Add error handling for any failed animations
window.addEventListener('error', (e) => {
    console.warn('Animation error caught:', e);
    // Gracefully degrade by removing problematic styles
    document.querySelectorAll('[style*="transition"]').forEach(element => {
        element.style.transition = 'none';
    });
});

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Any scroll-based animations can be added here
}, 16); // 60fps

window.addEventListener('scroll', debouncedScrollHandler);