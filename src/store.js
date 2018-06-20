import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../src/Chat/redux/reducers';

export function reducer(state = {}, action = {}) {
  return Object.assign({}, state, {
    messages: action.payload
  });
}

const middleWare = [thunk, createLogger()];

export const store = createStore(rootReducer, {}, applyMiddleware(...middleWare));
