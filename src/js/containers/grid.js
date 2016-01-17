import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
// import * as GridActions from '../actions/grid.js';
import * as CellActions from '../actions/cell.js';
import { bindActionCreators } from 'redux';
import Grid from '../components/grid.js';

console.log("CELL", CellActions.toggleAlive);

class GridContainer extends Component {
  render() {
    const { dispatch, cellArray} = this.props;
    // const GridActions = bindActionCreators(GridActions, dispatch)
    const CellActions = bindActionCreators(CellActions, dispatch)
    // const actions = {...GridActions, ...CellActions};

    return <Grid cellArray={cellArray} toggleAlive={CellActions.toggleAlive}/>
  }
}

GridContainer.propTypes = {
  cellArray: PropTypes.array,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  console.log("STATE", state);
  const {grid: {newCellArray}} = state
  return {
    cellArray: newCellArray
  }
}

export default connect(mapStateToProps)(GridContainer);
