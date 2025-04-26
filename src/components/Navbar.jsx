import React, { useState } from 'react'; // добавлен useState
import { Link } from 'react-scroll';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // добавлено состояние

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="navbar-logo-img" />
          PaperCut Pro
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={0} 
              spy={true}
              offset={-70}
              activeClass="active"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={0}
              spy={true}
              offset={-70}
              activeClass="active"
            >
              О нас
            </Link>
          </li>
          <li>
            <Link
              to="examples"
              smooth={true}
              duration={0}
              spy={true}
              offset={-70}
              activeClass="active"
            >
              Примеры
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={0}
              spy={true}
              offset={-70}
              activeClass="active"
            >
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
