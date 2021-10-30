import { InitialState } from "./types";


export const setCurrentUser = (user: InitialState) => ({
  type: 'SET_CURRENT_USER',
  payload: user
});