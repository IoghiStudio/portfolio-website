import React from 'react';
import { Nav } from '../Nav';
import cn from 'classnames';

import './Menu.scss';

type Props = {
  isOpen: boolean;
}

export const Menu: React.FC<Props> = ({ isOpen }) => {
  return (
    <div className={cn(
      "menu",
      {
        "menu--open": isOpen,
      }
    )}>
      <Nav />
    </div>
  );
}