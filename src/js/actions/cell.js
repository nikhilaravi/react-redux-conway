
import * as types from '../constants/ActionTypes.js';

export function toggleAlive(x, y){
  return (dispatch, getState) => {
    const { cellArray: newCellArray } = getState();
    newcellArray[y][x] = !newcellArray[y][x];
    return dispatch(changeCellInArray(newcellArray));
  }
};

function changeCellInNewArray(newcellArray) {
  return { type: types.CELL_CHANGED, newcellArray}
};
