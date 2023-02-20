import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import css from './ContactList.module.scss';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ol className={css.contactList}>
      {[...contacts]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            removeContact={removeContact}
          />
        ))}
    </ol>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
