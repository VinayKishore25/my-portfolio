# Vinay's Portfolio 🚀

A modern, high-performance portfolio website showcasing my journey as a Software Engineer with real-time coding statistics, interactive visualizations, and dynamic content.

## 🌐 Live Demo

**[vinaykishore25-portfolio.vercel.app](https://vinaykishore25-portfolio.vercel.app)**

## 📋 About

This portfolio is a comprehensive showcase featuring:

- **Professional Experience** - Work history at Airbus India, internships, and organizational contributions
- **Technical Skills** - Interactive spider chart visualizations and comprehensive skill breakdowns
- **Coding Journey** - Real-time statistics from 6 competitive programming platforms:
  - LeetCode (problems solved, acceptance rate, ranking, badges)
  - Codeforces (rating, rank, contest performance)
  - CodeChef (rating, stars, global/country ranking)
  - GeeksforGeeks (coding score, problems solved, institute rank, streaks)
  - HackerRank (skill badges, certifications)
  - GitHub (contributions, repositories, stars, languages)
- **Projects Portfolio** - Freelance work, personal projects, and technical interviews
- **Blog Integration** - Technical articles and learning experiences
- **Contact System** - Integrated email communication with validation

Built with cutting-edge web technologies emphasizing performance, accessibility, and exceptional user experience.

## 🛠️ Tech Stack

| Category            | Technologies                                             |
| ------------------- | -------------------------------------------------------- |
| **Framework**       | Next.js 16.1.1 (App Router, Turbopack)                   |
| **Frontend**        | React 19, Tailwind CSS                                   |
| **Animations**      | Framer Motion, GSAP                                      |
| **Data Viz**        | Chart.js, react-chartjs-2                                |
| **3D Graphics**     | Three.js, @react-three/fiber, @react-three/drei          |
| **Icons**           | React Icons (hi2, fa, si, bs)                            |
| **Particles**       | tsparticles, react-tsparticles                           |
| **Other Libraries** | Swiper.js, react-pdf, react-countup, nodemailer, cheerio |

## ✨ Key Features

### 🎨 Design & User Experience

- **8 Dynamic Color Themes**
  - Default, Blue, Green, Purple, Orange, Sapphire VEIL, Amber MIRAGE, Obsidian ROSE
  - Theme persistence with localStorage
  - Smooth transitions between themes
- **Fully Responsive Design**
  - Mobile-first approach
  - Optimized layouts for all screen sizes
  - Touch-friendly interactions

- **Smooth Animations**
  - Page transitions using Framer Motion
  - Scroll-triggered animations with GSAP
  - Micro-interactions for enhanced UX
  - Exit animations for smooth navigation

- **Interactive Particles Background**
  - Dynamic particle system using tsparticles
  - Configurable density and behavior
  - Performance-optimized rendering

### ⚡ Performance & Architecture

- **Next.js 16 App Router**
  - React Server Components
  - Streaming SSR
  - Optimized routing and navigation
  - API routes for backend functionality

- **Turbopack Build System**
  - Lightning-fast development builds
  - Hot Module Replacement (HMR)
  - Incremental compilation

- **Optimizations**
  - Lazy loading for components and images
  - Automatic code splitting
  - Image optimization with Next.js Image
  - Font optimization with @next/font

- **SEO & Accessibility**
  - Semantic HTML structure
  - Meta tags and Open Graph data
  - ARIA labels and roles
  - Keyboard navigation support

### 📊 Dynamic Content & APIs

- **Real-Time Coding Statistics**
  - Custom API routes for each platform
  - Web scraping fallbacks (GeeksforGeeks)
  - Caching strategy (5-minute cache duration)
  - Error handling with graceful fallbacks
  - Loading skeletons for better UX

- **Interactive Data Visualization**
  - Spider/Radar charts for skill comparison
  - Progress rings and difficulty bars
  - Live stat cards with animations
  - Platform-specific detail panels

- **Email Integration**
  - Contact form with Nodemailer
  - Server-side validation
  - Success animations with confetti effect
  - Rate limiting and spam protection

### 🎯 Featured Sections

- **Hero Section** - Eye-catching introduction with typing animation
- **Skills Visualization** - Interactive spider chart powered by Chart.js
- **Coding Journey Dashboard** - Comprehensive platform statistics with:
  - Quick stats bar for at-a-glance metrics
  - Selectable platform cards
  - Detailed panels with recent contests/submissions
  - Direct links to profiles
- **Work Experience** - Timeline of professional journey
- **Projects Showcase** - Filterable portfolio with detailed views
- **Blog Articles** - Dynamic blog listing with markdown support
- **Resume Modal** - In-browser PDF viewer with download option

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
pnpm install

# Start development server (with Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page with background & experience
│   ├── blogs/          # Blog listing & individual blog posts
│   ├── coding-journey/ # Coding stats dashboard
│   │   ├── _components/ # Panel components for each platform
│   │   ├── _constants/  # Platform configurations
│   │   └── _hooks/      # Custom hooks for data fetching
│   ├── contact/        # Contact form with email integration
│   ├── services/       # Services page with carousel
│   ├── skills/         # Skills with interactive spider chart
│   ├── work/           # Work experience & projects
│   │   ├── experience/ # Professional experience
│   │   ├── freelance/  # Freelance projects
│   │   └── interviews/ # Interview experiences
│   ├── api/            # API routes
│   │   ├── coding-stats/ # Coding platform data fetchers
│   │   └── send-email/   # Email sending endpoint
│   ├── layout.js       # Root layout with theme provider
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
│
├── components/          # Reusable components
│   ├── context/        # React Context providers (Theme)
│   ├── features/       # Feature components (Particles, SpiderChart, etc.)
│   ├── layout/         # Layout components (Header, Nav, Footer)
│   ├── modals/         # Modal dialogs (Resume, Contact)
│   ├── sections/       # Page sections (AboutMe, Projects, etc.)
│   └── ui/             # UI components (Avatar, Socials, ThemeToggle)
│
├── data/               # Static data files
│   ├── blogs.js        # Blog posts data
│   ├── projects.js     # Project information
│   ├── companies.js    # Work experience data
│   ├── navigation.js   # Navigation links
│   ├── social-links.js # Social media links
│   └── site-config.js  # Global site configuration
│
├── hooks/              # Custom React hooks
│   ├── useMediaQuery.js     # Responsive breakpoint hooks
│   └── useInViewAnimation.js # Scroll animation hook
│
└── lib/                # Utility functions
    ├── animations.js   # Framer Motion animation variants
    └── utils.js        # Helper functions (cn, debounce)

public/
├── textures/           # 3D textures and images
├── Vinay_SDE.pdf      # Resume PDF file
└── *.png, *.jpg       # Static images and assets
```

## 🎨 Themes

Click the palette icon (top-right) to switch between:

- Default (Red) • Blue • Green • Purple • Orange
- Sapphire VEIL • Amber MIRAGE • Obsidian ROSE

## � Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

Vercel automatically detects Next.js and configures optimal settings.

### Environment Variables Setup

Create a `.env.local` file in the root directory:

```env
# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## 🛠️ Customization

### Update Personal Information

Edit the data files in `src/data/`:

- **`site-config.js`** - Name, title, description, social links
- **`social-links.js`** - Social media URLs
- **`navigation.js`** - Navigation menu items
- **`projects.js`** - Project portfolio items
- **`companies.js`** - Work experience
- **`blogs.js`** - Blog posts

### Change Theme Colors

Modify `tailwind.config.mjs` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: "#f13024", // Your accent color
        hover: "#d62818",
      },
    },
  },
}
```

### Add/Remove Pages

1. Create a new folder in `src/app/`
2. Add a `page.js` file
3. Update `src/data/navigation.js` to add the route to navigation

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vinay Kishore** - Software Engineer

- 🔗 [LinkedIn](https://linkedin.com/in/vinaykishore2512)
- 🐙 [GitHub](https://github.com/VinayKishore25)
- 📧 vinaykishore2512@gmail.com
- 🌐 [Portfolio](https://vinaykishore25-portfolio.vercel.app)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

<p align="center">Built with ❤️ using Next.js | © 2026 Vinay Kishore</p>
