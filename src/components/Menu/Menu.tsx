import React from 'react';
import { Nav } from '../Nav';
import cn from 'classnames';

import './Menu.scss';
import { SpinCube } from '../SpinCube';

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
}

export const Menu: React.FC<Props> = ({ isOpen, closeMenu }) => {
  return (
    <div className={cn(
      "menu",
      {
        "menu--open": isOpen,
      }
    )}>
      <Nav closeMenu={closeMenu}/>

      <SpinCube />
    </div>
  );
}