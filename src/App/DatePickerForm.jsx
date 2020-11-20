import React, { useState } from "react";

function DatePickerForm(props) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setDate(`${year}-${month}-${day}`);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="number"
        minLength="2"
        maxLength="2"
        placeholder="MM"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <input
        type="number"
        minLength="2"
        maxLength="2"
        placeholder="DD"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <input
        type="number"
        minLength="4"
        maxLength="4"
        placeholder="YYYY"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default DatePickerForm;
