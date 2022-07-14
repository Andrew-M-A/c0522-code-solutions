import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount <= 3) {
      return (
      <button className="cold-button" onClick={this.handleClick}>COLD BUTTON :(</button>
      );
    } else if (this.state.clickCount <= 6) {
      return (
      <button className="less-cold-button" onClick={this.handleClick}> LESS COLD BUTTON :|</button>
      );
    } else if (this.state.clickCount <= 9) {
      return (
        <button className="warm-button" onClick={this.handleClick}> GETTIN WARMER!</button>
      );
    } else if (this.state.clickCount <= 12) {
      return (
        <button className="hot-button" onClick={this.handleClick}> WE HOT NOW!</button>
      );
    } else if (this.state.clickCount <= 15) {
      return (
        <button className="hotter-button" onClick={this.handleClick}> TOO HOT NOW!</button>
      );
    } else {
      return (
        <button className="white-hot-button" onClick={this.handleClick}> GG RIP x_X </button>
      );
    }
  }
}
