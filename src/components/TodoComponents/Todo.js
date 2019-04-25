import React from 'react';



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
