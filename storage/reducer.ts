import {combineReducers} from 'redux';

import exampleReducer from './example/example.reducer';
import userReducer from './user/user.reducer';

const rootReducers = combineReducers({
  example: exampleReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;
