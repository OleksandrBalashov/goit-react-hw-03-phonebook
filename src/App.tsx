import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/contactForm';
import Layout from './components/layout';
import FilterContacts from './components/filterContacts';
import ContactList from './components/contactList';
import { Contact } from './interfacesTypes/interfaces';

interface State {
  contacts: Contact[];
  filter: string;
}

export default class App extends Component<{}, State> {
  state: State = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts: Contact[] = JSON.parse(
      localStorage.getItem('contacts') || '[]',
    );

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contact: Contact) => {
    this.setState(prevState => {
      const newContacts = [...prevState.contacts];

      if (newContacts.find(({ name }) => name === contact.name)) {
        alert(`${contact.name} is already in contacts`);
        return null;
      }

      return { contacts: [...newContacts, { id: uuidv4(), ...contact }] };
    });
  };

  handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(({ name }) => {
        if (typeof name === 'string') {
          return name.toLowerCase().includes(normalizedFilter);
        }

        return null;
      });
    }

    return [];
  };

  deleteContact = (_id: string) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== _id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Layout>
        <h1 className="app__title">Phonebook</h1>
        <ContactForm onSubmitForm={this.addContact} />
        {contacts.length !== 0 && (
          <>
            <h2 className="app__title contacts__title">Contacts</h2>
            <FilterContacts value={filter} onChange={this.handleFilterChange} />
            <ContactList
              contacts={this.getVisibleContacts()}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
      </Layout>
    );
  }
}
