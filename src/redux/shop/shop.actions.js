import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());
    fetch('https://mocki.io/v1/a3717f84-a6b1-4bed-b43d-5827818ba645')
      .then(response => response.text())
      .then(data => dispatch(fetchCollectionsSuccess(JSON.parse(data))))
      .catch(error => dispatch(fetchCollectionsFailure(error)));
  }
}