import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <button className="btn grey">CLick Me</button>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
