import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

export const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className='nav__link' to="/">
            Home !
          </Link>
        </li>
        
        <li className="nav__item">
          <Link className='nav__link' to="/about">
            About !
          </Link>
        </li>

        <li className="nav__item">
          <Link className='nav__link' to="/portofolio">
            Portofolio !
          </Link>
        </li>

        <li className="nav__item">
          <Link className='nav__link' to="/blog">
            Blog !
          </Link>
        </li>

        <li className="nav__item">
          <Link className='nav__link' to="/contact">
            Contact !
          </Link>
        </li>
      </ul>
    </div>
  );
}