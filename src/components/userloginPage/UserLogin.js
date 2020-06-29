import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as customerActions from "../../redux/actions/customerActions";
import SvgYdcLogo from "../../utils/ydcLogo";

const UserLogin = () => {
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const user = useSelector((state) => state.userReducer);

  const loggingIn = useSelector(
    (state) => state.authenticationReducer.loggingIn
  );

  const alert = useSelector((state) => state.alertReducer);

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
      console.log("merhaba");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-lg-6 col-md-10 mx-auto">
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div
                  className="card-header d-flex flex-column justify-content-center align-items-center"
                  style={{ backgroundColor: "white" }}
                >
                  <div style={{ margin: 30 }}>
                    <SvgYdcLogo />
                  </div>
                  <h3
                    className="mb-0"
                    style={{
                      color: "#e20613",
                      fontStyle: "bold",
                      fontFamily: "Zapf-Chancery",
                    }}
                  >
                    GALVANİZ 2.HAT
                  </h3>
                  <h3
                    className="mb-0"
                    style={{
                      color: "#e20613",
                      fontStyle: "bold",
                      fontFamily: "Zapf-Chancery",
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  >
                    SEVİYE 2 SİSTEMİ
                  </h3>

                  {alert.message && (
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                  )}
                </div>
                <div className="card-body">
                  <form onSubmit={handleSave}>
                    <div className="form-group">
                      <label htmlFor="Email">Kullanıcı Adı</label>
                      <input
                        type="text"
                        className="form-control border border-danger"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        className={
                          "form-control" +
                          (submitted && !userData.name ? " is-invalid" : "")
                        }
                      />

                      {submitted && !userData.name && (
                        <div className="invalid-feedback">
                          Kullanıcı adı gereklidir!
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="Password">Şİfre</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        className={
                          "form-control" +
                          (submitted && !userData.password ? " is-invalid" : "")
                        }
                      />
                      {submitted && !userData.password && (
                        <div className="invalid-feedback">
                          Şifre gereklidir!
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <button
                        style={{ backgroundColor: "#e20613" }}
                        className="btn btn-primary"
                      >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
