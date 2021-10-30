import firebase from "firebase/compat";
export type InitialState = {
  currentUser: firebase.User | null;
}

export type UserAction = {
  payload: firebase.User | null;
  type: string;
}