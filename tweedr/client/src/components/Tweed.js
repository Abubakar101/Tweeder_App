import React, { Component } from 'react';


class Tweed extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tweed.content !== this.props.tweed.content;
  }

  render() {
    // console.log('Q rendering');
    return (
      <div className="tweed">
        {this.props.tweed.tweed_text}
         <span>{this.props.tweed.tweed_time}</span>
      </div>
    )
  }
}
export default Tweed;
