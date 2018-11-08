import React, { Component } from 'react';
import './App.css';

//displays error if the Google API doesn't render/pull correctly
class ErrorScreen extends Component {
  state = {
    errMsg: 'Error: Problem loading Google Maps API'
  }

  render() {
    return (
      <h1 className='error-screen-message'>{this.state.errMsg}</h1>
    )
  }
}

export default ErrorScreen;
