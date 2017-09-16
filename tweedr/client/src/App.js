import React, { Component } from 'react';
import TweedrFeed from './TweedrFeed';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      inputField: 0,
      timeField: ''
    }

    this.handleInputListener = this.handleInputListener.bind(this)
    this.handleSubmitListener = this.handleSubmitListener.bind(this)
  }

  componentDidMount() {
    axios('localhost:3001/api/tweeds')
    .then(res => {
        this.setState({
            data: res.data.tweeds
        })
    })
  }

  handleInputListener(event) {
    this.setState({
      inputField: event.target.value,
    })
  }

  handleSubmitListener(event) {
      event.preventDefault();
      event.target.content='';

      this.setState({
        timeField: event.targer.time
      })

      axios.post('localhost:3001/api/tweeds' , (req, res) => {
        tweed_text: this.state.inputField,
        tweed_time: this.state.time
      }).then(res => {
        if(res.data.quote.id !== undefined) {
            const newTweed = {
              tweed_text: res.data.quote.tweed_text,
              tweed_time: res.data.quote.tweed_time
          }

        this.setState(prevState => {
          return {
            data: prevState.data.concat(newTweed),
          }
        })
      }
    }).catch(err => console.log(err);)
  }

  render() {
    return (
      <div className="App">

        <TweedrFeed data={}>
      </div>
    );
  }
}

export default App;
