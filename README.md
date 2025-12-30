# Vinay's Portfolio

A modern, performant portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.1 with App Router & Turbopack
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **PDF Viewer:** react-pdf
- **Charts:** Chart.js with react-chartjs-2
- **Particles:** tsparticles
- **Carousel:** Swiper.js
- **Icons:** React Icons (hi2, fa, si)

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes (contact form)
│   ├── blogs/               # Blogs page
│   ├── contact/             # Contact page
│   ├── feed/                # Activity feed page
│   ├── resume/              # Resume page
│   ├── services/            # Services page
│   ├── skills/              # Skills page with spider chart
│   ├── testimonials/        # Testimonials page
│   ├── work/                # Work/Projects page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout with providers
│   └── page.js              # Home page
│
├── components/              # Component library
│   ├── context/            # React context providers
│   │   ├── ThemeContext.js # Theme provider (8 themes)
│   │   └── index.js
│   │
│   ├── layout/             # Layout components
│   │   ├── Layout.js       # Main layout wrapper
│   │   ├── Header.js       # Navigation header
│   │   ├── Nav.js          # Navigation component
│   │   ├── FooterControls.js # Mobile footer
│   │   ├── Transition.js   # Page transitions
│   │   ├── PreLoader.js    # Initial loader
│   │   └── index.js
│   │
│   ├── ui/                 # Reusable UI components
│   │   ├── Avatar.js       # Avatar image
│   │   ├── Bulb.js         # Decorative bulb
│   │   ├── Circles.js      # Decorative circles
│   │   ├── TopLeftImg.js   # Top-left decoration
│   │   ├── Socials.js      # Social media links
│   │   ├── ResumeButtons.js # Resume download/view
│   │   ├── ThemeToggle.js  # Theme switcher panel
│   │   └── index.js
│   │
│   ├── sections/           # Page section components
│   │   ├── AboutMe.js      # About section
│   │   ├── FeaturedProjects.js # Projects showcase
│   │   ├── TestimonialSlider.js # Testimonials
│   │   ├── ServiceSlider.js # Services carousel
│   │   └── index.js
│   │
│   ├── modals/             # Modal components
│   │   ├── ContactMeModal.js # Contact form modal
│   │   ├── ResumeModal.js  # PDF resume viewer
│   │   └── index.js
│   │
│   ├── features/           # Feature components
│   │   ├── ParticlesContainer.js # Background particles
│   │   ├── SpiderChart.js  # Radar chart for skills
│   │   ├── ScrollControls.js # Scroll progress/button
│   │   ├── ContactForm.js  # Contact form with confetti
│   │   ├── WorkDetails.js  # Projects grid
│   │   └── index.js
│   │
│   └── index.js            # Component exports
│
├── data/                   # Static data files
│   ├── navigation.js       # Nav links data
│   ├── social-links.js     # Social media data
│   ├── site-config.js      # Site configuration
│   └── index.js
│
├── hooks/                  # Custom React hooks
│   ├── useMediaQuery.js    # Responsive hooks
│   └── index.js
│
└── lib/                    # Utility functions
    ├── animations.js       # Framer Motion variants
    └── utils.js            # Helper functions (cn, debounce, etc.)

public/                     # Static assets
├── *.png, *.jpg           # Images
└── Vinay_SDE.pdf          # Resume PDF
```

## 🎨 Theming

The portfolio supports 8 color themes:

- **Default** (Red accent)
- **Blue**
- **Green**
- **Purple**
- **Orange**
- **Sapphire VEIL**
- **Amber MIRAGE**
- **Obsidian ROSE**

Click the palette icon in the top-right corner to switch themes.

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd my-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev      # Start development server with Turbopack
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## ✨ Features

- **Responsive Design:** Fully responsive across all devices
- **Multi-Theme:** 8 beautiful color themes
- **Animations:** Smooth scroll animations and micro-interactions
- **Performance:** Optimized with lazy loading and code splitting
- **SEO Friendly:** Proper meta tags and semantic HTML
- **Contact Form:** Working email form with confetti celebration
- **PDF Resume:** In-browser PDF viewer for resume
- **Spider Charts:** Visual skill representation
- **Testimonials:** Swiper carousel with coverflow effect
- **Particles:** Interactive background particles

## 🎨 Customization

### Site Configuration

Update `src/data/site-config.js` with your details:

```javascript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  social: {
    github: "your-github-url",
    linkedin: "your-linkedin-url",
  },
};
```

### Theme Colors

Modify `tailwind.config.mjs` to change the color scheme.

## 📝 Environment Variables

Create a `.env` file with:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📄 License

MIT License

## 👤 Author

**Vinay** - Software Engineer Intern at Airbus India
