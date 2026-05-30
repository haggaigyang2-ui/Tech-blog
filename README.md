# Engineering Calculator Website

A modern, professional engineering calculator website built with HTML, CSS, and JavaScript. Perfect for students, engineers, and builders who need precision computing tools.

## 🎯 Features

### Core Functionality
- **Basic Calculator** - Complete arithmetic operations (+, −, ×, ÷, %)
- **Advanced Functions** - Square root (√), Square (x²), Reciprocal (1/x)
- **Memory Functions** - Store and recall calculations
- **Keyboard Support** - Full keyboard input support
  - Numbers: 0-9
  - Operators: +, −, ×, ÷, %
  - Enter to calculate
  - Backspace to delete
  - Escape to clear

### User Interface
- **Navigation Bar** - Sticky navigation with logo and smooth scroll links
- **Hero Section** - Eye-catching landing area with call-to-action
- **Calculator Section** - Full-featured calculator interface
- **Features Section** - 4 calculator types with descriptions:
  - Basic Calculator
  - Area Calculator
  - Unit Converter
  - Force Calculator
- **About Section** - Information about the website and its purpose
- **Contact Section** - Contact form with validation
- **Responsive Design** - Mobile-first approach, works on all devices

### Design
- **Professional Theme** - Dark blue (#0f1f3c), gray, and white color scheme
- **Modern Effects** - Gradients, glass-morphism, smooth animations
- **Accessibility** - High contrast, readable fonts, mobile-optimized
- **Performance** - Optimized for fast loading and smooth interactions

## 📁 File Structure

```
engineering-calculator/
├── index.html      # Main HTML file with structure
├── styles.css      # Complete styling and responsive design
├── script.js       # Calculator logic and interactivity
└── README.md       # This file
```

## 🚀 How to Use

### Online
1. Visit your GitHub repository: `haggaigyang2-ui/Tech-blog`
2. Access the files or deploy using GitHub Pages

### Local
1. Clone the repository or download the files
2. Open `index.html` in your web browser
3. Start using the calculator!

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| 0-9 | Enter numbers |
| +, −, ×, ÷, % | Operators |
| Enter | Calculate |
| Backspace | Delete last digit |
| Escape | Clear display |

## 💻 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Dark Blue | #0f1f3c | Background, main theme |
| Secondary Dark Blue | #1a2f4a | Secondary backgrounds |
| Accent Blue | #2563eb | Buttons, highlights |
| Light Gray | #e5e7eb | Light elements |
| Medium Gray | #9ca3af | Text secondary |
| Dark Gray | #374151 | Text primary |
| White | #ffffff | Text, backgrounds |

## ✨ JavaScript Features

### Calculator Functions
- `appendToDisplay()` - Add values to display
- `clearDisplay()` - Clear all values
- `deleteLast()` - Remove last character
- `calculate()` - Evaluate the expression
- `toggleSign()` - Change sign (±)
- `squareRoot()` - Calculate square root
- `square()` - Calculate square
- `reciprocal()` - Calculate 1/x

### Interactive Features
- Keyboard event listeners
- Mobile menu toggle
- Smooth scroll navigation
- Form validation
- Scroll animations
- Error handling

## 📱 Responsive Breakpoints

| Device | Width | Adjustments |
|--------|-------|-------------|
| Mobile | < 480px | Stack layout, reduced fonts |
| Tablet | 480px - 768px | Single column, optimized spacing |
| Desktop | > 768px | Multi-column, full features |

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-dark-blue: #0f1f3c;
    --accent-blue: #2563eb;
    /* ... other colors ... */
}
```

### Add Features
1. Add HTML elements to `index.html`
2. Style with CSS in `styles.css`
3. Add JavaScript functions to `script.js`

### Deploy
- **GitHub Pages** - Enable in repository settings
- **Netlify** - Connect GitHub repo for auto-deployment
- **Vercel** - Similar to Netlify
- **Self-host** - Upload files to your server

## 🐛 Known Limitations

- Uses JavaScript `eval()` for calculations (safe in this controlled environment)
- Contact form is client-side only (no backend integration)
- No calculation history
- Memory functions are session-based (cleared on page refresh)

## 🎓 Learning Value

This project demonstrates:
- HTML5 semantic markup
- Modern CSS3 (Flexbox, Grid, Gradients, Animations)
- JavaScript ES6+ features
- Responsive web design
- UI/UX best practices
- Event handling and DOM manipulation
- Form validation
- Local storage (optional theme)

## 📝 License

Free to use and modify for personal and educational purposes.

## 👨‍💻 Developer

Created by: haggaigyang2-ui  
Repository: Tech-blog  
First website project: 2024

---

**Enjoy your Engineering Calculator! Happy calculating! 🧮✨**
