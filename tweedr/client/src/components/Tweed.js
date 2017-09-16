import React, { Component } from 'react';


class Tweed extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tweed.content !== this.props.tweed.content;
  }

  render() {
    console.log('Q rendering');
    return (
      <div className="tweed">
        <h2>{this.props.tweed.tweed_text} </h2>
        <h3> <span>{this.props.tweed.tweed_time}</span> </h3>
      </div>
    )
  }
}
export default Tweed;
