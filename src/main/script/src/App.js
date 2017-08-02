import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    handleSubmit = (event) => {
      this.setState( {request: event.target.value} )
    };

    handleChange = (event) => {
      event.preventDefault();
      var request = this.state.request.trim();
      if(!request) {
        return;
      }
      fetch(`/echo?request=${request}`)
          .then(response => {
            return response.text();
          })
          .then(body => {
            alert(body)
          });
    };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Do you hear an echo ?</h2>
        </div>
        <div>
          <form className="App-intro" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange}/>
            <input type="submit" value="Echo"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
