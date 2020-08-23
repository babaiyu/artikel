import {USER_LOGIN, USER_LOGOUT, UserState as State, Action} from '../types';

const initialState: State = {
  userLogin: {},
  isLoggedIn: false,
};

const UserReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userLogin: action.data,
        isLoggedIn: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userLogin: action.data,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
