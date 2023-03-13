import React from 'react';
import './Portfolio.scss';

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portofolio projects</h2>
      <div className="portfolio__projects">
        <div className="portfolio__project">
          <div className="portfolio__image portfolio__image--mybike">
            
          </div>

          <h3 className="portfolio__title">
            MyBike Landing Page
          </h3>

          <p className='portfolio__description'>
            Responsive landing page for mobile, tablet and desktop. Technologies used there are html for markup , scss preproccesor for styles, BEM methodology and some lines of javascript.
          </p>
        </div>

        <div className="portfolio__project">
          <div className="portfolio__image portfolio__image--todoapp">
            
          </div>

          <h3 className="portfolio__title">
            TodoApp with API
          </h3>

          <p className='portfolio__description'>
            API is used, starting with creating an account with your email and name. You can post, update, delete, and also get the todos from previous session. Everything is saved to the API.
          </p>
        </div>

        <div className="portfolio__project">
          <div className="portfolio__image portfolio__image-">
            
          </div>

          <h3 className="portfolio__title">
            MyBike Landing Page
          </h3>

          <p className='portfolio__description'>
            Just random description
          </p>
        </div>

        <div className="portfolio__project">
          <div className="portfolio__image portfolio__image--mybik">
            
          </div>

          <h3 className="portfolio__title">
            MyBike Landing Page
          </h3>

          <p className='portfolio__description'>
            Just random description
          </p>
        </div>

        <div className="portfolio__project">
          <div className="portfolio__image portfolio__image--todoap">
            
          </div>

          <h3 className="portfolio__title">
            MyBike Landing Page
          </h3>

          <p className='portfolio__description'>
            Just random description
          </p>
        </div>
      </div>
    </div>
  );
}