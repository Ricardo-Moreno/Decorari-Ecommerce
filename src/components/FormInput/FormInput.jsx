import React from "react";

function FormInput({ children, value, name, inputChangeHandler }) {
  return (
    <div className="form-item">
      <label htmlFor="name">{children}</label>
      <input
        value={value}
        onChange={inputChangeHandler}
        name={name}
        type="text"
        placeholder="Nombre"
        required
      />
    </div>
  );
}

export default FormInput;
