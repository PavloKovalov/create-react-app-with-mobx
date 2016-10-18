import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';
import './index.css';

const store = new TodoList();

ReactDOM.render(
  <section className="lol">
    <App store={ store } />
  </section>, // JSX JavaScript eXtension
  document.getElementById('root')
);
