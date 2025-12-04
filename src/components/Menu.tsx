import { useState } from 'react';
import { Link } from 'react-router-dom';

type Item = {
  id: number;
  name: string;
  path: string;
};

type MenuProps = {
  items: Item[];
};

function Menu({ items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen)
    return (
      <nav className="flex flex-col test w-full gap-4">
        <button
          onClick={toggleMenu}
          hidden={!isOpen}
          aria-label="Close Menu"
          className="text-3xl"
        >
          ✕
        </button>
        {items.map((item) => (
          <Link
            key={item.id}
            onClick={toggleMenu}
            className="btn btn-ghost"
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    );
  else if (items.length === 0)
    return (
      <nav className="flex flex-col test w-full gap-4">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`${item.path}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  else {
    return (
      <button
        onClick={toggleMenu}
        aria-label="Open Menu"
        className="flex flex-col test w-full gap-4 text-3xl"
      >
        ☰
      </button>
    );
  }
}
export default Menu;
