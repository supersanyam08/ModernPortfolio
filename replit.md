# Portfolio Website Project

## Overview

This is a modern, dynamic portfolio website built for Sanyam Agarwal, an Electronics Engineer specializing in data analysis, product development, and finance. The application features a React frontend with Tailwind CSS styling and Framer Motion animations, backed by an Express.js server. The site showcases professional experience, projects, skills, and includes a contact form for potential opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with a dark theme configuration and custom CSS variables for consistent theming
- **UI Components**: Radix UI components wrapped with Shadcn/ui for accessible, customizable components
- **Animations**: Framer Motion for smooth entrance animations, scroll-triggered animations, and interactive effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API with structured error handling and request logging middleware
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for runtime type checking and validation

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and runtime error overlay for enhanced developer experience
- **Production**: Optimized builds with code splitting and asset optimization
- **TypeScript**: Strict mode configuration with path mapping for clean imports

### Database Schema
The application uses Drizzle ORM with PostgreSQL schema definition for contact form submissions:
- **Table**: `contact_submissions` with fields for id, name, email, message, and timestamp
- **Validation**: Integrated with Zod for runtime validation matching database schema
- **Future Ready**: Schema configured for easy database integration when needed

### SEO and Performance
- **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags for social sharing
- **Schema Markup**: JSON-LD structured data for search engine optimization
- **Performance**: Font preloading, lazy loading strategies, and optimized asset delivery
- **Accessibility**: Semantic HTML structure with proper ARIA labels and keyboard navigation

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant management for component styling

### Animation and Interaction
- **Framer Motion**: Production-ready motion library for React applications
- **Particles**: Custom particle background system for visual enhancement

### Development Tools
- **Vite**: Next-generation frontend tooling for fast development
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **TypeScript**: Static type checking for enhanced code quality

### Database and Validation
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL for cloud deployment
- **Zod**: TypeScript-first schema validation library

### Form and Data Management
- **React Hook Form**: Performant forms with minimal re-renders
- **TanStack Query**: Powerful data synchronization for React applications
- **Date-fns**: Modern JavaScript date utility library

### Development Environment
- **Replit Integration**: Custom plugins for Replit development environment
- **TSX**: TypeScript execution for Node.js development
- **Runtime Error Overlay**: Enhanced error reporting during development