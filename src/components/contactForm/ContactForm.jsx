import React from 'react';

const ContactForm = ({ addContact }) => {
  return (
    <form onSubmit={addContact}>
      <label htmlFor="contactName">Name</label>
      <input id="contactName" name="contactName" type="text" />
      <label htmlFor="contactPhone">Number</label>
      <input
        id="contactPhone"
        name="contactPhone"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <button type="submit" className="submitButton">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
