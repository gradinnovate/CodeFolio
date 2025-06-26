# 聯絡表單設定指南 (Formspree)

## 📧 為什麼選擇 Formspree？

Formspree 是 GitHub Pages 用戶的最佳選擇，因為：

- ✅ **完全兼容 GitHub Pages** - 純靜態網站解決方案
- ✅ **免費方案充足** - 每月 50 次表單提交
- ✅ **自動防垃圾郵件** - 內建 honeypot 和其他保護機制
- ✅ **無需後端** - 直接在前端處理
- ✅ **郵件通知** - 自動發送表單內容到您的信箱

## 🛠️ 設定步驟

### 1. 註冊 Formspree 帳號

1. 前往 [Formspree.io](https://formspree.io)
2. 點擊 "Get Started"
3. 註冊免費帳號

### 2. 創建新表單

1. 登入後點擊 "New Form"
2. 輸入表單名稱（例如：Portfolio Contact Form）
3. 輸入您的郵箱地址（用來接收訊息）
4. 點擊 "Create Form"

### 3. 獲取表單 ID

創建表單後，您會看到類似這樣的 URL：
```
https://formspree.io/f/xzbwpklr
```

其中 `xzbwpklr` 就是您的表單 ID。

### 4. 配置 _config.yml

將您的表單 endpoint URL 填入 `_config.yml`：

```yaml
# Contact form settings (Formspree)
formspree:
  enabled: true  # 啟用 Formspree 聯絡表單
  endpoint: "https://formspree.io/f/xzbwpklr"  # 替換為您的實際 endpoint URL
```

### 5. 測試表單

1. 重啟 Jekyll 伺服器
2. 前往聯絡頁面
3. 填寫並提交表單
4. 第一次提交會要求驗證郵箱
5. 驗證後，表單就可以正常工作了

## 📋 表單功能

### 已包含的功能

- **姓名** - 發送者姓名
- **郵箱** - 發送者郵箱（用於回覆）
- **主題** - 訊息主題
- **內容** - 訊息內容
- **防垃圾郵件** - Honeypot 隱藏欄位
- **提交狀態** - 載入動畫和成功/錯誤提示

### 自動處理

- ✅ 表單驗證
- ✅ 垃圾郵件過濾
- ✅ 郵件發送
- ✅ 錯誤處理
- ✅ 成功確認

## 🎨 自訂選項

### 1. 修改表單欄位

在 `_includes/modules/contact.html` 中修改：

```html
<!-- 添加新欄位 -->
<div class="form-group">
    <label for="phone">Phone (Optional)</label>
    <input type="tel" id="phone" name="phone">
</div>
```

### 2. 自訂確認頁面

在 Formspree 控制台中可以設定：
- 自訂成功頁面 URL
- 自訂郵件模板
- 自動回覆設定

### 3. 進階設定

```html
<!-- 隱藏欄位（不會顯示給用戶） -->
<input type="hidden" name="_subject" value="New Portfolio Contact">
<input type="hidden" name="_cc" value="backup@example.com">

<!-- 自訂重定向 -->
<input type="hidden" name="_next" value="https://yourdomain.com/thanks">
```

## 🚀 部署到 GitHub Pages

1. 將代碼推送到 GitHub
2. 在倉庫設定中啟用 GitHub Pages
3. 表單會自動在您的網站上運作

## 📊 監控和分析

在 Formspree 控制台中您可以：

- 📈 查看提交統計
- 📧 管理收到的訊息
- 🔧 調整設定
- 💾 匯出資料

## 💡 注意事項

1. **免費限制** - 每月 50 次提交（對個人作品集已足夠）
2. **首次驗證** - 第一次使用需要驗證郵箱
3. **垃圾郵件** - Formspree 會自動過濾大部分垃圾郵件
4. **備份** - 重要訊息建議定期從 Formspree 控制台匯出

## 🆘 故障排除

### 表單不工作？

1. 檢查 `_config.yml` 中的 `formspree.endpoint`
2. 確認已重啟 Jekyll 伺服器
3. 檢查瀏覽器控制台是否有錯誤
4. 確認 Formspree 表單已驗證

### 沒收到郵件？

1. 檢查垃圾郵件資料夾
2. 確認 Formspree 帳號中的郵箱地址正確
3. 在 Formspree 控制台查看提交記錄

## 🔄 其他選擇

如果需要更多功能，也可以考慮：

1. **EmailJS** - 純前端解決方案，更多自訂選項
2. **Netlify Forms** - 如果遷移到 Netlify 託管
3. **自建 API** - 如果需要完全控制 