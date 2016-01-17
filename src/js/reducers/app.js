import { STOP, START, RESET } from '../constants/ActionTypes.js';

const initialState = false;

export default function grid(state = initialState, action) {

  switch (action.type) {
    case STOP:
      return false;
    case START:
      return true;
    case RESET:
      return false;
    default:
      return initialState;
  };
};
