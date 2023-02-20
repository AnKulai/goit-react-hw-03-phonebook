import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filterblock.module.scss';

class Filterblock extends Component {
  state = { keyword: '' };

  handleFilter = ({ target }) => {
    const inputValue = target.value;
    this.setState({ keyword: inputValue });
    this.props.filterList(inputValue.toLowerCase());
  };

  render() {
    return (
      <form className={css.filteblock}>
        <label htmlFor="filterInput">{this.props.title}</label>
        <div
          className={
            this.state.keyword ? css.ActiveInputWrapper : css.inputWrapper
          }
        >
          <input
            type="text"
            id="filterInput"
            name="filter"
            value={this.state.keyword}
            onChange={this.handleFilter}
          />
        </div>
      </form>
    );
  }
}

export default Filterblock;

Filterblock.propTypes = {
  title: PropTypes.string.isRequired,
  filterList: PropTypes.func.isRequired,
};
