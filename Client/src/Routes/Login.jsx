import React, { useState, useReducer, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";
import Message from "../Components/Message";
import { AppState } from "../Context/AppProvider";
import "../css/auth.css";
import { userLoginReducer } from "../reducers/userReducers";
const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { user: userInfo } = AppState();
  const initialState = {
    loading: false,
    user: userInfo,
    error: null,
  };
  const [state, dispatch] = useReducer(userLoginReducer, initialState);
  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(dispatch, values, navigate);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user) {
      navigate("/");
    }
  }, [navigate]);
  console.log(state);
  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <div className="tabs-header">
            <div className="tab">
              <Link to="/register">Register</Link>
            </div>
            <div className="tab">
              <Link to="/login" className="tab-active">
                Login
              </Link>
            </div>
          </div>
          <form className="auth-form">
            <div className="form-header">
              <h1 className="display1">Login</h1>
              <p className="text-muted">Login into your account </p>
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={(e) => changeHandler(e)}
                id="email"
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
                value={values.password}
                onChange={(e) => changeHandler(e)}
                id="password"
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
                {state?.loading ? "Loading please wait" : "Login"}
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
              Login successful you are being redirected!
            </Message>
          )}
          {state?.error && <Message type="error">{state?.error}</Message>}
        </div>
      </div>
    </div>
  );
};

export default Login;
