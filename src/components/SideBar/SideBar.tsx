import React from 'react';
import { Nav } from '../Nav';
import './SideBar.scss';

type Props = {
  closeMenu: () => void;
}

export const SideBar: React.FC<Props> = ({ closeMenu }) => {
  return (
    <div className="sidebar">
      {/* <div>Sidebar</div>

      <div>Info</div>

      <div>Just for test</div>


      <div>Just for test</div> */}

      <Nav closeMenu={closeMenu}/>
    </div>
  );
};