import React, { Component } from 'react';
import './AddNewMist.css';

class AddNewMist extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.firstExp = <div className="div1" onClick={this.handleClick}>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="center-div">
        <div>+</div>
        <div>Add a new mist</div>
      </div>
    </div>;
    this.secondExp = <div className="div2">

    </div>
    this.state = {
      currentScreen: 'first',
      middlePart: this.firstExp
    }
  }
  handleClick(e) {
    if (this.state.currentScreen === 'first') this.setState({ currentScreen: 'second', middlePart: this.secondExp })
    else this.setState({ currentScreen: 'first', middlePart: this.firstExp });
  }
  render() {
    return (<div className="base-right-div">{this.state.middlePart}</div>);
  }
}

export default AddNewMist;
