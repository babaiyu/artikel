export interface Action {
  type: string;
  data?: any;
  message?: string;
}

// ====================== EXAMPLE ======================
export const EXAMPLE = 'EXAMPLE';

export interface ExampleState {
  dataExample: any;
}

// ====================== EXAMPLE ======================
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface UserState {
  userLogin: any;
  isLoggedIn: boolean;
}
