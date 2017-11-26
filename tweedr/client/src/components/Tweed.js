import React, { Component } from 'react';
import Destroy from './partials/Destroy';

class Tweed extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tweed.content !== this.props.tweed.content;
  }

  render() {
    console.log('Q rendering', this.props.tweed.id);
    return (
      <div className="tweed">
        {this.props.tweed.tweed_text}
         <span>{this.props.tweed.tweed_time}</span>
         <Destroy destroy={this.props.destroy} id={this.props.tweed.id}/>
      </div>
    )
  }
}
export default Tweed;
