import React, { Component } from 'react';
// import React from "react";

class InputForm extends Component {
  render() {
    // console.log(this.props)
    return (
      <form className="userInput" onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          value={this.props.inputField}
          name="tweed_text"
          placeholder="Tweet Here"
          onChange={this.props.handleChange}
        />
        <br />

        <button type="submit" value="submit">
          tweeeed in
        </button>
      </form>
    );
  }
}
export default InputForm;
