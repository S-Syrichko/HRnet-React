import Dropdown from "react-dropdown";
import styles from "./SelectField.module.scss";

const SelectField = ({
    label,
    options,
    value,
    onChange
  }: {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }) => (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <Dropdown
        className={styles.dropdown}
        controlClassName={styles.dropdownControl}
        menuClassName={styles.dropdownMenu}
        options={options}
        value={value}
        onChange={(option) => onChange(option.value)}
        arrowClosed={<div>⮟</div>}
        arrowOpen={<div>⮝</div>}
      />
    </>
  );

export default SelectField;
  