import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
//import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import localStorage from 'redux-persist/lib/storage';
//import logger from 'redux-logger';

import rootReducers from './reducer';

const middleware = [
  thunk,
  //logger, // Remove when build for production
];
const middlewareApply = applyMiddleware(...middleware);

const persistConfig = persistReducer(
  {
    key: 'root',
    storage: localStorage,
  },
  rootReducers,
);

export const store = createStore(
  persistConfig,
  middlewareApply, // Enabled when build production
  //composeWithDevTools(middlewareApply), // Enabled when build development
);

export const persistor = persistStore(store);
