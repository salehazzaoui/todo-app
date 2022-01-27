import React from 'react';
import Todo from './todo';
import TodoTypes from './utilities/todoTypes';

interface Props{
    todos: TodoTypes[],
    deletehandler: (id: number) => void
}

function Todos({todos, deletehandler}: Props) {
  return <div className='grid grid-cols-1 gap-2 my-2'>
      {todos.map((todo: TodoTypes) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} deletehandler={deletehandler} />
      ))}
  </div>;
}

export default Todos;
