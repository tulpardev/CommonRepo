import React, { useState, useEffect } from "react";
import UserLoginTextInput from "../toolbox//UserLoginTextInput";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  getCustomers,
  saveCustomer,
} from "../../redux/actions/customerActions";
import * as userLoginActions from "../../redux/actions/userLoginActions";

const UserLogin = () => {
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({});

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "name" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        Name: "Geçerli bir e-posta girin.",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        Name: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    dispatch(userLoginActions.postUser(userData));
    let user = localStorage.getItem("userToken");
    //console.log(user)
    //history.push("/");
    //alert(userData.name +" eklendi");
  }

  return (
    <form className="form-inline" onSubmit={handleSave}>
      <UserLoginTextInput
        name="name"
        value={userData.name}
        onChange={handleChange}
        error={errors.Name}
        inputType={"text"}
        placeHolder={"E-posta veya Kullanıcı Adı"}
        inputDivClass={"form-group mb-2"}
      />
      <UserLoginTextInput
        name="password"
        value={userData.password}
        onChange={handleChange}
        error={errors.Email}
        inputType={"password"}
        placeHolder={"Şifre"}
        inputDivClass={"form-group mx-sm-3 mb-2"}
      />
      <div>
        <button className="btn btn-primary mb-2">Giriş Yap</button>
      </div>
    </form>
  );
};

export default UserLogin;
