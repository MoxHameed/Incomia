# Incomia - Salary Transparency Platform

## Overview

Incomia is a comprehensive salary transparency platform designed to help professionals discover their market value and find transparent job opportunities. The platform combines a React-based frontend with an Express.js backend, featuring a modern design system built with shadcn/ui components and Tailwind CSS. Users can explore verified salary data, browse transparent job listings, share career stories, and access educational resources for career development and salary negotiation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built as a single-page application using React with TypeScript, leveraging Vite for development and build tooling. The application uses wouter for client-side routing and TanStack Query for server state management. The UI is constructed with shadcn/ui components providing consistent design patterns and accessibility features built on Radix UI primitives.

The styling approach combines Tailwind CSS with CSS custom properties for theming, implementing a custom design system with defined color palettes (dark green, fresh green, gold accent) and typography scales using Montserrat, Inter, and Roboto Mono fonts. The architecture supports responsive design with mobile-first principles.

### Backend Architecture
The server follows a REST API pattern using Express.js with TypeScript. The application implements a modular route structure separating concerns between route definitions and business logic. Currently using in-memory storage with a well-defined storage interface that can be easily swapped for database implementations.

The API provides endpoints for salaries, jobs, and testimonials with full CRUD operations. Error handling is centralized through Express middleware, and request/response logging is implemented for debugging and monitoring.

### Data Layer
The data layer is designed with Drizzle ORM for type-safe database operations and schema management. Database schemas are defined for PostgreSQL with tables for salaries, jobs, and testimonials, including proper relationships and constraints. The schema includes validation using Zod for runtime type checking and API request validation.

The storage layer uses an interface-based approach allowing for easy testing and future database migrations. Sample data initialization provides realistic content for development and demonstration purposes.

### Component Architecture
The component structure follows atomic design principles with reusable UI components, feature-specific components, and page-level components. The application implements a consistent design system with themed components supporting the salary transparency use case.

Key component categories include:
- UI components (buttons, inputs, cards) from shadcn/ui
- Feature components (salary cards, job listings, testimonials)
- Section components (hero, stats, features)
- Layout components (navigation, footer)

### State Management
Client state is managed through React's built-in state management with hooks, while server state utilizes TanStack Query for caching, synchronization, and background updates. The query client is configured with appropriate defaults for the application's data fetching patterns.

### Build and Development
The build process uses Vite for the frontend with esbuild for the backend, providing fast development iteration and optimized production builds. The application supports both development and production environments with appropriate configuration for each.

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component library providing accessible, unstyled UI primitives for complex components like dialogs, dropdowns, and navigation menus
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with custom design system implementation
- **shadcn/ui**: Pre-built component library built on Radix UI with consistent styling and accessibility features

### Data and API
- **Drizzle ORM**: Type-safe PostgreSQL ORM for database operations and schema management
- **Neon Database**: Serverless PostgreSQL database service for production data storage
- **TanStack Query**: Server state management library for API data fetching, caching, and synchronization
- **Zod**: Runtime type validation for API requests and database schema validation

### Development and Build Tools
- **Vite**: Fast development server and build tool for the React frontend
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundler for backend code compilation
- **Wouter**: Lightweight client-side routing library for single-page application navigation

### Fonts and Assets
- **Google Fonts**: Montserrat for headings, Inter for body text, and Roboto Mono for code/data display
- **Lucide React**: Modern icon library providing consistent iconography throughout the application

The application is designed to be deployment-ready on Replit with appropriate configuration for the platform's environment and development workflow.