import {combineReducers} from 'redux';

import exampleReducer from './example/example.reducer';

const rootReducers = combineReducers({
  example: exampleReducer,
});

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;
