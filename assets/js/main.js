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
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    navLinkItems.forEach(link => {
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
                navLinkItems.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle?.querySelector('i');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('🎨 [Theme] Saved theme from localStorage:', savedTheme);
    
    body.setAttribute('data-theme', savedTheme);
    console.log('🎨 [Theme] Set body data-theme to:', body.getAttribute('data-theme'));
    
    // Also initialize color theme if not set
    const savedColorTheme = localStorage.getItem('color-theme') || 'default';
    document.documentElement.setAttribute('data-color-theme', savedColorTheme);
    console.log('🎨 [Theme] Set html data-color-theme to:', document.documentElement.getAttribute('data-color-theme'));
    
    updateThemeIcon(icon, savedTheme);
    
    if (themeToggle) {
        // Remove any existing event listeners to prevent duplicates
        const newThemeToggle = themeToggle.cloneNode(true);
        themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
        
        console.log('🎨 [Theme] Adding click event listener to theme toggle button');
        newThemeToggle.addEventListener('click', function(event) {
            // Prevent event bubbling and multiple triggers
            event.preventDefault();
            event.stopPropagation();
            
            console.log('🎨 [Theme] Theme toggle button clicked!', event);
            
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            console.log('🎨 [Theme] Theme switch:', {
                currentTheme: currentTheme,
                newTheme: newTheme,
                bodyDataTheme: body.getAttribute('data-theme')
            });
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon on the new element
            const newIcon = newThemeToggle.querySelector('i');
            updateThemeIcon(newIcon, newTheme);
            
            console.log('🎨 [Theme] After switch:', {
                bodyDataTheme: body.getAttribute('data-theme'),
                localStorage: localStorage.getItem('theme'),
                iconClasses: newIcon?.className
            });
        });
    } else {
        console.error('❌ [Theme] Theme toggle button not found! Make sure element with id="themeToggle" exists');
    }
    
    console.log('🎨 [Theme] Theme toggle initialization complete');
}

function updateThemeIcon(icon, theme) {
    console.log('🎨 [Icon] Updating theme icon:', {
        icon: !!icon,
        theme: theme,
        currentClasses: icon?.className
    });
    
    if (!icon) {
        console.error('❌ [Icon] No icon element provided to updateThemeIcon');
        return;
    }
    
    const oldClasses = icon.className;
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun theme-icon';
        console.log('🎨 [Icon] Changed to sun icon (dark theme)');
    } else {
        icon.className = 'fas fa-moon theme-icon';
        console.log('🎨 [Icon] Changed to moon icon (light theme)');
    }
    
    console.log('🎨 [Icon] Icon update complete:', {
        oldClasses: oldClasses,
        newClasses: icon.className,
        theme: theme
    });
}

// Color Theme Switcher
function initColorThemeSwitch() {
    const colorThemeOptions = document.querySelectorAll('.color-theme-option');
    const colorThemeDropdown = document.getElementById('colorThemeDropdown');
    const colorThemeToggle = document.getElementById('colorThemeToggle');
    
    console.log('🎨 [ColorTheme] Initializing color theme switcher...', {
        colorThemeToggle: !!colorThemeToggle,
        colorThemeDropdown: !!colorThemeDropdown,
        optionsCount: colorThemeOptions.length
    });
    
    if (!colorThemeToggle || !colorThemeDropdown) {
        console.error('❌ [ColorTheme] Required elements not found!', {
            toggle: !!colorThemeToggle,
            dropdown: !!colorThemeDropdown
        });
        return;
    }
    
    // State tracking
    let isDropdownOpen = false;
    
    // Get current color theme
    let currentColorTheme = localStorage.getItem('color-theme') || 'default';
    
    // Apply color theme on page load
    document.documentElement.setAttribute('data-color-theme', currentColorTheme);
    updateActiveColorOption(currentColorTheme);
    
    // Toggle dropdown on click
    colorThemeToggle.addEventListener('click', function(e) {
        console.log('🎨 [ColorTheme] Toggle button clicked!', e);
        console.log('🎨 [ColorTheme] Current state - isDropdownOpen:', isDropdownOpen);
        e.preventDefault();
        e.stopPropagation();
        
        // Close any other open dropdowns first
        document.querySelectorAll('.color-theme-dropdown.show').forEach(dropdown => {
            if (dropdown !== colorThemeDropdown) {
                dropdown.classList.remove('show');
            }
        });
        
        if (isDropdownOpen) {
            console.log('🎨 [ColorTheme] Closing dropdown');
            closeColorThemeDropdown();
        } else {
            console.log('🎨 [ColorTheme] Opening dropdown');
            openColorThemeDropdown();
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInsideToggle = colorThemeToggle.contains(e.target);
        const isClickInsideDropdown = colorThemeDropdown.contains(e.target);
        
        console.log('🎨 [ColorTheme] Document click:', {
            target: e.target,
            isClickInsideToggle,
            isClickInsideDropdown,
            dropdownHasShow: colorThemeDropdown.classList.contains('show')
        });
        
        if (!isClickInsideToggle && !isClickInsideDropdown && isDropdownOpen) {
            console.log('🎨 [ColorTheme] Closing dropdown due to outside click');
            closeColorThemeDropdown();
        }
    });
    
    // Close dropdown on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isDropdownOpen) {
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
        console.log('🎨 [ColorTheme] Opening dropdown...');
        isDropdownOpen = true;
        colorThemeDropdown.classList.add('show');
        colorThemeToggle.setAttribute('aria-expanded', 'true');
        console.log('🎨 [ColorTheme] Dropdown opened, classes:', colorThemeDropdown.className);
        
        // Update chevron icon
        const chevron = colorThemeToggle.querySelector('.fa-chevron-down');
        if (chevron) {
            chevron.style.transform = 'rotate(180deg)';
            chevron.style.transition = 'transform 0.3s ease';
        }
    }
    
    function closeColorThemeDropdown() {
        console.log('🎨 [ColorTheme] Closing dropdown...');
        isDropdownOpen = false;
        colorThemeDropdown.classList.remove('show');
        colorThemeToggle.setAttribute('aria-expanded', 'false');
        console.log('🎨 [ColorTheme] Dropdown closed, classes:', colorThemeDropdown.className);
        
        // Reset chevron icon
        const chevron = colorThemeToggle.querySelector('.fa-chevron-down');
        if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
            chevron.style.transition = 'transform 0.3s ease';
        }
    }
}

