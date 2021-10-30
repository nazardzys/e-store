import { InitialState, UserAction } from './types';

const INITIAL_STATE: InitialState = {
  currentUser: null
}

const userReducer = (state: InitialState = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;