import React, { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom'
import { About } from '../About';
import { Contact } from '../Contact';
import { Header } from '../Header';
import { Home } from '../Home';

export const App = () => {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </div>
  );
}
