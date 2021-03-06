import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './index.css'
//import Todo from './components/TodoComponents/Todo';

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
        todos: itemsTodo,
        task: ''
      }

    }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos,
        {
        task:  this.state.task,
        id: Date.now(),
        completed: false
      }
    ],
      task: ''
    });
  }

  toggleCompleted = id => {

    this.setState({
      todos: this.state.todos.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    });
};


  clearCompleted = event => {
    this.setState({  todos: this.state.todos.filter(item => !item.completed )})
  }

  handleChange = event => {
     this.setState({ task: event.target.value })

  }

  render() {

    return (
      <div className="container">
        <h2>Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleCompleted} />
        <TodoForm add={this.addTodo} handle={this.handleChange} clearCompleted={this.clearCompleted} task={this.state.task}/>
      </div>
    );
  }
}

export default App;
