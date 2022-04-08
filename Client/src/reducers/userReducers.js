import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  UPDATE_STATS_REQUEST,
  UPDATE_STATS_SUCCESS,
  UPDATE_STATS_FAIL,
  CLEAR_FEEDBACK_MESSAGE,
} from "../Constants/userConstants";
export const userRegisterReducer = (state, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload, success: true };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case CLEAR_FEEDBACK_MESSAGE:
      return {
        ...state,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

export const getUsersReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true };
    case GET_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case GET_USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateStatsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATS_REQUEST:
      return { loading: true };
    case UPDATE_STATS_SUCCESS:
      return { loading: false, success: action.payload };
    case UPDATE_STATS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
