import Contact from './Contact.tsx';
import Home from './Home.tsx';
import About from './About.tsx';

//App CConfiguration
const menuItems = [
  { id: 1, name: 'Home', path: '/home', element: Home },
  { id: 2, name: 'About', path: '/about', element: About },
  { id: 3, name: 'Contact', path: '/contact', element: Contact },
];

export { Home, About, Contact, menuItems };
