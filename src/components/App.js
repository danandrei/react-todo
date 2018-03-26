import React, { Component } from 'react'
import List from '../containers/List'
import ListControls from '../containers/ListControls'

class App extends Component {

  render() {
    return (
      <div>
        <List />
        <ListControls />
      </div>
    );
  }
}

export default App;
