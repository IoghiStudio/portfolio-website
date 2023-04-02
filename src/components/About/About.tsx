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
          Just call me Nicu! i am Passionate Front End Developer with 2 years of experience. With a strong background in Game Development and 3D Art. I combine my programming and design skills to create outstanding web applications.
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
          I’m an excellent communicator and problem solver, and am highly organized and detail-oriented. I am looking for new opportunities to apply my skills and knowledge to help create successful projects.
          </span>

          <span className="about__span">
          My expertise includes Typescript, Javascript, React.js, HTML, CSS/SCSS with BEM methodology, Rest API, Git, and more.
          </span>
          
          <span className="about__span">
          You can see my CV with pdf format here
          <a
            className='about__cv'
            href="https://github.com/IoghiStudio/portfolio-website/blob/main/src/CV/nicusoriorga%20CV.pdf"
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