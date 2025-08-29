# Overview

This is a full-stack business website for Surya Electrical & Hardware, a Delhi-based electrical retail and service provider. The application serves as a digital storefront showcasing products, services, and enabling customer contact through forms. It features a modern React frontend with TypeScript, a Node.js/Express backend, and is designed for both retail and wholesale customers seeking electrical components, appliances, and repair services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **Styling**: Tailwind CSS with CSS variables for theming and design system

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for running TypeScript directly in development
- **API Design**: RESTful API pattern with JSON responses
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle ORM with TypeScript-first schema definitions
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Database Provider**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Architecture**: Uses in-memory storage with basic user schema defined but not actively used
- **Future Ready**: User schema exists in database design for potential authentication features

## API Structure
- **Contact Endpoints**: 
  - `POST /api/contact` - Submit contact requests with validation
  - `GET /api/contact` - Retrieve contact requests (admin functionality)
- **Request Validation**: Zod schemas for runtime type checking and validation
- **Response Format**: Consistent JSON structure with success/error indicators

## Development and Build Process
- **Monorepo Structure**: Shared schemas between client and server via `/shared` directory
- **Build Pipeline**: Vite for frontend bundling, ESBuild for server bundling
- **Development Server**: Vite dev server with HMR proxy setup for API requests
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)

## UI/UX Design System
- **Component Library**: Comprehensive shadcn/ui component system
- **Design Tokens**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation
- **Visual Hierarchy**: Professional business design with primary blue (#3b82f6) brand colors

## Business Logic
- **Contact Management**: Customer inquiry capture with service type categorization
- **Product Showcase**: Static product categories (appliances, electrical components, lighting)
- **Service Display**: Repair and installation service information
- **Business Information**: Contact details, location, and business hours presentation

# External Dependencies

## Database and Infrastructure
- **Neon Database**: PostgreSQL database hosting service
- **Drizzle ORM**: Database toolkit and ORM for TypeScript
- **Connect PG Simple**: PostgreSQL session store (configured but not actively used)

## UI and Styling
- **Radix UI**: Unstyled, accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Feather icons library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library
- **TanStack Query**: Data fetching and caching library for React

## Communication Features
- **WhatsApp Integration**: Direct messaging link for customer communication
- **Phone Integration**: Click-to-call functionality for immediate contact
- **Form Validation**: Client and server-side validation for contact forms

## Image and Media
- **Unsplash**: External image service for product and service photography
- **Pixabay**: Additional image resources for gallery and service sections
- **Google Fonts**: Typography via CDN for consistent brand appearance