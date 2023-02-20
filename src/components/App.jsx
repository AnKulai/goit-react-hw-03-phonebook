import { Component } from 'react';
import { Report, Notify } from 'notiflix';
import ContactList from './ContactList/ContactList';
import Filterblock from './Filterblock/Filterblock';
import Phonebook from './Phonebook/Phonebook';
import Section from './Section/Section';

class App extends Component {
  defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  state = {
    contacts: !JSON.parse(localStorage.getItem(`contacts`)).length
      ? this.defaultContacts
      : JSON.parse(localStorage.getItem(`contacts`)),
    filter: '',
  };

  componentDidMount() {
    if (this.state.contacts === this.defaultContacts)
      Notify.info(
        `The list was empty. I have uploaded the default list for your convenience.`
      );
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts != prevState.contact) {
      const stringifyContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifyContacts);
    }
  }

  addContact = contact => {
    if (this.state.contacts.some(({ name }) => name.includes(contact.name))) {
      Report.failure('Error', `${contact.name} is already in contacts`, 'Okay');
      return;
    }
    this.setState({ contacts: [contact, ...this.state.contacts] });
  };

  removeContact = ({ target }) => {
    const id = target.dataset.nanoid;
    const filterList = this.state.contacts.filter(contact => contact.id !== id);
    if (filterList.length !== this.state.contacts.length) {
      this.setState({ contacts: [...filterList] });
      Notify.success(`Contact removed`);
    }
  };

  filterContactList = keyword => {
    this.setState({ filter: keyword });
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(this.state.filter)
    );
    return (
      <>
        <Section title="PhoneBook">
          <Phonebook addContact={this.addContact} />
          <Filterblock
            title="Filter by Name"
            filterList={this.filterContactList}
          />
        </Section>
        <Section title="Contacts">
          <ContactList
            contacts={filterContacts}
            removeContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
