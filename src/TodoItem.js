import React from 'react';
import {observer} from 'mobx-react';

const TodoItem = observer(({ todo }) => (
  <li onClick={ () => todo.finished = !todo.finished }>
      <input type="checkbox" checked={ todo.finished }/>
      { todo.text }
  </li>
))

export default TodoItem;
