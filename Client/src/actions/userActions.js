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
} from "../Constants/userConstants";
import { api } from "../api/api";
import {
  GET_MATCHES_FAIL,
  GET_MATCHES_REQUEST,
  GET_MATCHES_SUCCESS,
  CREATE_MATCH_SUCCESS,
  CREATE_MATCH_FAIL,
  UPDATE_MATCH_REQUEST,
  UPDATE_MATCH_FAIL,
  UPDATE_MATCH_SUCCESS,
  CREATE_MATCH_REQUEST,
  DELETE_MATCH_SUCCESS,
  DELETE_MATCH_FAIL,
  DELETE_MATCH_REQUEST,
} from "../Constants/matchConstants";

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

export const createMatch = async (dispatch, contest, user) => {
  console.log(dispatch);
  try {
    dispatch({ type: CREATE_MATCH_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.post(`${api}/users/`, contest, config);
    dispatch({ type: CREATE_MATCH_SUCCESS, payload: true });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_MATCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};

export const updateMatch = async (dispatch, contest, user, matchId) => {
  console.log(dispatch);
  try {
    dispatch({ type: UPDATE_MATCH_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.put(`${api}/matches/${matchId}`, contest, config);
    dispatch({ type: UPDATE_MATCH_SUCCESS, payload: true });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_MATCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};

export const deleteMatch = async (dispatch, matchId, contest, user) => {
  console.log(contest);

  try {
    dispatch({ type: DELETE_MATCH_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.post(`${api}/matches/${matchId}`, contest, config);
    dispatch({ type: DELETE_MATCH_SUCCESS, payload: true });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_MATCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};

export const getMatches = async (dispatch) => {
  try {
    dispatch({ type: GET_MATCHES_REQUEST });

    const { data } = await axios.get(`${api}/matches`);
    dispatch({ type: GET_MATCHES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MATCHES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "No internet connection!",
    });
  }
};
