# Garrison Academy Kharian Cantt (GAK)

<div align="center">

![GAK Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj6k_DPxBE1Xepp3q1Qz8atQ9ICHMr6GnEg&s)

**Excellence in Education since 1975**

A modern, responsive website for Garrison Academy Kharian Cantonment - School & College System committed to nurturing disciplined, academically excellent, and morally upright citizens.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Styling](#styling)
- [Development](#development)
- [Build & Deploy](#build--deploy)
- [Contact](#contact)

---

## 🎯 About

Garrison Academy Kharian Cantt is a prestigious educational institution located in Kharian Cantonment, Punjab, Pakistan. This website serves as the digital gateway to the academy, providing comprehensive information about admissions, academic programs, campus facilities, and student achievements.

The website features a modern, user-friendly interface with:
- Detailed information about multiple campuses
- Online admission forms
- Student dashboard with gamified achievements
- Photo galleries showcasing campus life
- Academic schedules and examination details
- Scholarship and uniform information
- Parent portal access

---

## ✨ Features

### 🏫 **Core Features**
- **Responsive Design** - Mobile-first approach with seamless tablet and desktop experiences
- **Multi-Campus Support** - Information about different campus locations
- **Online Admissions** - Comprehensive admission forms for all education levels (Preschool to College)
- **Student Dashboard** - Gamified interface with achievements, leaderboards, and progress tracking
- **Photo Galleries** - Albums for Campus Life, Sports & Athletics, Academics, and Achievements
- **Academic Information** - Schedules, examination details, and activities
- **Scholarship Programs** - Detailed information about merit and need-based scholarships
- **Feedback System** - Multi-category feedback forms for continuous improvement
- **Contact & Support** - Multiple contact channels including parent portal access

### 🎨 **UI/UX Features**
- Smooth scroll animations
- Interactive navigation with active route highlighting
- Dark mode support
- Hover effects and transitions
- Modal galleries for photos
- Responsive mobile menu
- Sticky navigation header
- Loading states and form validation

---

## 🛠 Tech Stack

### **Framework & Core**
- [Next.js 16.1.6](https://nextjs.org/) - React framework with App Router
- [React 19.2.3](https://reactjs.org/) - UI library
- [TypeScript 5](https://www.typescriptlang.org/) - Type safety

### **Styling**
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [tw-animate-css 1.4.0](https://www.npmjs.com/package/tw-animate-css) - Animation utilities
- [shadcn/ui 3.8.5](https://ui.shadcn.com/) - Re-usable component library
- Custom CSS variables for theming

### **UI Components & Icons**
- [Lucide React 0.577.0](https://lucide.dev/) - Icon library
- [Radix UI 1.4.3](https://www.radix-ui.com/) - Unstyled accessible components
- [class-variance-authority 0.7.1](https://cva.style/) - Component variant management
- [clsx 2.1.1](https://github.com/lukeed/clsx) - Utility for constructing className strings
- [tailwind-merge 3.5.0](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes

### **Typography**
- [Google Fonts](https://fonts.google.com/) - Playfair Display & DM Sans

### **Development Tools**
- ESLint 9 - Code linting
- PostCSS - CSS processing
- Next.js ESLint Config - Next.js specific linting rules

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/evildevill/garrison-academy.git
   cd garrison-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
garrison-academy/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── academic-schedule/       # Academic schedule page
│   ├── activities/              # Activities page
│   ├── admission/               # Admission page
│   ├── campuses/                # Campuses page
│   ├── contact/                 # Contact page
│   ├── dashboard/               # Student dashboard page
│   ├── examination/             # Examination page
│   ├── feedback/                # Feedback page
│   ├── scholarship/             # Scholarship page
│   └── uniform/                 # Uniform page
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── separator.tsx
│   │   └── sheet.tsx
│   ├── navbar.tsx               # Navigation bar with topbar
│   ├── footer.tsx               # Footer component
│   ├── home-page.tsx            # Home page component
│   ├── about-page.tsx           # About page component
│   ├── admission-page.tsx       # Admission form component
│   ├── dashboard-page.tsx       # Dashboard component
│   ├── campuses-page.tsx        # Campuses overview
│   ├── scholarship-page.tsx     # Scholarship details
│   ├── uniform-page.tsx         # Uniform information
│   ├── feedback-page.tsx        # Feedback form
│   ├── contact-page.tsx         # Contact information
│   ├── examination-page.tsx     # Examination details
│   ├── activities-page.tsx      # Activities showcase
│   └── academic-schedule-page.tsx # Academic calendar
├── lib/                         # Utility functions
│   └── utils.ts                # Helper functions (cn, etc.)
├── public/                      # Static assets
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

---

## 🗺 Pages & Routes

### Main Pages

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Home Page | Hero section, statistics, photo albums, testimonials, CTAs |
| `/about` | About GAK | History, mission, vision, values, facilities, infrastructure |
| `/campuses` | Campus Locations | Details of multiple campus facilities and locations |
| `/admission` | Admission Portal | Online form for all levels (PG to F.Sc), document upload |
| `/scholarship` | Scholarships | Merit-based and need-based scholarship information |
| `/uniform` | Uniform Guide | Dress code for all levels with visual guides |
| `/dashboard` | Student Dashboard | Achievement system, leaderboards, progress tracking |
| `/feedback` | Feedback Form | Multi-category feedback system |
| `/contact` | Contact Us | Address, phone, email, and map integration |
| `/academic-schedule` | Academic Calendar | Term dates, holidays, examination schedules |
| `/examination` | Exam Details | Exam policies, timetables, and guidelines |
| `/activities` | Activities | Co-curricular and extracurricular programs |

---

## 🧩 Components

### Layout Components
- **Navbar** - Sticky navigation with topbar, logo, menu items, and mobile sheet
- **Footer** - Site links, contact info, social media, and copyright

### UI Components (shadcn/ui)
- **Badge** - Status and category indicators
- **Button** - Various button variants (default, outline, ghost, link)
- **Separator** - Visual dividers
- **Sheet** - Slide-out panel for mobile navigation

### Page Components
Each page has a dedicated component in the `components/` directory that handles the specific layout and functionality for that route.

### Utility Components
- **Image** - Next.js optimized images with remote pattern support
- **Link** - Client-side navigation with active state

---

## 🎨 Styling

### Design System
- **Color Palette**: Custom CSS variables defined in `globals.css`
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: DM Sans (sans-serif)
- **Spacing**: Tailwind's default spacing scale
- **Border Radius**: Configurable via CSS variables
- **Shadows**: Tailwind shadow utilities
- **Dark Mode**: Full dark mode support via CSS variables

### CSS Architecture
```css
@import "tailwindcss";           # Tailwind base
@import "tw-animate-css";        # Animation utilities
@import "shadcn/tailwind.css";   # shadcn components
```

### Theme Customization
Edit color variables in `app/globals.css` under `:root` and `.dark` selectors.

---

## 💻 Development

### Code Style
- TypeScript strict mode enabled
- ESLint for code quality
- React Server Components by default
- "use client" directive for interactive components

### Image Optimization
Remote image patterns configured in `next.config.ts`:
- Facebook CDN (fbcdn.net)
- Google Static (gstatic.com)

### Path Aliases
```typescript
"@/*" → "./*"  // Import from project root
```

### Best Practices
- Use Server Components for static content
- Use Client Components ("use client") for interactivity
- Optimize images with Next.js Image component
- Implement proper TypeScript types
- Follow component composition patterns

---

## 🏗 Build & Deploy

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Production Server

```bash
npm run start
```

Starts the production server on port 3000.

### Deployment Options

#### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/evildevill/garrison-academy)

#### Other Platforms
- **Netlify**: Supports Next.js with build plugins
- **AWS Amplify**: Full Next.js support
- **Docker**: Use Next.js standalone output mode
- **Traditional VPS**: Run with Node.js and PM2

### Environment Variables
Currently no environment variables required. For future features (database, APIs), create `.env.local`:

```env
# Example for future use
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url
```

---

## 📞 Contact

**Garrison Academy Kharian Cantt**

- **Location**: Kharian Cantonment, Punjab, Pakistan
- **Phone**: +92 (537) 530-101
- **Email**: info@garrisonacademy.edu.pk
- **Website**: [garrisonacademy.edu.pk](https://garrisonacademy.edu.pk)

### Developer

- **GitHub**: [@evildevill](https://github.com/evildevill)
- **Repository**: [garrison-academy](https://github.com/evildevill/garrison-academy)

---

## 📄 License

This project is proprietary software developed for Garrison Academy Kharian Cantt. All rights reserved.

---

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Vercel** - For Next.js and deployment platform
- **Radix UI** - For accessible component primitives
- **Lucide** - For the comprehensive icon set
- **Tailwind Labs** - For Tailwind CSS

---

<div align="center">

**Made with ❤️ for Garrison Academy Kharian Cantt**

*Excellence in Education since 1975*

</div>
