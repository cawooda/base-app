# Base App 🚀

A modern, production-ready React application starter template with Firebase authentication, featuring the latest web technologies and best practices.

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12.6-orange?logo=firebase)](https://firebase.google.com/)

## ✨ Features

- ⚛️ **React 19** - Latest React with cutting-edge features
- 🔷 **TypeScript** - Full type safety and enhanced developer experience
- ⚡ **Vite** - Lightning-fast HMR and optimized builds
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework with latest features
- 🧩 **DaisyUI** - Beautiful component library built on Tailwind
- 🧭 **React Router v7** - Client-side routing with modern API
- 🔐 **Firebase Authentication** - Complete auth system with login/signup
- 🌗 **Dark Mode** - Built-in theme system with context API
- 📝 **ESLint & Prettier** - Code quality and formatting
- 📱 **Responsive Design** - Mobile-first responsive layout

## 🏗️ Project Structure

```
circle-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Menu.tsx        # Navigation menu with mobile support
│   ├── features/           # Feature-based modules
│   │   └── auth/           # Authentication feature
│   │       ├── AuthContext.tsx   # Auth state management
│   │       ├── Login.tsx         # Login page component
│   │       ├── Signup.tsx        # Signup page component
│   │       └── auth.ts           # Firebase auth utilities
│   ├── pages/              # Route pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── index.tsx       # Centralized page exports and routing config
│   ├── ThemeContext/       # Theme management context
│   │   └── index.tsx
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── firebase.config.ts      # Firebase configuration
└── vite.config.ts          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Firebase account (for authentication)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/cawooda/base-app.git
cd base-app
```

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Email/Password authentication in Firebase Console
   - Update `src/firebase.config.ts` with your Firebase credentials

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint code analysis          |

## 🔐 Authentication System

This app includes a complete Firebase authentication system with:

### Features:

- ✅ Email/Password login
- ✅ User signup/registration
- ✅ Protected routes
- ✅ Auth state persistence
- ✅ Automatic redirects for logged-in users
- ✅ User-friendly error messages
- ✅ Loading states

### Auth Context

The `AuthContext` provides authentication state throughout the app:

```tsx
import { useAuth } from './features/auth/AuthContext';

function YourComponent() {
  const auth = useAuth();

  if (auth?.userLoggedIn) {
    // User is logged in
    console.log(auth.currentUser);
  }
}
```

### Available Routes:

- `/` or `/home` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page
- `/signup` - Signup/registration page

## 🎨 Styling

This project uses **Tailwind CSS 4** with the **Typography plugin** and **DaisyUI** for component styling.

### Dark Mode

Dark mode is implemented using React Context and persists user preference in localStorage. Toggle between themes using the `ThemeContext`:

```tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const { darkMode, setDarkMode } = useContext(ThemeContext);
setDarkMode('dark'); // or 'light'
```

## 🧭 Routing Configuration

Routes are centrally configured in `src/pages/index.tsx`. This file exports a `menuItems` array that defines both the navigation menu and routing structure.

### Adding New Routes

1. Create a page component in `src/pages/`:

```tsx
// src/pages/NewPage.tsx
export default function NewPage() {
  return <div>Your new page</div>;
}
```

2. Add to `src/pages/index.tsx`:

```tsx
import NewPage from './NewPage.tsx';

const menuItems = [
  // ... existing items
  {
    id: 5,
    name: 'New Page',
    path: '/new-page',
    element: <NewPage />,
    show: true,
  },
];

export { NewPage, menuItems };
```

3. Add route in `src/App.tsx`:

```tsx
<Route path="/new-page" element={<NewPage />} />
```

### Conditional Menu Items

Use the `show` property to conditionally display menu items:

```tsx
{
  id: 4,
  name: 'Signup',
  path: '/signup',
  element: <SignUp />,
  show: loggedOut, // Only show when user is logged out
}
```

## 🛠️ Development

### Code Quality

- **ESLint** - Configured with React, TypeScript, and Prettier rules
- **Prettier** - Automatic code formatting
- **TypeScript** - Strict type checking enabled

### Adding Components

Create new components in `src/components/`:

```tsx
// src/components/YourComponent.tsx
export default function YourComponent() {
  return <div>Your component</div>;
}
```

### Adding Features

Organize feature-specific code in `src/features/`:

```
src/features/
├── auth/           # Authentication feature
├── profile/        # User profile feature
└── dashboard/      # Dashboard feature
```

## 📦 Building for Production

```bash
npm run build
```

The optimized production build will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🔒 Security Notes

- Firebase configuration is stored in `firebase.config.ts` - ensure sensitive keys are stored as environment variables in production
- Authentication state is managed securely through Firebase Auth
- Protected routes should check `userLoggedIn` state before rendering sensitive content

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Router](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Firebase Auth Documentation](https://firebase.google.com/docs/auth)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
