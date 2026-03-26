# The Code Playground

A comprehensive educational web application for comparing JavaScript and Python programming concepts through interactive side-by-side code examples.

## Features

- **14+ Programming Concepts**: From basic variables to advanced topics like closures, async programming, and destructuring
- **Side-by-Side Comparisons**: JavaScript and Python code examples with detailed explanations
- **Interactive UI**: Click through different concepts with smooth transitions
- **Comprehensive Coverage**: Variables, Functions, Objects, Data Types, Strings, Operators, Hoisting, Higher-Order Functions, Closures, Async Programming, Destructuring, and more
- **Modern Tech Stack**: React + TypeScript + Express.js + shadcn/ui

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or extract the project files**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility libraries
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage (in-memory)
├── shared/               # Shared types and schemas
└── components.json       # shadcn/ui configuration
```

## Available Scripts

- `npm run dev` - Start development server (both frontend and backend)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deploying To Vercel

This project can be deployed to Vercel as:
- A static Vite frontend from `dist/public`
- Serverless API functions from the `/api` directory

### One-time setup

1. Push the project to GitHub.
2. Make sure these files are included:
   - `vercel.json`
   - `api/concepts/index.ts`
   - `api/concepts/[id].ts`

### Deploy from the Vercel dashboard

1. Log in to Vercel.
2. Click `Add New...` -> `Project`.
3. Import your GitHub repository.
4. Keep the detected project root as the repository root.
5. Vercel will use:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
6. Click `Deploy`.

### Deploy from the CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

### Verify deployment

After deployment, open:

- `/` to verify the frontend loads
- `/api/concepts` to verify the API responds

### Notes

- No database is required for the current version of this app.
- Data is served from in-memory storage in `server/storage.ts`.
- Local development still uses `npm run dev`.

## Concepts Covered

### Beginner Level
- **Variables** - Declaration and assignment in both languages
- **Functions** - Function definitions, parameters, and returns
- **Conditionals** - If/else statements and decision making
- **Loops** - For loops, while loops, and iteration
- **Arrays/Lists** - Working with ordered collections
- **Objects/Dictionaries** - Key-value data structures

### Intermediate Level
- **Data Types** - Type systems and type checking
- **String Manipulation** - Text processing and methods
- **Operators** - Mathematical, logical, and comparison operators
- **Higher-Order Functions** - Functions that accept or return functions
- **Closures** - Lexical scope and data privacy
- **Destructuring** - Extracting values from data structures

### Advanced Level
- **Hoisting** - Variable and function declaration behavior (JavaScript)
- **Asynchronous Programming** - Promises, async/await, and concurrency

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **shadcn/ui** components built on Radix UI
- **Tailwind CSS** for styling
- **TanStack Query** for state management
- **Wouter** for routing

### Backend
- **Express.js** with TypeScript
- **In-memory storage** for concept data
- **RESTful API** design

### Development Tools
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **PostCSS** with Tailwind and Autoprefixer

## Customization

### Adding New Concepts

1. Open `server/storage.ts`
2. Add a new concept object to the `defaultConcepts` array
3. Include JavaScript and Python code examples
4. Add feature comparisons and explanations

### Modifying UI

- Components are in `client/src/components/`
- Main layout is in `client/src/pages/home.tsx`
- Styling uses Tailwind CSS classes

### API Endpoints

- `GET /api/concepts` - List all concepts
- `GET /api/concepts/:id` - Get specific concept details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for educational purposes.

## Support

If you encounter any issues:
1. Check that Node.js 18+ is installed
2. Ensure all dependencies are installed with `npm install`
3. Verify the development server is running on port 5000
4. Check browser console for any JavaScript errors

---

Built with ❤️ for developers learning JavaScript and Python
