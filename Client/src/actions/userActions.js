import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  UPDATE_STATS_SUCCESS,
  UPDATE_STATS_REQUEST,
  UPDATE_STATS_FAIL,
} from "../Constants/userConstants";
import { api } from "../api/api";

export const registerUser = async (dispatch, user, navigate) => {
  console.log(user);
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`${api}/users/register`, user, config);
    console.log(data);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userLogin", JSON.stringify(data));
    setTimeout(() => navigate("/"), 2500);
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};

export const loginUser = async (dispatch, user, navigate) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`${api}/users/login`, user, config);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userLogin", JSON.stringify(data));
    setTimeout(() => navigate("/"), 2500);
  } catch (error) {
    console.log(error.response && error.response.data.message);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};

export const getUsers = async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });
    // const config = {
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // };
    const { data } = await axios.get(`${api}/users`);

    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};

export const updateStats = async (dispatch, contest, user) => {
  try {
    dispatch({ type: UPDATE_STATS_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.put(`${api}/users/`, contest, config);
    dispatch({ type: UPDATE_STATS_SUCCESS, payload: true });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};
