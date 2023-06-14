import React, { Component, Fragment } from 'react';
import Welcome from './Welcome';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {this.state.names.map((name, index) => (
          <Fragment key={index}>
            <Welcome name={name} />
          </Fragment>
        ))}
      </div>
    );
  }
}

export default App;
