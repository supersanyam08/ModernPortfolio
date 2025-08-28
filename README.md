# Sanyam Agarwal - Portfolio Website

A modern, dynamic portfolio website showcasing the work and skills of Sanyam Agarwal, an Electronics Engineer specializing in data analysis, product development, and finance.

![Portfolio Screenshot](https://via.placeholder.com/800x400/1a1b23/3b82f6?text=Portfolio+Website)

## 🚀 Features

### Interactive Sections
- **Hero Section**: Fullscreen gradient background with animated particle effects and auto-rotating project showcase card
- **About Section**: Personal biography with quick facts sidebar showing education, experience, and career interests
- **Projects Grid**: Responsive grid displaying featured projects with hover animations and tech stack tags
- **Timeline**: Vertical timeline showcasing educational background and professional experience
- **Skills**: Animated progress bars that fill on scroll, displaying proficiency levels
- **Contact**: Working contact form with backend API integration plus contact information and hobbies

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Animations**: Framer Motion animations for entrance effects, hover states, and scroll-triggered elements
- **Particle Background**: Custom canvas-based particle system for visual enhancement
- **Form Validation**: Client-side validation with error handling and success notifications
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and JSON-LD schema markup
- **Accessibility**: Proper ARIA labels, keyboard navigation, and semantic HTML structure

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for animations and interactions
- **Shadcn/ui** components built on Radix UI primitives
- **React Hook Form** with Zod validation for forms
- **TanStack Query** for server state management
- **Wouter** for lightweight routing
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js framework
- **TypeScript** with ES modules
- **Zod** schemas for runtime validation
- **In-memory storage** with interface for database integration
- **RESTful API** with structured error handling

### Build Tools
- **Vite** for fast development and optimized builds
- **PostCSS** with Tailwind CSS integration
- **ESBuild** for production bundling
- **TypeScript** strict mode configuration

## 📋 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # Application entry point
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite development server integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas and validation
└── README.md            # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5000`

## 🎯 Key Sections

### Hero Section
- **Name**: Sanyam Agarwal
- **Tagline**: Electronics Engineer | Data, Product & Finance Enthusiast
- **Actions**: Download CV button and smooth scroll to contact section
- **Featured Project Card**: Auto-rotating showcase of key projects with 3-second intervals

### Projects Showcase
1. **Soil & Weather Monitoring PCB** - Hardware/IoT project with Arduino and sensor integration
2. **Smart Inventory Management** - Capstone project with predictive analytics and real-time dashboard
3. **Procol SaaS Growth** - Business role focusing on user acquisition and conversion optimization

### Skills & Proficiency
- **Excel**: 85% - Advanced data analysis and visualization
- **SQL**: 80% - Database querying and data manipulation
- **Python**: 75% - Data analysis and automation scripting
- **Tableau**: 70% - Business intelligence and dashboard creation
- **HubSpot**: 65% - CRM and marketing automation

### Professional Timeline
- **2023**: Procol - SaaS Growth Intern
- **2022**: IIT Roorkee - Research Intern (PCB Development)
- **2019-2023**: Electronics Engineering Degree

## 📧 Contact Information

- **Email**: sanyam@example.com
- **LinkedIn**: [linkedin.com/in/sanyam](https://linkedin.com/in/sanyam)
- **Interests**: Football, Chess, Films, Formula 1

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version
- `npm run preview` - Preview production build

### API Endpoints
- `POST /api/contact` - Submit contact form messages

### Environment Setup
The application uses environment variables for configuration. Create a `.env` file in the root directory if needed.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure with proper heading hierarchy
- ARIA labels and descriptions for interactive elements
- Keyboard navigation support
- High contrast color scheme for readability
- Screen reader compatible

## 🚀 Performance

- Optimized images with lazy loading
- Code splitting for efficient bundle sizes
- Preloaded fonts for faster rendering
- Minimal bundle size with tree shaking

## 📄 License

© 2025 Sanyam Agarwal. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For suggestions or improvements, please reach out via the contact form or email.

---

Built with ❤️ using React, Framer Motion, and Tailwind CSS