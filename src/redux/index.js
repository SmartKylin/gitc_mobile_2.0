import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initState => {
  return createStore(
    createReducer(),
    initState,
    composeEnhancers(applyMiddleware(thunk))
  );
};
