import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="App">
        <Link to="/">
          Home !
        </Link>

        <Link to="/about">
          About !
        </Link>

        <Link to="/contact">
          Contact !
        </Link>
    </div>
  );
}