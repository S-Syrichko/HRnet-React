import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { addUser } from "../../../../store/features/userSlice";
import { useAppDispatch } from "../../../../store/store";
import { states } from "../../utils/formData";
import styles from "./Form.module.scss";
import { Moment } from 'moment';
import PropTypes from "prop-types";

type FormProps = {
    onEmployeeCreated: () => void;
};

const Form = ({onEmployeeCreated}: FormProps) => {
    const dispatch = useAppDispatch();
  const [selectedBirthDate, setSelectedBirthDate] = useState<Date | string>("");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | string>("");

  const handleBirthDateChange = (date: string | Moment) => {
    if (typeof date === 'string') {
      setSelectedBirthDate(date);
    } else {
      setSelectedBirthDate(date.toDate());
    }
  };

  const handleStartDateChange = (date: string | Moment) => {
    if (typeof date === 'string') {
      setSelectedStartDate(date);
    } else {
      setSelectedStartDate(date.toDate());
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const payload = {
      firstName: target["first-name"].value,
      lastName: target["last-name"].value,
      dateOfBirth: target["date-of-birth"].value,
      startDate: target["start-date"].value,
      street: target["street"].value,
      city: target["city"].value,
      state: target["state"].value,
      zipCode: target["zip-code"].value,
      department: target["department"].value,
    };
    dispatch(addUser(payload));
    onEmployeeCreated();

    target.reset();
    setSelectedBirthDate("");
    setSelectedStartDate("");
  };

  return (
    <form className={styles.form} id="create-employee" onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" required />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" required />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <Datetime
        className={styles.formDatepicker}
        key={'birthDate' + selectedBirthDate}
        timeFormat={false}
        value={selectedBirthDate}
        onChange={handleBirthDateChange}
        inputProps={{ id: "date-of-birth", required: true }}
      />

      <label htmlFor="start-date">Start Date</label>
      <Datetime
        className={styles.formDatepicker}
        key={'startDate' + selectedStartDate}
        timeFormat={false}
        value={selectedStartDate}
        onChange={handleStartDateChange}
        inputProps={{ id: "start-date", required: true }}
      />

      <fieldset className={styles.formAdress}>
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" required />

        <label htmlFor="city">City</label>
        <input id="city" type="text" required />

        <label htmlFor="state">State</label>
        <select name="state" id="state">
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" required />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

Form.propTypes = {
  onEmployeeCreated: PropTypes.func.isRequired,
};

export default Form;