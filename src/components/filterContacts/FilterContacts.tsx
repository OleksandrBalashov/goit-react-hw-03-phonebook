import styles from './FilterContacts.module.css';

interface Props {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const FilterContacts = ({ value, onChange }: Props) => (
  <>
    <h3 className={styles.text}>Find contacts by name:</h3>
    <label className={styles.label}>
      <input
        type="text"
        className={styles.input}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

export default FilterContacts;
