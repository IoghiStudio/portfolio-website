import React from 'react';
import './Portfolio.scss';

const projects = [
  {
    title: 'Ecommerce store',
    description: 'An online store with apple products. Mobile first , responsive UI, Frontend done, backend work in progress.. Teckstack: React, Typescript, Scss, Express.js PostgreSql',
    demolink: 'https://ioghistudio.github.io/product-catalog/',
    codelink: 'https://github.com/IoghiStudio/product-catalog/blob/main/src/Components/ProductDetailsPage/ProductDetailsPage.tsx',
    extraclass: 'portfolio__image--store'
  },
  {
    title: 'MyBike Landing Page',
    description: 'Responsive landing page for mobile, tablet and desktop. I did that project to train clean code and make all style blocks reusable. Techstack: Html, Scss, BEM, Javascript.',
    demolink: 'https://ioghistudio.github.io/layout_my-bike/',
    codelink: 'https://github.com/IoghiStudio/layout_my-bike/tree/develop/src',
    extraclass: 'portfolio__image--mybike'
  },
  {
    title: 'TodoApp with API',
    description: 'API is used, starting with creating an account with your email and name. You can post, update, delete, and also get the todos from previous session. Everything is saved to the API.',
    demolink: 'https://ioghistudio.github.io/react_todo-app-with-api/',
    codelink: 'https://github.com/IoghiStudio/react_todo-app-with-api/tree/final/src',
    extraclass: 'portfolio__image--todoapp',
  }
];

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portofolio projects</h2>
      <div className="portfolio__projects">
        {projects.map(project => {
          const {
            title,
            description,
            demolink,
            codelink,
            extraclass,
          } = project;

          return (
            <div className="portfolio__project">
              <div className={`portfolio__image ${extraclass}`}>
                
              </div>
  
              <h3 className="portfolio__title">
                {title}
              </h3>
  
              <p className='portfolio__description'>
                {description}
              </p>
  
              <div className="portfolio__links">
                <a
                  href={demolink}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio__link portfolio__demo"
                >
                  Demo
                </a>
  
                <a
                  href={codelink}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio__link portfolio__code"
                >
                  Code
                </a>
              </div>
            </div>
          )
        })}

            <div className="portfolio__project">
              <div className="portfolio__image"></div>
  
              <h3 className="portfolio__title">
                Random title :D
              </h3>
  
              <p className='portfolio__description'>
                See more projects on my github page pressing the code button
              </p>
  
              <div className="portfolio__links">
                <a
                  href='/'
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio__link portfolio__demo"
                >
                  Demo
                </a>
  
                <a
                  href='https://github.com/IoghiStudio'
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