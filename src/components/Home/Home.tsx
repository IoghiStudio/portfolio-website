import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

type Props = {
  onLoad: (ms: number) => void;
}

export const Home: React.FC<Props> = ({ onLoad }) => {
  return (
    <div className="home">
      <h1 className='home__title'>
        <div>Hi,</div>
        <div>I'm Nicu</div>
        <div>web developer </div>
      </h1>

      <p>Front End Developer / Full Stack Developer / Game Developer</p>

      <Link
        to='/contact'
        onClick={() => onLoad(1000) }
      >
        Contact me!
      </Link>

    </div>
  );
}