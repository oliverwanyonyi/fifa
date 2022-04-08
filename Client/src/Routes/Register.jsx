import React, { useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../actions/userActions";
import Message from "../Components/Message";
import { AppState } from "../Context/AppProvider";
import "../css/auth.css";
import { userRegisterReducer } from "../reducers/userReducers";
const Auth = () => {
  const { user: userInfo } = AppState();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const initialState = {
    loading: false,
    user: userInfo,
    error: null,
  };
  const [state, dispatch] = useReducer(userRegisterReducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    registerUser(dispatch, values, navigate);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <div className="tabs-header">
            <div className="tab">
              <Link to="/register" className="tab-active">
                Register
              </Link>
            </div>
            <div className="tab">
              <Link to="/login">Login</Link>
            </div>
          </div>
          <form className="auth-form">
            <div className="form-header">
              <h1 className="display1">Register</h1>
              <p className="text-muted">Create a new account </p>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={values.name}
                onChange={(e) => changeHandler(e)}
                placeholder=" "
              />
              <label htmlFor="name" className="form-label">
                Enter Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={values.email}
                onChange={(e) => changeHandler(e)}
                placeholder=" "
              />
              <label htmlFor="email" className="form-label">
                Enter Email Address
              </label>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={values.password}
                onChange={(e) => changeHandler(e)}
                placeholder=" "
              />
              <label htmlFor="password" className="form-label">
                Enter Password
              </label>
            </div>
            <div className="form-footer">
              <button
                className="form-submit"
                onClick={submitHandler}
                disabled={state?.loading}
              >
                {state?.loading ? "Loading please wait" : "Register"}
              </button>

              <p>
                Forgot password?
                <Link to="/reset-password" className="auth-redirect">
                  Reset here
                </Link>
              </p>
            </div>
          </form>
          {state?.success && (
            <Message type="success">
              Account created successfully you are being redirected!
            </Message>
          )}
          {state?.error && <Message type="error">{state?.error}</Message>}
        </div>
      </div>
    </div>
  );
};

export default Auth;
