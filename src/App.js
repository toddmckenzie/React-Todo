import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
//import Todo from './components/TodoComponents/Todo';

let addedTask = '';

const itemsTodo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817224358,
    completed: true
  },
  {
  task: 'Sweep Garage',
  id: 1528813377286,
  completed: false
  },
  {
  task: 'sleep',
  id: 1528844084358,
  completed: true
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super();
      this.state = {
        todos: itemsTodo
      }
    }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos,
        {
        task:  addedTask,
        id: Date.now(),
        completed: false
      }
      ]
    });
  }

  toggleCompleted = id => {
    console.log(this.state.todos.id)
};


  clearCompleted = event => {
    this.setState({  todos: this.state.todos.filter(item => !item.completed )})
  }

  handleChange = event => {
     addedTask = event.target.value;
  }

  render() {

    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleCompleted} />
        {/*<Todo toggleTodo={this.toggleCompleted} />*/}
        <TodoForm add={this.addTodo} handle={this.handleChange} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
