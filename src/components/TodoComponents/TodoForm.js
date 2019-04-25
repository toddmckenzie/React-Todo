import React from 'react';
import './Todo.css'

const TodoForm = props => {
  return (
    <div className="form">
      <form onSubmit={props.add} onChange={props.handle}>
        <input type="text" value={props.task} placeholder="todo" name="task"></input>
        <button>Add Todo</button>
      </form>
      <button onClick={props.clearCompleted} className="clear">ClearCompleted</button>
    </div>
  )
}

export default TodoForm;
