import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userTypes';

const initialState = {
  userInfo: {},
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
