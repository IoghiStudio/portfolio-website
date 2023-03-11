import React from 'react';
import { SpinCube } from '../SpinCube';
import './About.scss';

export const About = () => {
  return (
    <div className="about">
      <div className="about__page">
        <h1 className="page__title">About me</h1>

        <p className="about__text">
        <span className="about__span">
        Just call me Nicu! I am a Front End Developer looking to improve myself and my technical    skills everyday with passion for technology.
        </span>
        <span className="about__span">
        I combine my programming and design skills with background in game development and 3D Art.
        </span>
        <span className="about__span">
        My goal is to become a Senior Full Stack Developer and to bring value to the company I’m working for and the people I collaborate with.
        </span> And of course to prove to myself that my sharp mind and problem solving skills will help me succeed in any environment or problem I am facing.
        </p>
      </div>

      <div className="about__animation">
        <SpinCube />
      </div>
    </div>
  );
}