import React from "react";
import TextInput from "../toolbox/TextInput";

const CustomerDetail = ({ customer, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>Ekle</h2>
      <TextInput
        name="Name"
        label="Customer Name"
        value={customer.Name}
        onChange={onChange}
        error={errors.Name}
      />
      <TextInput
        name="Email"
        label="Email"
        value={customer.Email}
        onChange={onChange}
        error={errors.Email}
      />
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default CustomerDetail;
