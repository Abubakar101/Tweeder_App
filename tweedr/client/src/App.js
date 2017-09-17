import React, { Component } from "react";
import TweedrFeed from "./components/TweedrFeed";
import axios from "axios";
import "./App.css";
import InputForm from "./components/Input";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      inputField: "",
      timeField: ""
    };

    this.handleInputListener = this.handleInputListener.bind(this);
    this.handleSubmitListener = this.handleSubmitListener.bind(this);
  }

  componentDidMount() {
    axios("/api/tweeds").then(res => {
      console.log(res.data.data.tweeds);
      this.setState({
        data: res.data.data.tweeds
      });
    });
  }

  handleInputListener(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  handleSubmitListener(event) {
    // event.preventDefault();
    event.target.content = "";

    axios
      .post("/api/tweeds", {
        tweed: this.state.inputField
      })
      .then(res => {
        if (res.data.data.tweed.id !== undefined) {
          console.log(res.data.data.tweed.id)
          const newTweed = {
            tweed_text: res.data.data.tweed.tweed_text,
            id: res.data.data.tweed.id
          };
          this.setState(prevState => {
            console.log(prevState)
            return {
              data: prevState.data.concat(newTweed)
            };
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="logo" />
        <div className="title">TWEEDR</div>
        <div className="subTitle">What Ya Thinking? ha?</div>
        <InputForm
          inputField={this.state.inputField}
          handleChange={this.handleInputListener}
          handleSubmit={this.handleSubmitListener}
        />
        
          <TweedrFeed data={this.state.data} />
      
      </div>
    );
  }
}

export default App;
