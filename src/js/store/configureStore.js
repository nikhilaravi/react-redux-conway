import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import rootReducer from '../reducers/';

const finalCreateStore = compose(applyMiddleware(thunk, createLogger()))(createStore);

export default () => finalCreateStore(rootReducer);
