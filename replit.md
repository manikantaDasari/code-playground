# Overview

This is a comprehensive full-stack web application called "The Code Playground" that serves as an educational platform for comparing JavaScript and Python programming concepts. The application features a modern React frontend with shadcn/ui components and an Express.js backend, designed to help users learn programming concepts through detailed side-by-side code examples, explanations, and feature comparisons.

## Recent Updates (August 17, 2025)
- ✅ Fixed button functionality by adding Font Awesome icons
- ✅ Added comprehensive debugging and error tracking  
- ✅ Expanded concept library to include advanced JavaScript topics:
  - Objects and Dictionaries
  - Data Types and Type Systems
  - String Manipulation
  - Operators (Mathematical and Logical)
  - Hoisting and Variable Declaration Behavior
  - Higher Order Functions
  - Closures and Lexical Scope
  - Asynchronous Programming (Promises/Async-Await)
  - Destructuring and Unpacking
- ✅ All buttons are now fully functional with proper concept switching
- ✅ Side-by-side code comparisons working correctly
- ✅ Detailed explanations and feature comparisons for each concept

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Code Display**: Custom CodeBlock component with syntax highlighting and copy-to-clipboard functionality

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for concept management
- **Data Storage**: In-memory storage with interface-based design allowing for future database integration
- **Development**: Hot module replacement via Vite integration in development mode

## Database Schema Design
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Schema Location**: Shared schema definitions in `/shared/schema.ts` using Zod for validation
- **Migration Strategy**: Drizzle Kit for database migrations with PostgreSQL dialect

## Core Data Models
- **Concept**: Programming concepts with title, description, difficulty level, code examples for both JavaScript and Python, and comparison points
- **CodeExample**: Language-specific code samples with syntax highlighting support
- **Validation**: Zod schemas for runtime type checking and API validation

## Authentication & Authorization
- **Session Management**: PostgreSQL session store using connect-pg-simple middleware
- **Security**: CORS configuration and express middleware for request parsing and security

## Development Environment
- **Build System**: Vite with React plugin and TypeScript support
- **Path Aliases**: Configured import aliases for clean module resolution (@, @shared, @assets)
- **Hot Reload**: Development server with HMR and error overlay for debugging
- **Type Safety**: Strict TypeScript configuration with comprehensive type checking

## Code Organization
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Component Library**: Comprehensive UI component system with consistent styling
- **Shared Types**: Common type definitions and schemas shared between frontend and backend
- **Utility Functions**: Centralized utility functions for styling and common operations

# External Dependencies

## Database & ORM
- **Neon Database**: Serverless PostgreSQL database platform
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **Drizzle Kit**: Database migration and schema management tool

## UI & Styling
- **Radix UI**: Headless UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Development Tools
- **Vite**: Fast build tool with HMR support
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TypeScript**: Static type checking for JavaScript

## Data Fetching & State
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form validation and management
- **Zod**: Schema validation and type inference

## Replit Integration
- **Replit Vite Plugins**: Development environment integration with runtime error handling and cartographer for enhanced debugging