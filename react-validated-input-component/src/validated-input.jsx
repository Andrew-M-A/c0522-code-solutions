import React from 'react';

export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let icon;
    if (this.state.password) {
      icon = 'pass-green fa-solid fa-xmark fa-xl';
    } else {
      icon = 'pass-red fa-solid fa-xmark fa-xl';
    }

    let passText;
    if (this.state.password.length === 0) {
      passText = 'A password is required.';
    } else if (this.state.password.length < 8) {
      passText = 'Your password is too short';
    } else {
      passText = '';
      icon = 'pass-green fa-solid fa-check fa-xl';
    }

    return (
     <div className='pass-div'>
       <form action="`">
       <div><label htmlFor="password"> Password</label></div>
        <input
        className='input'
        name='password'
        onChange={this.handleInput}
        type="password" />
          <i className={icon}></i>
       </form>
        <span className='pass-text'>{passText}</span>
     </div>
    );
  }
}
