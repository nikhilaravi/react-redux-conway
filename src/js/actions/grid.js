
import * as types from '../constants/ActionTypes.js';

const neighbours = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];

function getNeighbours(cellArray, cell) {

  const [GridWidth, GridHeight] = [cellArray[0].length, cellArray.length];
  const [x, y] = cell;

  const cellNeighbours = neighbours.map(neighbourOffset => {
    const [dx, dy] = neighbourOffset;
    const Dy =  getNeighbourOffsetY(y, dy, GridHeight);// wrap the grid around for cells at the grid boundary
    const Dx =  getNeighbourOffsetX(x, dx, GridWidth);
    return cellArray[Dy][Dx];
  });

  return cellNeighbours;
};


function getNeighbourOffsetY(y, dy, GridHeight){
  if (y + dy === -1) {
    return GridHeight-1;
  } else if( y + dy === GridHeight ) {
    return 0;
  } else {
    return y + dy;
  }
}

function getNeighbourOffsetX(x, dx, GridWidth){
  if (x + dx === -1) {
    return GridWidth-1;
  } else if( x + dx === GridWidth ) {
    return 0;
  } else {
    return x + dx
  }
}

export function updateGrid(){

  return (dispatch, getState) => {
    const {app:active, grid: {newCellArray}} = getState();
    const tempCellArray = newCellArray.map((row, y) => {
      console.log("ROW", row);
      return row.map((cellState, x) => {
        const neighbours = getNeighbours(newCellArray, [x,y]); //array of cell neighbours

        const aliveCells = neighbours.filter(neighbour => neighbour === true).length;

        if (cellState && (aliveCells < 2 || aliveCells > 3)){
          return false;
        } else if (!cellState && aliveCells === 3){
          return true;
        } else {
          return cellState
        }
      });

    });

    return dispatch(updateCellArray(tempCellArray));
  }
};

function updateCellArray(newCellArray){
  return { type: types.UPDATE_CELL_ARRAY, newCellArray}
};
