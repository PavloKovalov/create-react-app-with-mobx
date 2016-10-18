import {observable, computed} from 'mobx';

export default class TodoList {
    @observable todos = [
      {
        text: 'buy milk',
        finished: false
      },
      {
        text: "sell drugs",
        finished: true
      }
    ];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
