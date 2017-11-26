import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
  render() {
    return (
      <div className="tweeds">
      { this.props.data.map( tweed => {
        {console.log(tweed)}
        return <Tweed tweed={tweed} key={tweed.id} destroy={this.props.destroy}/>
      })}
    </div>
    );
  }
}

export default TweedrFeed;

