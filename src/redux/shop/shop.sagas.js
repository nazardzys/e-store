import { takeLatest, put, call } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionAsync() {
  try {
    const response = yield call(fetch, 'https://mocki.io/v1/a3717f84-a6b1-4bed-b43d-5827818ba645');
    const collections = yield call([response, response.text]);
    yield put(fetchCollectionsSuccess(JSON.parse(collections)));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}