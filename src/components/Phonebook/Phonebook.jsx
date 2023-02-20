import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.scss';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = { id: '', name: '', number: '' };

  handleInputChange = ({ target }) => {
    const inputName = target.name;
    const inputValue = target.value;
    this.setState({ [inputName]: inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(newContact);
    this.resetState();
  };

  resetState = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <form className={css.phonebookForm} onSubmit={this.handleSubmit}>
        <label htmlFor="formName">Name:</label>
        <input
          type="text"
          name="name"
          id="formName"
          value={this.state.name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="formTel">Number:</label>
        <input
          type="tel"
          name="number"
          id="formTel"
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add</button>
      </form>
    );
  }
}

export default Phonebook;

Phonebook.propTypes = {
  addContact: PropTypes.func.isRequired,
};
