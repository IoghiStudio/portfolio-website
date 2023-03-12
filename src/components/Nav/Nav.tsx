import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import cn from 'classnames';

import './Nav.scss';

type Props = {
  closeMenu: () => void;
}

export const Nav: React.FC<Props> = ({ closeMenu }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': selectedPage === 1,
              }
            )}
            to="/"
            onClick={() => {
              closeMenu();
              setSelectedPage(1);
            }}
          >
            Home
          </Link>
        </li>
        
        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': selectedPage === 2,
              }
            )}
            to="/about"
            onClick={() => {
              closeMenu();
              setSelectedPage(2);
            }}
          >
            About
          </Link>
        </li>

        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': selectedPage === 3,
              }
            )}
              to="/portofolio"
              onClick={() => {
                closeMenu();
                setSelectedPage(3);
              }}
            >
            Portofolio
          </Link>
        </li>

        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': selectedPage === 4,
              }
            )}
              to="/blog"
              onClick={() => {
                closeMenu();
                setSelectedPage(4);
              }}
            >
            Blog
          </Link>
        </li>

        <li className="nav__item">
          <Link
            className={cn(
              'nav__link',
              {
                'nav__link--active': selectedPage === 5,
              }
            )}
              to="/contact"
              onClick={() => {
                closeMenu();
                setSelectedPage(5);
              }}
            >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}