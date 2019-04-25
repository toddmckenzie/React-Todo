import React from 'react';



const Todo = (props) => {
  return (
      <p onClick={props.toggleTodo}>{props.item}</p>
  )
}

export default Todo;
