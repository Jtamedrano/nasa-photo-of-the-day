import React from "react";

function DatePickerForm(props) {
  const date = new Date(props.date);
  console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);

  return (
    <div>
      <input
        type="date"
        value={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
        onChange={(evt) => props.setDate(evt.target.value)}
      />
    </div>
  );
}

export default DatePickerForm;
