import { Contact } from '../../interfacesTypes/interfaces';
import styles from './Contact.module.css';

interface Props {
  contacts: Contact[];
  onDeleteContact(id?: string): void;
}

const ContactList = ({ contacts, onDeleteContact }: Props) => (
  <ul className={styles.list}>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.item}>
        <p className={styles.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
