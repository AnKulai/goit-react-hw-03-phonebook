import PropTypes from 'prop-types';

const Contact = ({ id, name, number, removeContact }) => {
  return (
    <li>
      {name} : {number}
      <button data-nanoid={id} onClick={removeContact}>
        Remove
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
