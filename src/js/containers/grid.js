import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as GridActions from '../actions/grid.js';
import * as CellActions from '../actions/cell.js';
import { bindActionCreators } from 'redux';
import Grid from '../components/grid.js';
// const actionCreators = {...GridActions, ...CellActions}
class GridContainer extends Component {
  render() {
    const { toggleAlive, cellArray} = this.props;
    console.log("PROPS", this.props);
    return <Grid cellArray={cellArray} toggleAlive={toggleAlive}/>
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

export default connect(mapStateToProps, CellActions)(GridContainer);
