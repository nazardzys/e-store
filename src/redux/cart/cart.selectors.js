import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  cart => cart.cartItems.reduce((previousValue, currentValue) =>
    previousValue + currentValue.quantity
    , 0)
);

export const selectHidden = createSelector(
  [selectCart],
  user => user.hidden
);

export const selectCartTotal = createSelector(
  [selectCart],
  cart => cart.cartItems.reduce((previousValue, currentValue) =>
    previousValue + currentValue.quantity * currentValue.price
    , 0)
);