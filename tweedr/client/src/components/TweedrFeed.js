import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
  render() {
    return (
      <div className="tweeds">
      { this.props.data.map( tweed => {
        console.log(tweed.tweed_text)
        return <Tweed tweed={tweed} key={tweed.id} />
      })}
    </div>
    );
  }
}

export default TweedrFeed;

