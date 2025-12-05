/**
 * App Configuration and Page Routing
 * 
 * This file serves as the main configuration module for the application.
 * It imports all page components, manages authentication state, and defines
 * the menu structure that drives application routing and navigation.
 */

// Page component imports
import Contact from './Contact.tsx';
import Home from './Home.tsx';
import About from './About.tsx';

// Authentication and UI component imports
import SignUp from '../features/auth/Signup.js';
import { useAuth } from '../features/auth/AuthContext.tsx';
import { type Item, type MenuProps } from '../components/Menu.tsx';

/**
 * Determines if a user is logged out
 * 
 * @returns {boolean} True if the user is not logged in, false otherwise
 */
const loggedOut = () => !useAuth()?.userLoggedIn;

/**
 * Menu Items Configuration
 * 
 * Defines the navigation menu structure for the application. Each menu item
 * specifies:
 * - id: Unique identifier for the menu item
 * - name: Display name shown in the UI
 * - path: Route path for navigation
 * - element: React component to render for this route
 * - show: Boolean or function that determines if the menu item is visible
 */
const menuItems: MenuProps = [
  { id: 1, name: 'Home', path: '/home', element: <Home />, show: true },
  { id: 2, name: 'About', path: '/about', element: <About />, show: true },
  {
    id: 3,
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
    show: true,
  },
  {
    id: 4,
    name: 'Signup',
    path: '/signup',
    element: SignUp,
    show: loggedOut,
  },
];

// Export configuration and components for use throughout the application
export { Home, About, Contact, SignUp, menuItems };
