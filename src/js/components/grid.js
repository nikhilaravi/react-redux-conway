import React, { Component, PropTypes } from 'react';

import Cell from './cell.js';

class Grid extends Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log("props", this.props);
    const cells = this.props.cellArray.map((row, y) => {
      console.log("ROW", row)
      return (
        <div className="grid-row">
          {
            row.map((cell, x) => {
            return <Cell isAlive={cell} toggleAlive={this.props.toggleAlive.bind(null, x, y)} />
            })
          }
        </div>
      )
    })

    return (
      <div className="grid">
        {cells}
      </div>
    )
  };
};

Grid.propTypes = {
  cellArray: PropTypes.array,
  toggleAlive: PropTypes.func
};

export default Grid;
