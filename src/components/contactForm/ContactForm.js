import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
};
export default class ContactForm extends Component {
  state = {
    ...initialState,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handlerSubmitContactFrom = e => {
    e.preventDefault();

    const { name, number } = e.currentTarget;
    if (name.value === '' && number.value === '') return;

    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={styles.wrap}>
        <form className={styles.form} onSubmit={this.handlerSubmitContactFrom}>
          <div className={styles.wrapLabel}>
            <label className={styles.label}>
              <p className={styles.text}>Name</p>
              <input
                type="text"
                name="name"
                className={styles.input}
                value={name}
                placeholder=" "
                onChange={this.handleInputChange}
              />
            </label>
            <label className={styles.label}>
              <p className={styles.text}>Phone</p>
              <input
                type="tel"
                name="number"
                className={styles.input}
                value={number}
                placeholder=" "
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
