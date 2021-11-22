import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});


export const emailSignInStart = credentials => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
  payload: credentials
});

export const emailSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const userSignOutStart = () => ({
  type: UserActionTypes.USER_SIGN_OUT_START
});

export const userSignOutSuccess = () => ({
  type: UserActionTypes.USER_SIGN_OUT_SUCCESS
});

export const userSignOutFailure = error => ({
  type: UserActionTypes.USER_SIGN_OUT_FAILURE,
  payload: error
});