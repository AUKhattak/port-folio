# 🎨 Modern Personal Portfolio Website

A stunning, minimalist personal portfolio built with **React**, **TypeScript**, and **Material UI v5** - inspired by the design elegance of Apple, Vercel, and Stripe.

## ✨ Features

- **Modern UI/UX Design**: Clean, minimalist aesthetic with premium feel
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth transitions and hover effects
- **Dark Background Elements**: Subtle decorative gradients for visual interest
- **Material UI Components**: Professionally designed theme with custom components
- **Performance Optimized**: Fast loading and smooth scrolling
- **TypeScript Support**: Fully typed for code reliability

## 📋 Sections Included

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Professional bio with personal values
3. **Skills** - Categorized technical skills and proficiency levels
4. **Projects** - Featured work showcasing full-stack capabilities
5. **Contact** - Multi-channel contact options with social links
6. **Header** - Sticky navigation with mobile menu
7. **Footer** - Quick links and copyright information

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
```bash
cd portfolia_khattak
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

## 🎯 Customization Guide

### Update Personal Information

Edit these files to add your information:

#### 1. **Hero Section** ([src/components/Hero.tsx](src/components/Hero.tsx))
```typescript
// Update tagline and headline
"Welcome to my portfolio"
"Crafting Digital Experiences"

// Update introduction text
"I'm a passionate developer and designer creating beautiful, functional..."
```

#### 2. **About Section** ([src/components/About.tsx](src/components/About.tsx))
```typescript
// Update biographical information
// Update quick facts (years, projects, satisfaction)
// Update values/strengths
```

#### 3. **Contact Section** ([src/components/Contact.tsx](src/components/Contact.tsx))
```typescript
const socialLinks = [
  {
    href: 'mailto:your.email@example.com', // Your email
  },
  {
    href: 'https://linkedin.com/in/yourprofile', // LinkedIn
  },
  {
    href: 'https://github.com/yourprofile', // GitHub
  },
  {
    href: 'https://twitter.com/yourhandle', // Twitter
  }
];
```

#### 4. **Update Location & Status** ([src/components/Contact.tsx](src/components/Contact.tsx))
```typescript
// Change "Your City, Country" to your location
// Update employment status
```

### Customize Colors & Theme

Edit [src/theme.ts](src/theme.ts) to modify colors:

```typescript
palette: {
  primary: {
    main: '#0F172A',      // Deep slate - change for primary color
    light: '#1E293B',
    dark: '#020617',
  },
  secondary: {
    main: '#06B6D4',      // Cyan - change for accent color
    light: '#22D3EE',
    dark: '#0891B2',
  },
}
```

### Update Projects

Edit [src/components/Projects.tsx](src/components/Projects.tsx):

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'TypeScript', 'etc'],
    github: 'https://github.com/yourrepo',
    live: 'https://project-url.com',
  },
  // Add more projects...
];
```

### Update Skills

Edit [src/components/Skills.tsx](src/components/Skills.tsx):

```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', ...], // Add your skills
  },
  // Update other categories...
];
```

## 📁 Project Structure

```
portfolia_khattak/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation with mobile menu
│   │   ├── Hero.tsx          # Landing section
│   │   ├── About.tsx         # About me section
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Projects.tsx      # Portfolio projects
│   │   ├── Contact.tsx       # Contact section
│   │   └── Footer.tsx        # Footer with links
│   ├── App.tsx               # Main app component
│   ├── theme.ts              # MUI theme configuration
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
└── README.md                 # This file
```

## 🎨 Design Highlights

### Color Palette
- **Primary**: Deep Slate (#0F172A)
- **Secondary**: Cyan (#06B6D4)
- **Neutral**: Light backgrounds (#F8FAFC, #FFFFFF)
- **Text**: Dark slate (#0F172A) and muted gray (#64748B)

### Typography
- **Headlines**: Bold, large font sizes with smooth gradients
- **Body**: Clean, readable 1rem base size with 1.6 line height
- **Buttons**: Rounded corners (0.5rem) with subtle shadows

### Spacing
- Generous padding and margins for breathing room
- Consistent 8px base spacing unit
- Responsive adjustments for mobile devices

### Animations
- Fade-in effects on section load
- Smooth hover transitions on buttons and cards
- Floating scroll indicator in hero section
- Transform effects on interactive elements

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Material UI v5** - Component library
- **Emotion** - CSS-in-JS styling
- **Vite** - Fast build tool
- **React-scroll** - Smooth scrolling

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: Full experience with all features
- **Tablet**: Adjusted layouts and spacing (md breakpoint: 960px)
- **Mobile**: Optimized navigation and stacked layouts (xs, sm breakpoints)

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
Configure your `vite.config.ts` with `base: '/repo-name/'` and run:
```bash
npm run build
# Then push dist folder to gh-pages branch
```

## 🔍 SEO & Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Meta descriptions in HTML

## 💡 Tips for Best Results

1. **Add Real Images**: Replace placeholder images in projects section
2. **Update Meta Tags**: Edit `index.html` with your information
3. **Optimize Content**: Keep descriptions concise and impactful
4. **Use Real Links**: Update all href attributes with real links
5. **Test Responsiveness**: Use Chrome DevTools to test all breakpoints
6. **Performance**: Run Lighthouse audits and optimize images

## 📄 License

This project is free to use for personal portfolios.

## 🤝 Support

For issues or questions, check Material UI documentation:
- [Material UI Docs](https://mui.com/)
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)

---

**Built with ❤️ using React and Material UI**
