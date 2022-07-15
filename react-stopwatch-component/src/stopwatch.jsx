import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      counter: 0,
      timer: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  handleClick() {
    if (this.state.isPaused && this.state.counter !== 0) {
      this.setState({ counter: 0 });
      this.stopTimer();
    } else if (this.state.isPaused) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000)
    });
    this.setState({ isPaused: !this.state.isPaused });
  }

  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({ isPaused: true });
  }

  render() {
    if (!this.state.isPaused) {
      return (
        <div className="row">
          <div className="timer" onClick={this.handleClick}>
            <h1>{this.state.counter}</h1>
          </div>
          <i className="fa-solid fa-pause fa-4x" onClick={this.handleClick}></i>
        </div>
      );
    } else {
      return (
      <div className="row">
      <div className="timer" onClick={this.handleClick}>
        <h1>{this.state.counter}</h1>
      </div>
        <i className="fas fa-play fa-4x" onClick={this.handleClick}></i>
      </div>
      );
    }
  }
}
