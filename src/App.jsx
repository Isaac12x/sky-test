import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScheduleVisualizerContainer from './ScheduleVisualizerContainer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      selectedDate: null,
      channel: '',
      schedule: []
    };
  }

  handleSelection = (event, {value}) => {
      this.setState({channel: value})
  }

  // this is a better form of binding
  handleFormSubmit = (e) => {
    this.setState({error: null})
    e.preventDefault();

    if (this.state.channel === '' || e.target[1].value === '') {
      this.setState({error: true});
      return;
    }

    const date = e.target[1].value

    const url = 'http://localhost:3001/schedule-repo/api/v1/schedule?channel=' +
                 this.state.channel + '&date=' + date
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    })
    .then(res => {
      // it's better to do this in two different staetments but for the sake of conciseness...
      res.json().then((val) => {
        this.setState({schedule: val[0].slots})
      })
    })
  }

  handleDateChange = (date) => {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    const { error, selectedDate, schedule } = this.state;
    return (
      <div className="App">
          <ScheduleVisualizerContainer
            error={error}
            selectedDate={selectedDate}
            schedule={schedule}
            handleFormSubmit={this.handleFormSubmit}
            handleDateChange={this.handleDateChange}
            handleSelection={this.handleSelection}
          />
      </div>
    );
  }
}

export default App;
