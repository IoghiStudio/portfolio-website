import React from 'react';
import { SpinCube } from '../SpinCube';
import './About.scss';

export const About = () => {
  return (
    <div className="about">
      <div className="about__page">
        <h1 className="about__title animate-charcterr">About&nbsp;me</h1>

        <p className="about__text">
          <span className="about__span">
          Just call me Nicu! As a Front End Developer with a background in game development and 3D art.
          I combine programming and design skills to create exceptional web applications
          </span>

          <span className="about__span">
          Passionate about technology, I am committed to continuous self-improvement and aspire to become a Senior Full Stack Developer
          </span>

          <span className="about__span">
          I want to bring value to the company I’m working for and the people I collaborate with.
          </span>

          <span className="about__span">
          And of course to prove to myself that my sharp mind and problem solving skills will help me succeed in any environment or problem I am facing.
          </span>

          <span className="about__span">
          My expertise includes Typescript, Javascript, React.js, HTML, CSS/SCSS with BEM methodology, Rest API, Git, and more.
          </span>
          
          <span className="about__span">
          You can download my CV with pdf format here
          <a
            className='about__cv'
            href="https://github.com/IoghiStudio/portfolio-website/blob/main/src/CV/nicusoriorgacv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Nicusor Iorga CV.pdf
          </a>
          </span>
        </p>
      </div>

      <div className="about__animation">
        <SpinCube />
      </div>
    </div>
  );
}