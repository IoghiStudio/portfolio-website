import React from 'react';
import './Home.scss';
import { SpinCube } from '../SpinCube';
import { Link } from 'react-router-dom';

type Props = {
  onLoad: (ms: number) => void;
}

export const Home: React.FC<Props> = ({ onLoad }) => {
  return (
    <div className="home">
      <div className="home__page">
        <h1 className="home__title">
          <span className="home__span title-word title-word-1">
            Hi,
          </span>

          <span className="home__span title-word title-word-2">
            I'm Nicu,
          </span>

          <span className="home__span title-word title-word-3">
            Web developer,
          </span>
        </h1>

        <p className="home__text">
          Front End / Full Stack Developer
        </p>

        <Link
          to='/contact'
          onClick={() => onLoad(500) }
        >
          Contact me!
        </Link>
      </div>

      <div className="home__animation">
        <SpinCube />
      </div>
    </div>
  );
}