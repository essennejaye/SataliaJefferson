import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          console.log(isValid);
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      }
    };
    console.log('errorMessage', errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section className='section-container'>
      <form id='contact-form' onSubmit={handleSubmit}>
        <h2 data-testid='h1tag'>Emails Welcome!</h2>
        <div className='form-item'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button data-testid='buttontag' className='button' type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;