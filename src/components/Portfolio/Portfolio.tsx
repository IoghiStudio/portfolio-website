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

          <div className="portfolio__links">
            <a
              href='https://ioghistudio.github.io/layout_my-bike/'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__demo"
            >
              Demo
            </a>

            <a
              href='https://github.com/IoghiStudio/layout_my-bike/tree/develop/src'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__code"
            >
              Code
            </a>
          </div>
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

          <div className="portfolio__links">
            <a
              href='https://ioghistudio.github.io/react_todo-app-with-api/'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__demo"
            >
              Demo
            </a>

            <a
              href='https://github.com/IoghiStudio/react_todo-app-with-api/tree/final/src'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__code"
            >
              Code
            </a>
          </div>
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

          <div className="portfolio__links">
            <a
              href='https://ioghistudio.github.io/layout_my-bike/'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__demo"
            >
              Demo
            </a>

            <a
              href='https://github.com/IoghiStudio/layout_my-bike/tree/develop/src'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__code"
            >
              Code
            </a>
          </div>
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

          <div className="portfolio__links">
            <a
              href='https://ioghistudio.github.io/layout_my-bike/'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__demo"
            >
              Demo
            </a>

            <a
              href='https://github.com/IoghiStudio/layout_my-bike/tree/develop/src'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__code"
            >
              Code
            </a>
          </div>
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

          <div className="portfolio__links">
            <a
              href='https://ioghistudio.github.io/layout_my-bike/'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__demo"
            >
              Demo
            </a>

            <a
              href='https://github.com/IoghiStudio/layout_my-bike/tree/develop/src'
              target="_blank"
              rel="noreferrer"
              className="portfolio__link portfolio__code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}