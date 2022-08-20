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
    return (
     <div>
       <form action="`">
       <div><label htmlFor="password"> Password</label></div>
        <input
        name='password'
        onChange={this.handleInput}
        type="text" />
          <i className={icon}></i>
       </form>
     </div>
    );
  }
}
