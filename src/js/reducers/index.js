import { combineReducers } from 'redux';

import grid from './grid.js';
import app from './app.js';

const rootReducer = combineReducers({
  grid,
  app
});

export default rootReducer;
