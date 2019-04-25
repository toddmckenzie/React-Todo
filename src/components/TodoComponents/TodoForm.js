import React from 'react';
import './Todo.css'

const TodoForm = props => {

/*  function handleSubmit() {
    event.preventDefault();
    this.setState({ input: '' })
  } */

  return (
    <div className="form">
      <form onSubmit={props.add} onChange={props.handle}>
        <input required type="text" value={props.task} placeholder="" name="task"></input>
        <button>Add Todo</button>
      </form>
      <button onClick={props.clearCompleted} className="clear">ClearCompleted</button>
    </div>
  )
}

// was onsubmit={props.add}  value={props.task}
export default TodoForm;
