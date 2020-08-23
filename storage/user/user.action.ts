import {USER_LOGIN, Action, USER_LOGOUT} from '../types';

export const userLoginAction = (data: any): Action => ({
  type: USER_LOGIN,
  data,
});

export const userLogoutAction = (): Action => ({
  type: USER_LOGOUT,
  data: {},
});
