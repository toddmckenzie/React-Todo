import React from 'react';
import './Todo.css'


const Todo = (props) => {
  let classNames = 'task';
  if (props.item.completed){
    classNames += ' taskCompleted'
  }

  function toggle() {
    props.toggleTodo(props.item.id);
  }

  return (
      <p onClick={toggle} className={classNames}>{props.item.task}</p>
    )
}

export default Todo;


//<p onClick={props.toggleTodo} className="task">{props.item}</p>
