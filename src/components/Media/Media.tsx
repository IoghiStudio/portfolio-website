import React from 'react';
import './Media.scss';

// type Props = {
//   onLoad: (ms: number) => void;
// }

export const Media = () => {
  return (
    <ul className='media'>
      <li className='media__item'>
        <a
          className="media__icon media__icon--github" 
          href="https://github.com/IoghiStudio"
          target="_blank"
          rel="noreferrer"
        >
        </a>
      </li>

      <li className='media__item'>
        <a
          className="media__icon media__icon--linkedin" 
          href="https://www.linkedin.com/in/nicusor-iorga/"
          target="_blank"
          rel="noreferrer"
        >
        </a>
      </li>

      <li className='media__item'>
        <a
          className="media__icon" 
          href="https://github.com/IoghiStudio"
          target="_blank"
          rel="noreferrer"
        >
        </a>
      </li>
    </ul>
  );
}