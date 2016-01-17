import React, { Component, PropTypes } from 'react';

class Cell extends Component {

  constructor(){
    super(props)
  }

  render () {
    console.log("PROPS", this.props.isAlive);
    const cssClass = this.props.isAlive ? 'cell-alive' : 'cell-dead';
    return (
      <div className={cssClass}>
      </div>
    )
  };
};

Cell.propTypes = {
  isAlive: PropTypes.bool,
  toggleAlive: PropTypes.func
};

export default Cell;
