import React, { Component } from 'react';


class Destroy extends Component {
  render() {
    return(
        <button
          className="destroyBtn"
          onClick={() =>{this.props.destroy(this.props.id)}}>
          x
        </button>
      )
  }
}
export default Destroy;