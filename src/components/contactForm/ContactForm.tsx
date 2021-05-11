import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { Contact } from '../../interfacesTypes/interfaces';

interface Props {
  onSubmitForm(contact: Contact): void;
  initialValue: Contact;
}

export default class ContactForm extends Component<Props> {
  static defaultProps = {
    initialValue: {
      name: '',
      number: '',
    },
  };

  state = {
    ...this.props.initialValue,
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handlerSubmitContactFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name === '' && number === '') return;

    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...this.props.initialValue });
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
