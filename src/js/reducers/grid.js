import { RESET } from '../constants/ActionTypes.js';

function createCellArray(x, y){
  let cellArray = [];
  for (let i =0; i< y; i++) {
    cellArray[i] = [];
    for (let j=0; j<x; j++) {
      cellArray[i][j] = (Math.random() < 0.5);
    }
  }
  return cellArray;
}

const initialState = {
  newCellArray: createCellArray(5, 3)
};

export default function grid(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    default:
      return initialState;
  };

};
