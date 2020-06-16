import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as customerActions from "../../redux/actions/customerActions";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const user = useSelector((state) => state.userReducer);

  const loggingIn = useSelector(
    (state) => state.authenticationReducer.loggingIn
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerActions.logout());
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    setSubmitted(true);
    if (userData.name && userData.password) {
      dispatch(customerActions.loginUser(userData));
      console.log("Giriş Başarılı");
    }
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1 style={{ color: "red" }}>Yıldız Demir Çelik</h1>
      <form name="form" onSubmit={handleSave}>
        <div className="form-group">
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !userData.name ? " is-invalid" : "")
            }
          />
          {submitted && !userData.name && (
            <div className="invalid-feedback">Kullanıcı adı gereklidir!</div>
          )}
        </div>
        <div className="form-group">
          <label>Şİfre</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !userData.password ? " is-invalid" : "")
            }
          />
          {submitted && !userData.password && (
            <div className="invalid-feedback">Şifre gereklidir!</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Giriş Yap
          </button>
          {/* <Link
            to="/register"
            className="btn btn-link"
            style={{ color: "white" }}
          >
            Kayıt Ol
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
