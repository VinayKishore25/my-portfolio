# Vinay's Portfolio

A modern, performant portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## 🌐 Live Demo

**[vinaykishore25-portfolio.vercel.app](https://vinaykishore25-portfolio.vercel.app)**

## � About

This portfolio showcases my journey as a Software Engineer, featuring:

- **Professional Experience** - Work history at Airbus India and other organizations
- **Technical Skills** - Interactive spider charts and comprehensive skill breakdowns
- **Coding Journey** - Real-time stats from competitive programming platforms (LeetCode, Codeforces, CodeChef, HackerRank) and GitHub contributions
- **Projects** - Freelance work, personal projects, and interview experiences
- **Blog Posts** - Technical articles and learning experiences
- **Contact Integration** - Direct communication through an integrated contact form

Built with modern web technologies emphasizing performance, accessibility, and user experience.

## �🚀 Tech Stack

| Category       | Technologies                           |
| -------------- | -------------------------------------- |
| **Framework**  | Next.js 16.1.1 (App Router, Turbopack) |
| **Frontend**   | React 19, Tailwind CSS                 |
| **Animations** | Framer Motion, GSAP                    |
| **Charts**     | Chart.js, react-chartjs-2              |
| **Icons**      | React Icons (hi2, fa, si)              |
| **Other**      | tsparticles, Swiper.js, react-pdf      |

## ✨ Features

### 🎨 Design & UI

- **8 Color Themes** - Dynamic theme switching with persistent storage (Default, Blue, Green, Purple, Orange, Sapphire VEIL, Amber MIRAGE, Obsidian ROSE)
- **Fully Responsive** - Mobile-first design that works seamlessly on all devices
- **Smooth Animations** - Page transitions, scroll animations, and micro-interactions using Framer Motion & GSAP
- **Interactive Particles** - Dynamic background particle system using tsparticles
- **Custom Components** - Avatar, decorative elements (bulb, circles), and reusable UI components

### ⚡ Performance & Technical

- **Next.js 16 App Router** - Server components, streaming, and optimized routing
- **Turbopack** - Lightning-fast development builds
- **Lazy Loading** - Components and images load on demand
- **Code Splitting** - Automatic code splitting for optimal bundle sizes
- **SEO Optimized** - Meta tags, structured data, and semantic HTML

### 📊 Dynamic Features

- **Coding Journey Dashboard** - Real-time statistics from:
  - LeetCode (problems solved, acceptance rate, ranking)
  - Codeforces (rating, rank, contest participation)
  - CodeChef (rating, stars, global ranking)
  - HackerRank (badges, certifications)
  - GitHub (contributions, repositories, stars)
- **PDF Resume Viewer** - In-browser PDF rendering with download option
- **Contact Form** - Email integration with validation and success confetti animation
- **Spider Charts** - Interactive radar charts for skill visualization using Chart.js
- **Project Showcases** - Dynamic project cards with filtering and detailed views

## 📄 Pages Overview

| Page               | Route             | Description                                                |
| ------------------ | ----------------- | ---------------------------------------------------------- |
| **Home**           | `/`               | Hero section with introduction and featured projects       |
| **About**          | `/about`          | Personal background, journey, and professional summary     |
| **Skills**         | `/skills`         | Interactive spider chart visualization of technical skills |
| **Work**           | `/work`           | Experience, freelance projects, and interviews             |
| **Coding Journey** | `/coding-journey` | Live statistics from coding platforms with detailed panels |
| **Blogs**          | `/blogs`          | Technical articles and blog posts                          |
| **Services**       | `/services`       | Service offerings with slider carousel                     |
| **Contact**        | `/contact`        | Contact form with email integration                        |

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
