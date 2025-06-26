# 顏色主題配置指南

## 概述

顏色主題選擇器按鈕的顯示由 `_config.yml` 中的設定控制。開發時可以顯示選擇器進行測試，正式發布時隱藏選擇器並使用配置的主題。

## 可用的顏色主題

- `default` - 預設主題（藍紫色漸層）
- `ocean` - 海洋主題（藍色漸層）
- `emerald` - 翡翠主題（綠色漸層）
- `sunset` - 日落主題（橙黃色漸層）
- `rose` - 玫瑰主題（粉紅色漸層）
- `cyberpunk` - 賽博朋克主題（紫色漸層）

## 配置方法

在 `_config.yml` 中設定主題和選擇器顯示：

```yaml
# _config.yml
color_theme: "ocean"  # 設定網站主題
show_color_theme_switcher: true  # 是否顯示主題選擇器按鈕

# 其他配置...
title: "CodeFolio"
description: "Modern Developer Portfolio"
```

## 預設值

如果沒有在 `_config.yml` 中設定 `color_theme`，系統會自動使用 `default` 主題。

## 主題選擇器控制

### 顯示選擇器（開發時）
```yaml
# _config.yml
show_color_theme_switcher: true
```
- 顯示顏色主題選擇器按鈕
- 可以即時切換主題進行測試
- 適合開發階段使用

### 隱藏選擇器（發布時）
```yaml
# _config.yml
show_color_theme_switcher: false
```
- 隱藏顏色主題選擇器按鈕
- 自動應用配置的主題
- 適合正式發布使用

## 實際配置範例

### 開發階段設定（顯示選擇器）
```yaml
# _config.yml
title: CodeFolio
color_theme: "ocean"
show_color_theme_switcher: true  # 顯示選擇器進行測試
# ... 其他配置
```

### 正式發布設定（隱藏選擇器）
```yaml
# _config.yml
title: CodeFolio
color_theme: "emerald"
show_color_theme_switcher: false  # 隱藏選擇器
# ... 其他配置
```

### 使用預設主題
```yaml
# _config.yml
title: CodeFolio
color_theme: "default"
show_color_theme_switcher: false
# ... 其他配置
```

## 注意事項

1. **主題名稱區分大小寫** - 請使用小寫
2. **無效主題名稱** - 會自動回退到 `default` 主題
3. **選擇器控制** - 使用 `show_color_theme_switcher` 控制按鈕顯示/隱藏
4. **開發測試** - 設定 `show_color_theme_switcher: true` 來測試不同主題效果
5. **部署前確認** - 確保設定正確的主題名稱並將 `show_color_theme_switcher` 設為 `false`
6. **重啟伺服器** - 修改 `_config.yml` 後需要重啟 Jekyll 伺服器才會生效

## 自定義主題

如需添加新的顏色主題，請在 `assets/css/main.css` 中添加對應的 CSS 變數定義。 