import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './Nav.scss';

type Props = {
  closeMenu: () => void;
}

export const Nav: React.FC<Props> = ({ closeMenu }) => {
  // const [selectedPage, setSelectedPage] = useState(1);
  const location = useLocation();
  console.log(location);
  const currentPage = location.pathname;

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': currentPage === '/',
              }
            )}
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        
        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': currentPage === '/about',
              }
            )}
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>

        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': currentPage === '/portfolio',
              }
            )}
              to="/portfolio"
              onClick={closeMenu}
            >
            Portofolio
          </Link>
        </li>

        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': currentPage === '/blog',
              }
            )}
              to="/blog"
              onClick={closeMenu}
            >
            Blog
          </Link>
        </li>

        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': currentPage === '/contact',
              }
            )}
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