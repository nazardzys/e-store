import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSuccess, userSignOutFailure, userSignOutSuccess } from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(googleSignInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSignOut() {
  try {
    yield call([auth, auth.signOut]);
    yield put(userSignOutSuccess());
  } catch (error) {
    yield put(userSignOutFailure(error.message));
  }
}

export function* onUserSignOutStart() {
  yield takeLatest(UserActionTypes.USER_SIGN_OUT_START, userSignOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onUserSignOutStart)
  ]);
}