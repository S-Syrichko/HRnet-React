import PropTypes from "prop-types";
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { addUser } from "../../../../store/features/userSlice";
import { useAppDispatch } from "../../../../store/store";
import { departments, states } from "../../utils/formData";
import { handleDateChange } from "../../utils/functions";
import styles from "./Form.module.scss";
import SelectField from "./SelectField/SelectField";

type FormProps = {
  onEmployeeCreated: () => void;
};

const stateValues = states.map((state) => state.name);

const Form = ({ onEmployeeCreated }: FormProps) => {
  const dispatch = useAppDispatch();

  const [selectedBirthDate, setSelectedBirthDate] = useState<Date | string>("");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | string>("");
  const [selectedState, setSelectedState] = useState<string>(stateValues[0]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>(
    departments[0]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const stateAbbreviation = states.find(
      (s) => s.name === selectedState
    )?.abbreviation;

    const payload = {
      firstName: target["first-name"].value,
      lastName: target["last-name"].value,
      dateOfBirth: target["date-of-birth"].value,
      startDate: target["start-date"].value,
      street: target["street"].value,
      city: target["city"].value,
      state: stateAbbreviation,
      zipCode: target["zip-code"].value,
      department: selectedDepartment,
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
        key={"birthDate" + selectedBirthDate}
        timeFormat={false}
        value={selectedBirthDate}
        onChange={(date) => handleDateChange(date, setSelectedBirthDate)}
        inputProps={{ id: "date-of-birth", required: true }}
      />

      <label htmlFor="start-date">Start Date</label>
      <Datetime
        className={styles.formDatepicker}
        key={"startDate" + selectedStartDate}
        timeFormat={false}
        value={selectedStartDate}
        onChange={(date) => handleDateChange(date, setSelectedStartDate)}
        inputProps={{ id: "start-date", required: true }}
      />

      <fieldset className={styles.formAdress}>
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" required />

        <label htmlFor="city">City</label>
        <input id="city" type="text" required />

        <SelectField
          label="State"
          options={stateValues}
          value={selectedState}
          onChange={(newValue) => setSelectedState(newValue)}
        />
        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" required />
      </fieldset>

      <SelectField
        label="Department"
        options={departments}
        value={selectedDepartment}
        onChange={(newValue) => setSelectedDepartment(newValue)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

Form.propTypes = {
  onEmployeeCreated: PropTypes.func.isRequired,
};

export default Form;
