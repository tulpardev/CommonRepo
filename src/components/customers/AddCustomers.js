import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCustomers } from "../../redux/actions/customerActions";
import { saveCustomer } from "../../redux/actions/customerActions";
import CustomerDetail from "./CustomerDetail";

function AddCustomers({
  customers,
  getCustomers,
  saveCustomer,
  history,
  ...props
}) {
  const [customer, setCustomer] = useState({ ...props.customer });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (customers.length === 0) {
      getCustomers();
    }
    setCustomer({ ...props.customer });
  }, []);


  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setCustomer({
      ...customer, 
      [name]:value
    });
    validate(name, value);
  }

  function validate(name, value) {
    if (name === "Name" && value === "") {
      setErrors(previousErrors => ({
        ...previousErrors,
        Name: "Müşteri ismi olmalıdır."
      }));
    } else {
      setErrors(previousErrors => ({
        ...previousErrors,
        Name: ""
      }));
    }
  }

  function handleSave(event) {
    //event.preventDefault();
    saveCustomer(customer).then(() => {
     //history.push("/");
    });
    alert(customer.Name +" eklendi");
  }

  return (
    <CustomerDetail
      customer={customer}
      customers={customers}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

function mapStateToProps(state) {
  return {
    customers: state.customerListReducer,
  };
}

const mapDispatchToProps = {
  getCustomers,
  saveCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomers);
