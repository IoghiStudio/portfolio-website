import React, { useState } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { About } from '../About';
import { Blog } from '../Blog';
import { Contact } from '../Contact';
import { Header } from '../Header';
import { Home } from '../Home';
import { Menu } from '../Menu';
import { Portofolio } from '../Portofolio';

import './App.scss';

export const App = () => {
  const [shouldShowMenu, setShouldShowMenu] = useState<boolean>(false);

  const handleMenuOpener = () => {
    setShouldShowMenu(prevState => !prevState)
  }

  return (
    <div className="App">
      <Header
        handleMenuOpener={handleMenuOpener}
        isOpen={shouldShowMenu}
      />

      <Menu
        isOpen={shouldShowMenu}
      />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/home"
          element={
            <Navigate to="/" replace/>
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/portofolio"
          element={<Portofolio />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </div>
  );
}
