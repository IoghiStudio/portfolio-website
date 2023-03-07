import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

type Props = {
  closeMenu: () => void;
}

export const Nav: React.FC<Props> = ({ closeMenu }) => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            className='nav__link'
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        
        <li className="nav__item">
          <Link
            className='nav__link'
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>

        <li className="nav__item">
          <Link
              className='nav__link'
              to="/portofolio"
              onClick={closeMenu}
            >
            Portofolio
          </Link>
        </li>

        <li className="nav__item">
          <Link
              className='nav__link'
              to="/blog"
              onClick={closeMenu}
            >
            Blog
          </Link>
        </li>

        <li className="nav__item">
          <Link
              className='nav__link'
              to="/contact"
              onClick={closeMenu}
            >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}