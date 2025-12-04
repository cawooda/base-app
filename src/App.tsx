import { ThemeProvider } from './ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { menuItems } from './pages';
import AuthWatcher from './features/auth/AuthWatcher';

export default function App() {
  return (
    <ThemeProvider>
      <AuthWatcher />
      <BrowserRouter>
        <header className="p-4 border-b mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <Menu items={menuItems} />
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
