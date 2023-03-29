import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ filterContacs, removeItem }) => {
  const a = filterContacs();
  // console.log('a', a);
  return (
    <ul>
      {a.map(value => (
        <ContactListItem
          key={value.id}
          name={value.name}
          number={value.number}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;
