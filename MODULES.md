# 模組化系統使用說明

CodeFolio 主題採用完全模組化設計，**所有設定都在 Markdown 檔案中定義**，HTML 樣板只負責渲染，不包含任何業務邏輯或預設值。

## 核心原則

✅ **設定在 Markdown** - 所有內容、樣式、行為都在 MD 檔案中配置  
✅ **HTML 純渲染** - 樣板只負責顯示，不包含 fallback 邏輯  
✅ **完全可控** - 你看到什麼，就是你在 MD 中定義的什麼  
✅ **無隱藏邏輯** - 沒有複雜的 default 值或自動推導  

## 快速開始

```yaml
---
layout: modular
title: 你的頁面標題
lang: en

modules:
  模組名稱:
    enabled: true
    # 在這裡定義所有設定...
---
```

## 可用模組

### 1. Hero 模組 (推薦)
```yaml
hero:
  enabled: true
  title: "你的名字或品牌"           # 必填
  subtitle: "你的職稱"             # 可選
  description: "簡短描述"          # 可選
  cta_text: "按鈕文字"            # 可選，需要和 cta_link 一起使用
  cta_link: "#section"           # 可選，需要和 cta_text 一起使用
  hero_image: "/path/to/image"   # 可選
```

### 2. Project 模組
```yaml
project:
  enabled: true
  title: "專案標題"                # 可選
  subtitle: "專案副標題"           # 可選
  description: "專案描述"          # 可選
  promo_video: "/path/to/video"   # 可選
  main_image: "/path/to/image"    # 可選
  demo_url: "https://demo.com"    # 可選
  github_url: "https://github.com/user/repo"  # 可選
  download_url: "https://releases.com"        # 可選
  technologies:                   # 可選
    - "React"
    - "Node.js"
  screenshots:                    # 可選
    - title: "截圖標題"
      image: "/path/to/screenshot"
```

### 3. About 模組
```yaml
about:
  enabled: true
  title: "關於標題"               # 可選
  description: "詳細描述"         # 可選
  about_image: "/path/to/image"  # 可選
  stats:                         # 可選，所有子項目都可選
    projects: "50+"
    clients: "30+"
    experience: "5+"
  skills:                        # 可選
    - name: "技能名稱"           # 每個技能的 name 必填
      icon: "fas fa-code"        # 可選
      description: "技能描述"     # 可選
```

### 4. Features 模組
```yaml
features:
  enabled: true
  title: "特色標題"              # 可選
  subtitle: "特色副標題"         # 可選
  features_list:                # 需要至少一個特色
    - title: "特色名稱"          # 每個特色的 title 必填
      icon: "fas fa-rocket"      # 可選
      description: "特色描述"     # 可選
      image: "/path/to/image"    # 可選
```

### 5. Video Demo 模組
```yaml
video_demo:
  enabled: true
  demo_video: "/path/to/video"   # 必填，沒有影片就不會顯示整個模組
  title: "影片標題"              # 可選
  description: "影片描述"        # 可選
  demo_url: "https://demo.com"   # 可選
```

### 6. Testimonials 模組
```yaml
testimonials:
  enabled: true
  title: "推薦標題"              # 可選
  testimonials_list:            # 需要至少一個推薦
    - content: "推薦內容"        # 每個推薦的 content 可選
      author: "客戶姓名"         # 可選
      position: "職位"           # 可選
      company: "公司名稱"        # 可選
      avatar: "/path/to/avatar"  # 可選
```

### 7. Contact 模組
```yaml
contact:
  enabled: true
  title: "聯絡標題"                    # 可選
  subtitle: "聯絡副標題"               # 可選
  contact_form_enabled: true          # 可選，是否顯示聯絡表單
  contact_email: "contact@example.com" # 可選
  show_social: true                   # 可選，是否顯示社群媒體連結
```

## 完整範例

### 最簡單的頁面
```yaml
---
layout: modular
title: "我的作品集"

modules:
  hero:
    enabled: true
    title: "張小明"
    description: "前端開發工程師"
---
```

### 完整的產品頁面
```yaml
---
layout: modular
title: "我的產品"

modules:
  hero:
    enabled: true
    title: "超棒的軟體"
    subtitle: "解決你的問題"
    description: "這是一個很棒的軟體"
    cta_text: "了解更多"
    cta_link: "#project"
  
  project:
    enabled: true
    title: "產品介紹"
    description: "這個軟體可以幫助你..."
    promo_video: "/assets/videos/intro.mp4"
    demo_url: "https://demo.example.com"
    technologies: ["React", "Node.js"]
  
  contact:
    enabled: true
    title: "聯絡我們"
    contact_form_enabled: true
    contact_email: "hello@example.com"
---
```

## 重要注意事項

1. **沒有預設值** - 如果你沒有在 MD 中定義某個設定，就不會顯示相關內容
2. **必需欄位** - 每個模組只有很少的必需欄位，大部分都是可選的
3. **條件顯示** - 例如 video_demo 模組必須有 `demo_video` 才會顯示
4. **靈活組合** - 你可以只啟用需要的模組，順序會按照你定義的順序
5. **完全控制** - 你在 MD 中看到什麼設定，頁面就顯示什麼內容

## 除錯建議

如果某個模組沒有顯示預期的內容：
1. 檢查 `enabled: true` 是否正確設定
2. 檢查必需欄位是否有填寫
3. 檢查 YAML 語法是否正確（縮排、冒號等）
4. 檢查檔案路徑是否正確

這個設計讓你完全控制頁面內容，沒有隱藏的邏輯或意外的預設值！ 