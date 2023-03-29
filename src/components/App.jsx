import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filterContacs = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  searchEngine = evt => {
    evt.preventDefault();

    const newValue = evt.target.value;

    this.setState(prevState => ({
      filter: newValue,
    }));
  };

  addContact = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: evt.target.elements.contactName.value.trim(),
      number: evt.target.elements.contactPhone.value.trim(),
    };

    let presents = this.state.contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (presents === false) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

      evt.target.reset();
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };
  removeItem = elemName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== elemName),
    }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter
            searchEngine={this.searchEngine}
            inputValue={this.state.filter}
          />
          <ContactList
            filterContacs={this.filterContacs}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}
