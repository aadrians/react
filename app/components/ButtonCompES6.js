import React, { Component } from 'react';

class ButtonCompES6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.clicked) {
      return (<button onClick={ this.handleClick }>Clicked</button>);
    } else {
      return (<button onClick={ this.handleClick }>Not clicked</button>);
    }
  }

  handleClick() {
    this.setState({
      clicked: !(this.state.clicked),
    });
  }
}

export default ButtonCompES6;
