import React, { useState, useEffect } from 'react';
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
import { LoadAnimation } from '../LoadAnimation';
import { Menu } from '../Menu';
import { Portofolio } from '../Portofolio';
import { SideBar } from '../SideBar';

import './App.scss';

export const App = () => {
  const [shouldShowMenu, setShouldShowMenu] = useState<boolean>(false);
  const [showAnimation, setShowAnimation] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  }, [])

  const handleMenuOpener = () => {
    setShouldShowMenu(prevState => !prevState)
  }

  const loadingAnimation = (ms: number) => {
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
    }, ms)
  }

  const closeMenu = () => {
    setShouldShowMenu(false);

    loadingAnimation(1000);
  }


  return (
    <div className="app">
      {showAnimation && <LoadAnimation />}

      <div className="app__sidebar">
        <SideBar closeMenu={closeMenu} />
      </div>

      <div className="app__page">
        <div className="app__header">
          <Header
            handleMenuOpener={handleMenuOpener}
            isOpen={shouldShowMenu}
          />
        </div>

        <Menu
          isOpen={shouldShowMenu}
          closeMenu={closeMenu}
        />


        <Routes>
          <Route
            path="/"
            element={<Home onLoad={loadingAnimation}/>}
          />

          <Route
            path="/home"
            element={
              <Navigate to="/" replace/>
            }
          />

          <Route
            path="/about"
            element={<About/>}
          />

          <Route
            path="/portofolio"
            element={<Portofolio/>}
          />

          <Route
            path="/blog"
            element={<Blog/>}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <p>ERROR 404 - PAGE NOT FOUND</p>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
