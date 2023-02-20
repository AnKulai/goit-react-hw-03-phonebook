import PropTypes from 'prop-types';
import css from './Section.module.scss';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    <div className={css.container}>{children}</div>
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
