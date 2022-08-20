import React from 'react';

export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInput: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ isInput: true });
    // console.log(event.key);
  }

  render() {
    return (
     <div>
       <label htmlFor="input"> Password
       <div> <input onKeyPress={this.handleInput} type="text" />
       </div>
       </label>
     </div>
    );
  }
}
