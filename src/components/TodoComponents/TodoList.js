// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

/*  this works.
const TodoList = (props) => {
  return (
    <div>{props.todos.map(item =>
      <p>{item.task}</p>
    )}</div>
  )
}
*/

const TodoList = (props) => {
  return (
    <div>{props.todos.map(item =>
      <Todo item={item.task} key={item.id}  />
    )}</div>
  )
}


export default TodoList;
