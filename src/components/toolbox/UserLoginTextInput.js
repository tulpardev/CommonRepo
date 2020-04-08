import React from "react";

const UserLoginTextInput = ({
  name,
  label,
  onChange,
  placeHolder,
  value,
  error,
  inputDivClass,
  inputType
}) => {
  let wrapperClass = "from-group";
  if (error && error.length > 0) {
    wrapperClass += " has error";
  }
  return (
    <div className={wrapperClass}>
      <div className={inputDivClass}>
        <input
          type={inputType}
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default UserLoginTextInput;
