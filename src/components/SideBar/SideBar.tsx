import React from 'react';
import { Nav } from '../Nav';
import './SideBar.scss';

type Props = {
  closeMenu: () => void;
}

export const SideBar: React.FC<Props> = ({ closeMenu }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo--container">
        <div className="sidebar__logo"></div>
        <p className="sidebar__logo--text">Nicu</p>
      </div>

      <Nav closeMenu={closeMenu}/>
    </div>
  );
};