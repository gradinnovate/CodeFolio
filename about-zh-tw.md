---
layout: modular
title: 關於我們
lang: zh-TW

# 介紹頁面模組配置 - 繁體中文版本
modules:
  # Hero 模組 - 介紹頁面的開頭
  hero:
    enabled: true
    title: "你好，我是 Alex Chen"
    subtitle: "全端開發者 & UI/UX 設計師"
    description: "致力於創造美觀、實用且以使用者為中心的數位體驗"
    hero_image: "/assets/images/hero-avatar.png"
    cta_text: "查看我的作品"
    cta_link: "#about"
  
  # About 模組 - 詳細介紹
  about:
    enabled: true
    title: "關於我"
    description: "我是一名充滿熱情的全端開發者，擁有超過 5 年的創新網頁應用程式和數位解決方案開發經驗。我專精於現代 JavaScript 框架、響應式設計和使用者體驗優化。當我不在寫程式時，你會發現我在探索新技術、貢獻開源專案，或指導初級開發者。"
    about_image: "/assets/images/about-image.jpg"
    stats:
      projects: "100+"
      clients: "50+"
      experience: "5+"
    skills:
      - name: "前端開發"
        icon: "fas fa-code"
        description: "React、Vue.js、TypeScript 和現代 CSS 框架"
      - name: "後端開發"
        icon: "fas fa-server"
        description: "Node.js、Python、Express 和 RESTful API 設計"
      - name: "UI/UX 設計"
        icon: "fas fa-paint-brush"
        description: "Figma、Adobe XD、使用者研究和原型設計"
      - name: "資料庫管理"
        icon: "fas fa-database"
        description: "MongoDB、PostgreSQL、Redis 和資料庫優化"
      - name: "DevOps 與雲端"
        icon: "fas fa-cloud"
        description: "AWS、Docker、CI/CD 管道和基礎設施自動化"
      - name: "行動應用開發"
        icon: "fas fa-mobile-alt"
        description: "React Native、Flutter 和漸進式網頁應用程式"
  
  # Features 模組 - 工作方式/服務
  features:
    enabled: true
    title: "我的工作方式"
    subtitle: "創造卓越數位體驗的方法"
    features_list:
      - title: "以使用者為中心的設計"
        icon: "fas fa-users"
        description: "每個專案都從理解使用者需求開始，創造直觀、無障礙的介面來解決真實問題。"
      - title: "乾淨、可維護的程式碼"
        icon: "fas fa-code"
        description: "我寫乾淨、有文件的程式碼，遵循最佳實踐和行業標準，確保長期可維護性。"
      - title: "協作流程"
        icon: "fas fa-handshake"
        description: "我相信透明的溝通和定期反饋循環，確保專案保持在軌道上並超越期望。"
      - title: "持續學習"
        icon: "fas fa-graduation-cap"
        description: "我關注最新技術和趨勢，不斷擴展技能集以提供尖端解決方案。"
      - title: "注重效能"
        icon: "fas fa-tachometer-alt"
        description: "我優化速度、SEO 和使用者體驗，確保應用程式在所有設備上都有出色表現。"
      - title: "測試與品質"
        icon: "fas fa-check-circle"
        description: "全面的測試策略，包括單元測試、整合測試和使用者接受測試。"
  
  # Testimonials 模組 - 客戶推薦
  testimonials:
    enabled: true
    title: "客戶評價"
    testimonials_list:
      - content: "Alex 提供了一個出色的網頁應用程式，超越了我們的期望。他對細節的關注和技術專長讓整個過程順利且愉快。"
        author: "莎拉·威廉斯"
        position: "產品經理"
        company: "科技創新有限公司"
        avatar: "/assets/images/testimonials/sarah.jpg"
      - content: "與 Alex 合作對我們的新創公司來說是個轉捩點。他不僅建立了美觀的應用程式，還對 UX 和商業策略提供了寶貴見解。"
        author: "邁克爾·羅德里格斯"
        position: "執行長"
        company: "創新實驗室"
        avatar: "/assets/images/testimonials/michael.jpg"
      - content: "Alex 的全端專業知識幫助我們從零開始重建平台。新系統更快、更可靠，我們的用戶都很喜歡。"
        author: "艾蜜莉·陳"
        position: "技術長"
        company: "資料流解決方案"
        avatar: "/assets/images/testimonials/emily.jpg"
      - content: "專業、響應迅速且極具才華。Alex 將我們複雜的需求轉化為優雅、使用者友好的解決方案。"
        author: "大衛·朴"
        position: "創辦人"
        company: "綠色科技創投"
        avatar: "/assets/images/testimonials/david.jpg"
  
  # Contact 模組 - 聯絡方式
  contact:
    enabled: true
    title: "讓我們一起合作"
    subtitle: "準備將您的想法變成現實？我很樂意聽到您的專案，並討論如何幫助您實現目標。"
    contact_form_enabled: true
    contact_email: "hello@alexchen.dev"
    show_social: true

# SEO 設定
description: "Alex Chen - 全端開發者 & UI/UX 設計師。致力於創造美觀、實用且以使用者為中心的數位體驗。"
keywords: "全端開發者, UI/UX 設計師, 網頁開發, JavaScript, React, Node.js"
---

<!-- 介紹頁面內容完全由上面的模組配置生成 --> 