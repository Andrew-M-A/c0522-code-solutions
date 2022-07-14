import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    if (this.state.isOn === false) {
      return (
      <div className="row">
     <div className='input'>
       <div className='slider' onClick={this.handleClick}></div>
     </div>
          <span>OFF</span>
     </div>
      );
    } else {
      return (
        <div className="row">
      <div className='input-on'>
        <div className='slider-on' onClick={this.handleClick}></div>
      </div>
          <span>ON</span>
      </div>
      );
    }
  }
}
