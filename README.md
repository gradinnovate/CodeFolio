# CodeFolio - Modern Jekyll Theme for Software Portfolios

A beautiful, modern Jekyll theme designed specifically for showcasing software products and developer portfolios. Features a clean design, dark mode support, multi-language capabilities, and responsive layout.

## ✨ Features

- **Modern Design**: Clean, professional layout with beautiful typography
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Built-in dark/light theme toggle with user preference memory
- **Multi-language**: Support for English, Traditional Chinese, and Simplified Chinese
- **Single Page**: Complete portfolio in one scrollable page
- **Product Showcase**: Dedicated sections for featuring your software projects
- **Contact Form**: Integrated contact form with validation
- **Testimonials**: Client testimonials with sliding carousel
- **Skills Display**: Visual skills and expertise showcase
- **SEO Optimized**: Built-in SEO features and meta tags
- **Fast Loading**: Optimized for performance with lazy loading
- **Animation**: Smooth scroll animations and transitions

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Jekyll 4.0 or higher
- Bundler

### Installation

1. Clone this repository:
```bash
git clone https://github.com/your-username/codefolio.git
cd codefolio
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser and visit `http://localhost:4000`

## 📁 Project Structure

```
codefolio/
├── _config.yml              # Main configuration
├── _layouts/
│   └── default.html         # Main layout template
├── _data/
│   ├── languages/           # Multi-language support
│   │   ├── en.yml          # English translations
│   │   ├── zh-TW.yml       # Traditional Chinese
│   │   └── zh-CN.yml       # Simplified Chinese
│   ├── skills.yml          # Skills data
│   └── stats.yml           # Statistics data
├── _products/              # Product showcase items
├── _features/              # Feature highlights
├── _testimonials/          # Client testimonials
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Image assets
└── index.md                # Main page content
```

## ⚙️ Configuration

### Basic Settings

Edit `_config.yml` to customize your site:

```yaml
# Site settings
title: Your Portfolio Name
email: your-email@example.com
description: Your portfolio description

# Social media links
social:
  github: your-github-username
  twitter: your-twitter-handle
  linkedin: your-linkedin-username
  email: your-email@example.com

# Theme settings
theme_settings:
  header_text: "Hi! I'm Your Name"
  subheader_text: "Your tagline here"
  cta_text: "Let's work together"
  hero_image: "/assets/images/your-avatar.png"
```

### Adding Products

Create new files in the `_products/` directory:

```yaml
---
title: "Your Product Name"
category: "Web Development"
image: "/assets/images/products/your-product.jpg"
demo_url: "https://your-demo-url.com"
github_url: "https://github.com/your-username/repo"
description: "Brief description of your product"
technologies:
  - "Technology 1"
  - "Technology 2"
order: 1
---
```

### Adding Features

Create new files in the `_features/` directory:

```yaml
---
title: "Feature Name"
icon: "fas fa-icon-name"
description: "Feature description"
order: 1
---
```

### Adding Testimonials

Create new files in the `_testimonials/` directory:

```yaml
---
author: "Client Name"
position: "Job Title"
company: "Company Name"
avatar: "/assets/images/testimonials/client.jpg"
content: "Testimonial content here"
order: 1
---
```

## 🌍 Multi-language Support

The theme supports multiple languages through YAML data files in `_data/languages/`:

- `en.yml` - English (default)
- `zh-TW.yml` - Traditional Chinese
- `zh-CN.yml` - Simplified Chinese

To add a new language:

1. Create a new YAML file in `_data/languages/`
2. Add the language code to the `languages` array in `_config.yml`
3. Translate all the text strings following the existing structure

## 🎨 Customization

### Colors

The theme uses CSS custom properties for easy color customization. Edit the `:root` section in `assets/css/main.css`:

```css
:root {
  --primary-color: #4F46E5;
  --secondary-color: #FBBF24;
  --accent-color: #06B6D4;
  /* ... more colors */
}
```

### Typography

The theme uses Inter font by default. You can change it by updating the `--font-primary` variable:

```css
:root {
  --font-primary: 'Your Font', sans-serif;
}
```

### Sections

You can modify or add sections by editing `index.md`. Each section uses Liquid templating to display dynamic content.

## 📱 Responsive Design

The theme is built mobile-first and includes:

- Flexible grid layouts
- Responsive images
- Mobile-optimized navigation
- Touch-friendly interactions
- Optimized performance on all devices

## 🔧 Development

### Local Development

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve --livereload

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

### Adding JavaScript Functionality

All JavaScript is contained in `assets/js/main.js`. The file includes:

- Navigation handling
- Dark mode toggle
- Testimonials slider
- Contact form validation
- Scroll animations
- Performance optimizations

## 🚀 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `jekyll build`
3. Set publish directory: `_site`
4. Deploy

### Custom Server

Build the site and upload the `_site` directory:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Check the documentation
- Contact via email

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ for the developer community