// updateColorThemeIcon function removed - no dynamic icon to update

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
    const languageSelect = document.getElementById('languageSelect');
    
    if (!languageSelect) return;
    
    // Get current page info
    const currentPath = window.location.pathname;
    const currentLang = document.documentElement.lang || 'en';
    
    // Handle language selection
    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        
        // Save selected language to localStorage
        localStorage.setItem('preferred-language', selectedLang);
        
        // Determine target URL based on selected language
        let targetUrl = '/';
        
        // Map language codes to page names
        if (selectedLang === 'zh-TW') {
            targetUrl = '/index-zh-tw.html';
        } else if (selectedLang === 'zh-CN') {
            targetUrl = '/index-zh-cn.html';
        } else {
            // Default to English (index.html)
            targetUrl = '/index.html';
        }
        
        // Navigate to the language-specific page
        window.location.href = targetUrl;
    });
    
    // On page load, set the correct language in the selector
    languageSelect.value = currentLang;
}

// Language switching now handled by navigating to different pages

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

// Video player functionality
function initVideoPlayers() {
    const videoPlayers = document.querySelectorAll('.video-player');
    
    console.log(`Found ${videoPlayers.length} video players`);
    
    videoPlayers.forEach((video, index) => {
        console.log(`Initializing video player ${index + 1}:`, video.querySelector('source')?.src || 'No source found');
        
        // Basic setup for silent videos
        video.muted = true;
        video.playsInline = true;
        video.controls = true;
        video.preload = 'metadata';
        
        // Load video
        video.load();
        
        // Simple event handlers
        video.addEventListener('loadedmetadata', function() {
            console.log(`Video ${index + 1} metadata loaded, duration: ${this.duration}s`);
        });
        
        video.addEventListener('canplay', function() {
            console.log(`Video ${index + 1} can play`);
        });
        
        video.addEventListener('error', function(e) {
            console.error(`Video ${index + 1} error:`, this.error);
        });
        
        // Click to play/pause
        video.addEventListener('click', function(e) {
            console.log(`Video ${index + 1} clicked`);
            
            if (this.paused) {
                this.play().catch(error => {
                    console.error('Play failed:', error);
                });
            } else {
                this.pause();
            }
        });
    });
}



