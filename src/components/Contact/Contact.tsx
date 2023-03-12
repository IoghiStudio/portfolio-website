import React from 'react';
import './Contact.scss';

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__page">
        <h2>Contact page</h2>

      </div>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d22078.280679256557!2d27.666029450292964!3d46.234618438753536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d46.238507!2d27.669805999999998!4m3!3m2!1d46.239397499999995!2d27.6710076!5e0!3m2!1sro!2sro!4v1678649241675!5m2!1sro!2sro" title="map" width="800" height="600"
        style={{border: 0}} allowfullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}