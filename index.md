---
layout: default
title: Home
lang: en
---

<!-- Hero Section -->
<section id="home" class="hero-section">
    <div class="hero-background">
        <div class="hero-pattern"></div>
    </div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <p class="hero-subtitle">{{ site.data.languages[page.lang].hero.subtitle | default: "Artist • Designer • Thinker" }}</p>
                <h1 class="hero-title">
                    {{ site.data.languages[page.lang].hero.title | default: site.theme_settings.header_text }}
                    <img src="{{ site.theme_settings.hero_image | default: '/assets/images/hero-avatar.png' }}" alt="Avatar" class="hero-avatar">
                </h1>
                <h2 class="hero-description">
                    {{ site.data.languages[page.lang].hero.description | default: site.theme_settings.subheader_text }}
                </h2>
                <a href="#project" class="cta-button">
                    {{ site.data.languages[page.lang].hero.cta | default: site.theme_settings.cta_text }}
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Project Overview Section -->
<section id="project" class="project-section">
    <div class="container">
        <!-- Project Promo Video -->
        {% if site.project.promo_video %}
        <div class="video-container">
            <video class="video-player" controls poster="{{ site.project.main_image }}">
                <source src="{{ site.project.promo_video }}" type="video/mp4">
                {{ site.data.languages[page.lang].project.video_not_supported | default: "Your browser does not support the video tag." }}
            </video>
        </div>
        {% endif %}
        
        <div class="project-content">
            <div class="project-info">
                <div class="section-header">
                    <h2>{{ site.data.languages[page.lang].project.title | default: "Project Overview" }}</h2>
                    <p>{{ site.data.languages[page.lang].project.subtitle | default: "A comprehensive solution designed to solve real-world problems" }}</p>
                </div>
                
                <div class="project-description">
                    <p>{{ site.data.languages[page.lang].project.description | default: "This software project represents months of careful planning, development, and testing. Built with modern technologies and user-centered design principles, it delivers exceptional performance and user experience." }}</p>
                </div>
                
                <div class="project-actions">
                    <a href="{{ site.project.demo_url }}" class="btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        {{ site.data.languages[page.lang].project.demo | default: "Live Demo" }}
                    </a>
                    <a href="{{ site.project.github_url }}" class="btn-secondary" target="_blank">
                        <i class="fab fa-github"></i>
                        {{ site.data.languages[page.lang].project.github | default: "View Source" }}
                    </a>
                    <a href="{{ site.project.download_url }}" class="btn-download">
                        <i class="fas fa-download"></i>
                        {{ site.data.languages[page.lang].project.download | default: "Download" }}
                    </a>
                </div>
                
                <div class="project-tech">
                    <h3>{{ site.data.languages[page.lang].project.tech_title | default: "Technologies Used" }}</h3>
                    <div class="tech-stack">
                        {% for tech in site.project.technologies %}
                        <span class="tech-tag">{{ tech }}</span>
                        {% endfor %}
                    </div>
                </div>
            </div>
            
            <div class="project-showcase">
                <div class="showcase-main">
                    <img src="{{ site.project.main_image }}" alt="{{ site.project.title }}" class="project-main-image">
                </div>
                <div class="showcase-gallery">
                    {% for screenshot in site.project.screenshots %}
                    <div class="gallery-item">
                        <img src="{{ screenshot.image }}" alt="{{ screenshot.title }}" class="gallery-image">
                        <p class="gallery-caption">{{ screenshot.title }}</p>
                    </div>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="about-section">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2>{{ site.data.languages[page.lang].about.title | default: "About Me" }}</h2>
                <p class="about-description">
                    {{ site.data.languages[page.lang].about.description | default: "I'm a passionate developer who creates innovative software solutions that help businesses grow and succeed. With years of experience in modern web technologies, I focus on building user-friendly applications that solve real-world problems." }}
                </p>
                
                <div class="skills-grid">
                    {% for skill in site.data.skills %}
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="{{ skill.icon }}"></i>
                        </div>
                        <div class="skill-info">
                            <h4>{{ skill.name }}</h4>
                            <p>{{ skill.description }}</p>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
            
            <div class="about-image">
                <img src="/assets/images/about-image.jpg" alt="About" class="about-img">
                <div class="about-stats">
                    <div class="stat-item">
                        <span class="stat-number">{{ site.data.stats.projects | default: "50+" }}</span>
                        <span class="stat-label">{{ site.data.languages[page.lang].stats.projects | default: "Projects" }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">{{ site.data.stats.clients | default: "30+" }}</span>
                        <span class="stat-label">{{ site.data.languages[page.lang].stats.clients | default: "Clients" }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">{{ site.data.stats.experience | default: "5+" }}</span>
                        <span class="stat-label">{{ site.data.languages[page.lang].stats.experience | default: "Years" }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="features-section">
    <div class="container">
        <div class="section-header">
            <h2>{{ site.data.languages[page.lang].features.title | default: "Why Choose Our Solutions" }}</h2>
            <p>{{ site.data.languages[page.lang].features.subtitle | default: "We deliver exceptional results through cutting-edge technology" }}</p>
        </div>
        
        <div class="features-grid">
            {% for feature in site.data.features %}
            <div class="feature-card">
                {% if feature.image %}
                <img src="{{ feature.image }}" alt="{{ feature.title }}" class="feature-image">
                {% endif %}
                <div class="feature-content">
                    <div class="feature-icon">
                        <i class="{{ feature.icon }}"></i>
                    </div>
                    <h3 class="feature-title">{{ feature.title }}</h3>
                    <p class="feature-description">{{ feature.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Video Demo Section -->
{% if site.project.demo_video %}
<section id="demo-video" class="video-section">
    <div class="container">
        <div class="video-grid">
            <div class="video-info">
                <h3>{{ site.data.languages[page.lang].video.demo_title | default: "See It In Action" }}</h3>
                <p>{{ site.data.languages[page.lang].video.demo_description | default: "Watch a comprehensive walkthrough of our software's key features and capabilities. See how it can transform your workflow and boost productivity." }}</p>
                <a href="{{ site.project.demo_url }}" class="btn-primary" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    {{ site.data.languages[page.lang].project.demo | default: "Try Live Demo" }}
                </a>
            </div>
            <div class="video-demo">
                <video class="video-player" controls poster="{{ site.project.main_image }}">
                    <source src="{{ site.project.demo_video }}" type="video/mp4">
                    {{ site.data.languages[page.lang].project.video_not_supported | default: "Your browser does not support the video tag." }}
                </video>
            </div>
        </div>
    </div>
</section>
{% endif %}

<!-- Testimonials Section -->
<section id="testimonials" class="testimonials-section">
    <div class="container">
        <div class="section-header">
            <h2>{{ site.data.languages[page.lang].testimonials.title | default: "What Clients Say" }}</h2>
        </div>
        
        <div class="testimonials-slider">
            <div class="testimonials-container">
                {% for testimonial in site.testimonials %}
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text">"{{ testimonial.content }}"</p>
                        <div class="testimonial-author">
                            <img src="{{ testimonial.avatar }}" alt="{{ testimonial.author }}" class="author-avatar">
                            <div class="author-info">
                                <h4 class="author-name">{{ testimonial.author }}</h4>
                                <p class="author-position">{{ testimonial.position }}</p>
                                <p class="author-company">{{ testimonial.company }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
            
            <div class="testimonials-navigation">
                <button class="nav-btn prev-btn" id="prevBtn">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="nav-btn next-btn" id="nextBtn">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact-section">
    <div class="container">
        <div class="contact-content">
            <div class="contact-info">
                <h2>{{ site.data.languages[page.lang].contact.title | default: "Let's Work Together" }}</h2>
                <p class="contact-description">
                    {{ site.data.languages[page.lang].contact.description | default: "Ready to bring your ideas to life? Let's discuss your project and create something amazing together." }}
                </p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="method-info">
                            <h4>{{ site.data.languages[page.lang].contact.email_label | default: "Email" }}</h4>
                            <a href="mailto:{{ site.social.email }}">{{ site.social.email }}</a>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div class="method-info">
                            <h4>{{ site.data.languages[page.lang].contact.linkedin_label | default: "LinkedIn" }}</h4>
                            <a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank">{{ site.social.linkedin }}</a>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div class="method-info">
                            <h4>{{ site.data.languages[page.lang].contact.github_label | default: "GitHub" }}</h4>
                            <a href="https://github.com/{{ site.social.github }}" target="_blank">{{ site.social.github }}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <form class="form" id="contact-form">
                    <div class="form-group">
                        <label for="name">{{ site.data.languages[page.lang].contact.form.name | default: "Name" }}</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">{{ site.data.languages[page.lang].contact.form.email | default: "Email" }}</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">{{ site.data.languages[page.lang].contact.form.subject | default: "Subject" }}</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">{{ site.data.languages[page.lang].contact.form.message | default: "Message" }}</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">
                        <span class="btn-text">{{ site.data.languages[page.lang].contact.form.submit | default: "Send Message" }}</span>
                        <span class="btn-loading">
                            <i class="fas fa-spinner fa-spin"></i>
                            {{ site.data.languages[page.lang].contact.form.sending | default: "Sending..." }}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section> 