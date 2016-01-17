import { RESET } from '../constants/ActionTypes.js';

const initialState = {
  newCellArray: [true, false, false],
};

export default function grid(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case CELL
    default:
      return initialState;
  };

};
