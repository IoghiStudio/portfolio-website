import React from 'react';
import { Nav } from '../Nav';
import cn from 'classnames';

import './Header.scss';

type Props = {
  handleMenuOpener: () => void;
  isOpen: boolean;
}

export const Header: React.FC<Props> = ({ handleMenuOpener, isOpen }) => {
  return (
    <div className="header">
      <div>Nicu</div>
      <div className='icon'>
        <div
          className={cn(
            {
              "icon__menu": true,
              "icon__menu--cross": isOpen,
            }
          )}
          onClick={() => {
            handleMenuOpener();
          }}
        >
        </div>
      </div>
    </div>
  );
}