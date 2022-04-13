import {
  GET_MATCHES_REQUEST,
  GET_MATCHES_SUCCESS,
  GET_MATCHES_FAIL,
  CREATE_MATCH_FAIL,
  CREATE_MATCH_SUCCESS,
  CREATE_MATCH_REQUEST,
  UPDATE_MATCH_FAIL,
  UPDATE_MATCH_SUCCESS,
  UPDATE_MATCH_REQUEST,
  DELETE_MATCH_FAIL,
  DELETE_MATCH_SUCCESS,
  DELETE_MATCH_REQUEST,
} from "../Constants/matchConstants";

export const getMatchesReducer = (state, action) => {
  console.log(action.type, action.payload);

  switch (action.type) {
    case GET_MATCHES_REQUEST:
      return { loading: true };
    case GET_MATCHES_SUCCESS:
      return { loading: false, matches: action.payload };
    case GET_MATCHES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createMatchReducer = (state, action) => {
  switch (action.type) {
    case CREATE_MATCH_REQUEST:
      return { loading: true };
    case CREATE_MATCH_SUCCESS:
      return { loading: false, success: action.payload };
    case CREATE_MATCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const updateMatchReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MATCH_REQUEST:
      return { loading: true };
    case UPDATE_MATCH_SUCCESS:
      return { loading: false, success: action.payload };
    case UPDATE_MATCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteMatchReducer = (state, action) => {
  switch (action.type) {
    case DELETE_MATCH_REQUEST:
      return { loading: true };
    case DELETE_MATCH_SUCCESS:
      return { loading: false, success: action.payload };
    case DELETE_MATCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
