import React from 'react';
import './Todo.css'


const Todo = (props) => {

  function toggle() {
    props.toggleTodo(props.item.id);
  }

  return (
      <p className="task" onClick={toggle}>{props.item}</p>
    )
}

export default Todo;


//<p onClick={props.toggleTodo} className="task">{props.item}</p>
