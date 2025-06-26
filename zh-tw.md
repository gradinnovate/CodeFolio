---
layout: default
title: 首頁
lang: zh-TW
permalink: /zh-tw/
---

<!-- Hero Section -->
<section id="home" class="hero-section">
    <div class="hero-background">
        <div class="hero-pattern"></div>
    </div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <p class="hero-subtitle">{{ site.data.languages[page.lang].hero.subtitle | default: "藝術家 • 設計師 • 思想家" }}</p>
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
                {{ site.data.languages[page.lang].project.video_not_supported | default: "您的瀏覽器不支援影片播放。" }}
            </video>
        </div>
        {% endif %}
        
        <div class="project-content">
            <div class="project-info">
                <div class="section-header">
                    <h2>{{ site.data.languages[page.lang].project.title | default: "專案概覽" }}</h2>
                    <p>{{ site.data.languages[page.lang].project.subtitle | default: "設計來解決實際問題的綜合解決方案" }}</p>
                </div>
                
                <div class="project-description">
                    <p>{{ site.data.languages[page.lang].project.description | default: "這個軟體專案代表了數月的精心規劃、開發和測試。採用現代技術和以使用者為中心的設計原則，提供卓越的效能和使用者體驗。" }}</p>
                </div>
                
                <div class="project-actions">
                    <a href="{{ site.project.demo_url }}" class="btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        {{ site.data.languages[page.lang].project.demo | default: "即時演示" }}
                    </a>
                    <a href="{{ site.project.github_url }}" class="btn-secondary" target="_blank">
                        <i class="fab fa-github"></i>
                        {{ site.data.languages[page.lang].project.github | default: "查看原始碼" }}
                    </a>
                    <a href="{{ site.project.download_url }}" class="btn-download">
                        <i class="fas fa-download"></i>
                        {{ site.data.languages[page.lang].project.download | default: "下載" }}
                    </a>
                </div>
                
                <div class="project-tech">
                    <h3>{{ site.data.languages[page.lang].project.tech_title | default: "使用技術" }}</h3>
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
                <h2>{{ site.data.languages[page.lang].about.title | default: "關於我" }}</h2>
                <p class="about-description">
                    {{ site.data.languages[page.lang].about.description | default: "我是一位充滿熱忱的開發者，創造創新的軟體解決方案來幫助企業成長和成功。憑藉多年現代網路技術經驗，我專注於建構解決實際問題的使用者友善應用程式。" }}
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
                        <span class="stat-label">{{ site.data.languages[page.lang].stats.projects | default: "專案" }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">{{ site.data.stats.clients | default: "30+" }}</span>
                        <span class="stat-label">{{ site.data.languages[page.lang].stats.clients | default: "客戶" }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">{{ site.data.stats.experience | default: "5+" }}</span>
                        <span class="stat-label">{{ site.data.languages[page.lang].stats.experience | default: "年經驗" }}</span>
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
            <h2>{{ site.data.languages[page.lang].features.title | default: "為什麼選擇我們的解決方案" }}</h2>
            <p>{{ site.data.languages[page.lang].features.subtitle | default: "我們透過尖端技術提供卓越成果" }}</p>
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
                <h3>{{ site.data.languages[page.lang].video.demo_title | default: "實際操作展示" }}</h3>
                <p>{{ site.data.languages[page.lang].video.demo_description | default: "觀看我們軟體主要功能和能力的全面演示。瞭解它如何改變您的工作流程並提升生產力。" }}</p>
                <a href="{{ site.project.demo_url }}" class="btn-primary" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    {{ site.data.languages[page.lang].project.demo | default: "即時演示" }}
                </a>
            </div>
            <div class="video-demo">
                <video class="video-player" controls poster="{{ site.project.main_image }}">
                    <source src="{{ site.project.demo_video }}" type="video/mp4">
                    {{ site.data.languages[page.lang].project.video_not_supported | default: "您的瀏覽器不支援影片播放。" }}
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
            <h2>{{ site.data.languages[page.lang].testimonials.title | default: "客戶評價" }}</h2>
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
                <h2>{{ site.data.languages[page.lang].contact.title | default: "讓我們一起合作" }}</h2>
                <p class="contact-description">
                    {{ site.data.languages[page.lang].contact.description | default: "準備好將您的想法變為現實了嗎？讓我們討論您的專案，一起創造令人驚艷的作品。" }}
                </p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="method-info">
                            <h4>{{ site.data.languages[page.lang].contact.email_label | default: "電子郵件" }}</h4>
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
                        <label for="name">{{ site.data.languages[page.lang].contact.form.name | default: "姓名" }}</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">{{ site.data.languages[page.lang].contact.form.email | default: "電子郵件" }}</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">{{ site.data.languages[page.lang].contact.form.subject | default: "主題" }}</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">{{ site.data.languages[page.lang].contact.form.message | default: "訊息" }}</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">
                        <span class="btn-text">{{ site.data.languages[page.lang].contact.form.submit | default: "發送訊息" }}</span>
                        <span class="btn-loading">
                            <i class="fas fa-spinner fa-spin"></i>
                            {{ site.data.languages[page.lang].contact.form.sending | default: "發送中..." }}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section> 