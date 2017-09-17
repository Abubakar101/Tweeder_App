import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
  render() {
    return (
      <div >
      {this.props.data.map( tweed => {
        return <Tweed tweed={tweed} key={tweed.id} />
      })}
    </div>
    );
  }
}

export default TweedrFeed;
