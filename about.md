---
layout: modular
title: About
lang: en

# 介紹頁面模組配置
modules:
  # Hero 模組 - 介紹頁面的開頭
  hero:
    enabled: true
    title: "Hi, I'm Alex Chen"
    subtitle: "Full-Stack Developer & UI/UX Designer"
    description: "Passionate about creating beautiful, functional, and user-centered digital experiences"
    hero_image: "/assets/images/hero-avatar.png"
    cta_text: "View My Work"
    cta_link: "#about"
  
  # About 模組 - 詳細介紹
  about:
    enabled: true
    title: "About Me"
    description: "I'm a passionate full-stack developer with over 5 years of experience creating innovative web applications and digital solutions. I specialize in modern JavaScript frameworks, responsive design, and user experience optimization. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers."
    about_image: "/assets/images/about-image.jpg"
    stats:
      projects: "100+"
      clients: "50+"
      experience: "5+"
    skills:
      - name: "Frontend Development"
        icon: "fas fa-code"
        description: "React, Vue.js, TypeScript, and modern CSS frameworks"
      - name: "Backend Development"
        icon: "fas fa-server"
        description: "Node.js, Python, Express, and RESTful API design"
      - name: "UI/UX Design"
        icon: "fas fa-paint-brush"
        description: "Figma, Adobe XD, user research, and prototyping"
      - name: "Database Management"
        icon: "fas fa-database"
        description: "MongoDB, PostgreSQL, Redis, and database optimization"
      - name: "DevOps & Cloud"
        icon: "fas fa-cloud"
        description: "AWS, Docker, CI/CD pipelines, and infrastructure automation"
      - name: "Mobile Development"
        icon: "fas fa-mobile-alt"
        description: "React Native, Flutter, and progressive web apps"
  
  # Features 模組 - 工作方式/服務
  features:
    enabled: true
    title: "How I Work"
    subtitle: "My approach to creating exceptional digital experiences"
    features_list:
      - title: "User-Centered Design"
        icon: "fas fa-users"
        description: "Every project starts with understanding user needs and creating intuitive, accessible interfaces that solve real problems."
      - title: "Clean, Maintainable Code"
        icon: "fas fa-code"
        description: "I write clean, well-documented code following best practices and industry standards for long-term maintainability."
      - title: "Collaborative Process"
        icon: "fas fa-handshake"
        description: "I believe in transparent communication and regular feedback loops to ensure projects stay on track and exceed expectations."
      - title: "Continuous Learning"
        icon: "fas fa-graduation-cap"
        description: "I stay current with the latest technologies and trends, constantly expanding my skillset to deliver cutting-edge solutions."
      - title: "Performance Focused"
        icon: "fas fa-tachometer-alt"
        description: "I optimize for speed, SEO, and user experience, ensuring applications perform excellently across all devices."
      - title: "Testing & Quality"
        icon: "fas fa-check-circle"
        description: "Comprehensive testing strategies including unit tests, integration tests, and user acceptance testing."
  
  # Testimonials 模組 - 客戶推薦
  testimonials:
    enabled: true
    title: "What Clients Say"
    testimonials_list:
      - content: "Alex delivered an outstanding web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and enjoyable."
        author: "Sarah Williams"
        position: "Product Manager"
        company: "TechStart Inc."
        avatar: "/assets/images/testimonials/sarah.jpg"
      - content: "Working with Alex was a game-changer for our startup. He not only built a beautiful app but also provided valuable insights on UX and business strategy."
        author: "Michael Rodriguez"
        position: "CEO"
        company: "InnovateLab"
        avatar: "/assets/images/testimonials/michael.jpg"
      - content: "Alex's full-stack expertise helped us rebuild our platform from the ground up. The new system is faster, more reliable, and our users love it."
        author: "Emily Chen"
        position: "CTO"
        company: "DataFlow Solutions"
        avatar: "/assets/images/testimonials/emily.jpg"
      - content: "Professional, responsive, and incredibly talented. Alex turned our complex requirements into an elegant, user-friendly solution."
        author: "David Park"
        position: "Founder"
        company: "GreenTech Ventures"
        avatar: "/assets/images/testimonials/david.jpg"
  
  # Contact 模組 - 聯絡方式
  contact:
    enabled: true
    title: "Let's Work Together"
    subtitle: "Ready to bring your ideas to life? I'd love to hear about your project and discuss how I can help you achieve your goals."
    contact_form_enabled: true
    contact_email: "hello@alexchen.dev"
    show_social: true

# SEO 設定
description: "Alex Chen - Full-Stack Developer & UI/UX Designer. Passionate about creating beautiful, functional, and user-centered digital experiences."
keywords: "full-stack developer, UI/UX designer, web development, JavaScript, React, Node.js"
---

<!-- 介紹頁面內容完全由上面的模組配置生成 --> 