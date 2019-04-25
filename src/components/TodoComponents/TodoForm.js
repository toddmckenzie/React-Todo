import React from 'react';


const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.add} onChange={props.handle}>
        <input type="text" value={props.task} placeholder="todo" name="task"></input>
        <button>Add Todo</button>
      </form>
      <button onClick={props.clearCompleted}>ClearCompleted</button>
    </div>
  )
}

export default TodoForm;
