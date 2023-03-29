import React from 'react';

const ContactListItem = ({ name, number, removeItem }) => {
  return (
    <li>
      <div className="itemContainer">
        <span>{name}: </span>
        <span>{number}</span>
        <button onClick={() => removeItem(name)}>Delete</button>
      </div>
    </li>
  );
};

export default ContactListItem;
