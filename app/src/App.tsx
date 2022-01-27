import React, { FC, FormEvent, useEffect, useState } from 'react';
import AddTodo from './components/addTodo';
import Todos from './components/todos';
import TodoTypes from './components/utilities/todoTypes';

function App() {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [title, setTitle] = useState<string>('');
  useEffect(() => {
    getAllTodos();
  }, [])
  const getAllTodos = async() => {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const data = await res.json();
        setTodos(data.todos);
        console.log(data.todos)
      } catch (error) {
          console.log(error);
      }
  }
  const addTodo = async(e: FormEvent) => {
    e.preventDefault();
    interface Todo {
        title: string,
        completed: boolean
    }
    let todo: Todo = {
        title: title,
        completed: false
    }
    try {
        const res = await fetch("http://localhost:5000/todos", {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'content-type' : 'application/json'
            }
        }) 
        const data = await res.json()
        console.log(data)
        setTitle('')
    } catch (error) {
        console.error(error)
    }
  }
  const deletetodo = async(id: number) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
         method: 'DELETE'
       })
       const data = res.json();
       console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="max-w-xl m-auto mt-8">
       <AddTodo title={title} setTitle={setTitle} addhandler={addTodo} />
       <Todos todos={todos} deletehandler={deletetodo} />
    </div>
  );
}

export default App;
