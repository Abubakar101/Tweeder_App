import React from 'react';

const InputForm = (props) => {
    // console.log(props)
  return(
    <form className="userInput"
      onSubmit={props.handleSubmit}
      >
      <input
       type="text"
       value={props.inputField}
       name="tweed_text"
       placeholder="Tweet Here"
       onChange={props.handleChange}
       />
      <br/>

      <button type="submit" value="submit">tweeeed in</button>
    </form>
    );
}
export default InputForm;