import React, { Component, PropTypes } from 'react';

class Cell extends Component {

  render () {
    console.log("PROPS", this.props);
    const cssClass = this.props.isAlive ? 'cell-alive' : 'cell-dead';
    return (
      <div className={cssClass} onClick={this.props.toggleAlive}>
      </div>
    )
  }
};

Cell.propTypes = {
  isAlive: PropTypes.bool,
  toggleAlive: PropTypes.func
};

export default Cell;
