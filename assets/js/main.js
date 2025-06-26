// Main JavaScript for CodeFolio Theme

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initThemeToggle();
    initColorThemeSwitch();
    initTestimonials();
    initContactForm();
    initScrollAnimations();
    initLanguageSwitcher();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target)) {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle?.querySelector('i');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(icon, savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(icon, newTheme);
        });
    }
}

function updateThemeIcon(icon, theme) {
    if (!icon) return;
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Color Theme Switcher
function initColorThemeSwitch() {
    const colorThemeOptions = document.querySelectorAll('.color-theme-option');
    const currentThemeIcon = document.getElementById('current-theme-icon');
    const colorThemeDropdown = document.getElementById('color-theme-dropdown');
    const colorThemeToggle = document.getElementById('color-theme-toggle');
    
    if (!colorThemeToggle || !colorThemeDropdown) {
        return;
    }
    
    // Get current color theme
    let currentColorTheme = localStorage.getItem('color-theme') || 'default';
    
    // Apply color theme on page load
    document.documentElement.setAttribute('data-color-theme', currentColorTheme);
    updateColorThemeIcon(currentColorTheme);
    updateActiveColorOption(currentColorTheme);
    
    // Toggle dropdown on click
    colorThemeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isVisible = colorThemeDropdown.classList.contains('show');
        
        // Close any other open dropdowns first
        document.querySelectorAll('.color-theme-dropdown.show').forEach(dropdown => {
            if (dropdown !== colorThemeDropdown) {
                dropdown.classList.remove('show');
            }
        });
        
        if (isVisible) {
            closeColorThemeDropdown();
        } else {
            openColorThemeDropdown();
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInsideToggle = colorThemeToggle.contains(e.target);
        const isClickInsideDropdown = colorThemeDropdown.contains(e.target);
        
        if (!isClickInsideToggle && !isClickInsideDropdown) {
            closeColorThemeDropdown();
        }
    });
    
    // Close dropdown on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeColorThemeDropdown();
        }
    });
    
    // Color theme option click handlers
    colorThemeOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const theme = option.getAttribute('data-theme');
            
            if (theme && theme !== currentColorTheme) {
                // Apply new color theme
                document.documentElement.setAttribute('data-color-theme', theme);
                localStorage.setItem('color-theme', theme);
                
                // Update current theme
                currentColorTheme = theme;
                
                // Update UI
                updateColorThemeIcon(theme);
                updateActiveColorOption(theme);
                
                // Add visual feedback
                option.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    option.style.transform = '';
                }, 150);
                
                // Close dropdown after selection
                setTimeout(() => {
                    closeColorThemeDropdown();
                }, 200);
            }
        });
    });
    
    function openColorThemeDropdown() {
        colorThemeDropdown.classList.add('show');
        colorThemeToggle.setAttribute('aria-expanded', 'true');
        
        // Update chevron icon
        const chevron = colorThemeToggle.querySelector('.fa-chevron-down');
        if (chevron) {
            chevron.style.transform = 'rotate(180deg)';
            chevron.style.transition = 'transform 0.3s ease';
        }
    }
    
    function closeColorThemeDropdown() {
        colorThemeDropdown.classList.remove('show');
        colorThemeToggle.setAttribute('aria-expanded', 'false');
        
        // Reset chevron icon
        const chevron = colorThemeToggle.querySelector('.fa-chevron-down');
        if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
            chevron.style.transition = 'transform 0.3s ease';
        }
    }
}

function updateColorThemeIcon(theme) {
    const currentThemeIcon = document.getElementById('current-theme-icon');
    if (currentThemeIcon) {
        // Theme color mappings
        const themeColors = {
            'default': 'linear-gradient(135deg, #4F46E5, #FBBF24)',
            'ocean': 'linear-gradient(135deg, #0ea5e9, #0284c7)',
            'emerald': 'linear-gradient(135deg, #10b981, #059669)',
            'sunset': 'linear-gradient(135deg, #f59e0b, #d97706)',
            'rose': 'linear-gradient(135deg, #f43f5e, #e11d48)',
            'cyberpunk': 'linear-gradient(135deg, #a855f7, #7c3aed)'
        };
        
        // Update background with smooth transition
        const gradient = themeColors[theme] || themeColors['default'];
        currentThemeIcon.style.background = gradient;
        
        // Add a subtle scale animation when changing
        currentThemeIcon.style.transform = 'scale(1.1)';
        setTimeout(() => {
            currentThemeIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

function updateActiveColorOption(theme) {
    const colorThemeOptions = document.querySelectorAll('.color-theme-option');
    colorThemeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-theme') === theme) {
            option.classList.add('active');
        }
    });
}

// Testimonials slider functionality
function initTestimonials() {
    const container = document.querySelector('.testimonials-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (!container || !cards.length) return;
    
    let currentIndex = 0;
    
    function showTestimonial(index) {
        const translateX = -index * 100;
        container.style.transform = `translateX(${translateX}%)`;
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % cards.length;
        showTestimonial(currentIndex);
    }
    
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showTestimonial(currentIndex);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
    }
    
    // Auto-play testimonials
    setInterval(nextTestimonial, 5000);
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    container.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    container.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
        }
    }
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const formData = new FormData(form);
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            form.reset();
            
        } catch (error) {
            // Show error message
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? 'var(--success-color)' : 
                   type === 'error' ? 'var(--error-color)' : 'var(--primary-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: 0 10px 25px var(--shadow);
        z-index: 10000;
        transform: translateX(100%);
        transition: var(--transition);
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.product-card, .feature-card, .skill-item, .contact-method');
    animatedElements.forEach(el => observer.observe(el));
}

// Language switcher functionality
function initLanguageSwitcher() {
    const languageDropdown = document.getElementById('languageDropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (!languageDropdown || !dropdownMenu) return;
    
    languageDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
    });
    
    // Handle language selection
    const languageLinks = dropdownMenu.querySelectorAll('a');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const selectedLang = this.textContent.trim();
            const currentLangSpan = languageDropdown.querySelector('span');
            
            if (currentLangSpan) {
                currentLangSpan.textContent = selectedLang;
            }
            
            dropdownMenu.classList.remove('show');
            
            // Navigate to the selected language page
            const href = this.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });
}

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
window.addEventListener('scroll', throttle(function() {
    // Handle scroll-based animations or effects here if needed
}, 16)); // ~60fps

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        font-size: 1rem;
        opacity: 0.8;
        transition: opacity 0.2s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    .dropdown-menu.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        .notification {
            left: 1rem;
            right: 1rem;
            max-width: none;
        }
    }
`;

document.head.appendChild(notificationStyles);

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initThemeToggle();
    initColorThemeSwitch();
    initTestimonials();
    initContactForm();
    initScrollAnimations();
    initLanguageSwitcher();
}); 