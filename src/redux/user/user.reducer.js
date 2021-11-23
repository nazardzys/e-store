import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
    case UserActionTypes.USER_SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case UserActionTypes.USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