// Simple video play function
function playVideo(button) {
    const wrapper = button.parentNode;
    const video = wrapper.querySelector('video');
    
    if (video) {
        console.log('Playing video:', video.src || video.currentSrc);
        
        // Ensure video is muted for autoplay compatibility
        video.muted = true;
        video.playsInline = true;
        
        // Try to play the video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                button.classList.add('hidden');
                console.log('Video started playing');
            }).catch(error => {
                console.error('Play failed:', error);
                
                // If play fails, just hide the button so user can try native controls
                button.classList.add('hidden');
            });
        } else {
            // Fallback for older browsers
            try {
                video.play();
                button.classList.add('hidden');
            } catch (error) {
                console.error('Play failed:', error);
                button.classList.add('hidden');
            }
        }
        
        // Event listeners for button visibility
        video.addEventListener('play', function() {
            button.classList.add('hidden');
        });
        
        video.addEventListener('pause', function() {
            button.classList.remove('hidden');
        });
        
        video.addEventListener('ended', function() {
            button.classList.remove('hidden');
        });
    } else {
        console.error('No video element found');
    }
}



// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 [Init] DOM Content Loaded - Starting initialization...');
    console.log('🚀 [Init] Current page URL:', window.location.href);
    console.log('🚀 [Init] Available elements:', {
        themeToggle: !!document.getElementById('themeToggle'),
        colorThemeToggle: !!document.getElementById('colorThemeToggle'),
        body: !!document.body,
        html: !!document.documentElement
    });
    
    // Initialize theme first to ensure proper styling
    console.log('🚀 [Init] Initializing theme toggle...');
    initThemeToggle();
    
    console.log('🚀 [Init] Initializing color theme switch...');
    initColorThemeSwitch();
    
    // Then initialize other components
    console.log('🚀 [Init] Initializing other components...');
    initNavigation();
    initTestimonials();
    initContactForm();
    initScrollAnimations();
    initLanguageSwitcher();
    initVideoPlayers();
    
    console.log('🚀 [Init] All components initialized successfully!');
    
    // Add global debugging functions for manual testing
    window.debugTheme = {
        getCurrentTheme: function() {
            const bodyTheme = document.body.getAttribute('data-theme');
            const localStorage = window.localStorage.getItem('theme');
            console.log('🔍 [Debug] Current theme state:', {
                bodyDataTheme: bodyTheme,
                localStorage: localStorage,
                iconClasses: document.querySelector('#themeToggle i')?.className
            });
            return { bodyTheme, localStorage };
        },
        
        manualToggle: function() {
            console.log('🔧 [Debug] Manual theme toggle triggered');
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            const icon = document.querySelector('#themeToggle i');
            updateThemeIcon(icon, newTheme);
            console.log('🔧 [Debug] Manual toggle complete');
        },
        
        checkElements: function() {
            const body = document.body;
            const computedStyle = window.getComputedStyle(body);
            
            console.log('🔍 [Debug] Checking theme elements:', {
                themeToggle: document.getElementById('themeToggle'),
                themeIcon: document.querySelector('#themeToggle i'),
                body: document.body,
                bodyDataTheme: body.getAttribute('data-theme'),
                htmlDataColorTheme: document.documentElement.getAttribute('data-color-theme'),
                computedBackgroundColor: computedStyle.backgroundColor,
                computedColor: computedStyle.color,
                cssVariables: {
                    bgPrimary: computedStyle.getPropertyValue('--bg-primary'),
                    textPrimary: computedStyle.getPropertyValue('--text-primary')
                }
            });
        },
        
        forceThemeUpdate: function() {
            console.log('🔧 [Debug] Forcing theme update...');
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme') || 'light';
            
            // Remove and re-add the attribute to force CSS update
            body.removeAttribute('data-theme');
            setTimeout(() => {
                body.setAttribute('data-theme', currentTheme);
                console.log('🔧 [Debug] Theme attribute refreshed:', currentTheme);
            }, 10);
        }
    };
    
    console.log('🔧 [Debug] Global debugging functions available:');
    console.log('  - debugTheme.getCurrentTheme()');
    console.log('  - debugTheme.manualToggle()');
    console.log('  - debugTheme.checkElements()');
    console.log('  - debugTheme.forceThemeUpdate()');
    
    // Add simple video click handling
    document.querySelectorAll('.video-wrapper video, .simple-video-wrapper video').forEach(video => {
        video.addEventListener('click', function(e) {
            console.log('Video clicked directly');
            
            if (video.paused) {
                video.muted = true;
                video.playsInline = true;
                
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('Video playing from direct click');
                        const playButton = video.parentNode.querySelector('.video-play-button, .big-play-button');
                        if (playButton) playButton.classList.add('hidden');
                    }).catch(error => {
                        console.error('Direct click play failed:', error);
                    });
                }
            } else {
                video.pause();
                const playButton = video.parentNode.querySelector('.video-play-button, .big-play-button');
                if (playButton) playButton.classList.remove('hidden');
            }
        });
        
        // Double-click for fullscreen
        video.addEventListener('dblclick', function() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            }
        });
    });
}); 