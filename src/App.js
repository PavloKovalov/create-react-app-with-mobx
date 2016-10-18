import React, { Component } from 'react';
import {observer} from 'mobx-react';

import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';

@observer
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>ToDo list { this.props.store.todos.length}:</h2>
        <ul>
        { this.props.store.todos.map((todo, i) =>
          <TodoItem todo={ todo } key={ todo.i} />
        ) }
        </ul>
      </div>
    );
  }
}

export default App;
