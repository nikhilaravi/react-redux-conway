import React, { Component, PropTypes } from 'react';

import Grid from '../containers/grid.js';

class App extends Component {

  constructor(props){
    super(props)
  }

  render(){
    console.log("PROPS", this.props)
    return (
      <div>
        <div>HELLO</div>
        <Grid/>
        <div className="control-button-container">
          <h1 onclick={this.props.start}>START</h1>
          <h1 onclick={this.props.stop}>STOP</h1>
          <h1 onclick={this.props.reset}>RESET</h1>
        </div>
      </div>
    )
 }
}

export default App;
