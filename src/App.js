import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Sep 21, 2018',
      offset: 0,
      newDeadline: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickDeadlineChange = this.onClickDeadlineChange.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 1000)
  }

  onChangeInput(e) {
    const currentInput = e.target.value;
    this.setState(() => ({newDeadline: currentInput}))
  }

  onClickDeadlineChange() {
    const newDeadline = this.state.newDeadline;
    this.setState(() => ({ deadline: newDeadline }));
  }  

  render() {
    return (
      <div className="App">
        <h1>Countdown to {this.state.deadline}</h1>
        <input placeholder="Sep 21, 2018" onChange={this.onChangeInput}/>
        <button onClick={this.onClickDeadlineChange}>Change Deadline</button>
        <p><strong>Now:</strong> {new Date().toTimeString()}</p>
        <p>How long from now until the milestone?</p>
        <Clock deadline={this.state.deadline}/>
      </div>
    );  
  }
}

export default App;
