import React, { useState } from 'react';
import './Contact.scss';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="contact">
      <div className="contact__page">
        <h2 className='contact__title'>Contact page</h2>

        <div className="contact__text-container">
          <p className='contact__text'>
          I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
          </p>
        </div>

        <form
          className='form'
          action="/"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            className='form__input form__name'
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            className='form__input form__email'
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className='form__input form__subject'
            type="text"
            placeholder='Subject'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />

          <textarea
            placeholder='Message'
            className='form__input form__message'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <button
            className='form__submit'
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}