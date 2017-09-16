import React, { Component } from 'react';
const InputFrom = (props) => {
  return(
    <form className="inputForm"
      onSubmit={props.handleSubmit}
      >
      <input
       type="text"
       value={props.inputField}
       name="tweed_text"
       placeholder="Tweet Here"
       onchange={props.handleChange}
       />
      <br/>
      <button type="submit" value="submit">Tweet</button>
    </form>
    );
}
export default InputForm;
