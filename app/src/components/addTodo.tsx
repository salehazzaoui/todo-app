import { Dispatch, FormEvent, SetStateAction, useState} from 'react';

interface Props{
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    addhandler: (e: FormEvent) => Promise<void>
}

function AddTodo({title, setTitle, addhandler}: Props) {
    const addTodo = (e: FormEvent) => {
        addhandler(e)
    }
  return <form className='flex items-center space-x-2' onSubmit={addTodo}>
      <input type="text" placeholder='Add title' 
             className='p-2 rounded-sm w-full bg-slate-100 focus:outline-indigo-400' 
             value={title}
             onChange={(e) => setTitle(e.target.value)} />
      <button type="submit" className='p-2 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-md text-white'>Add</button>
  </form>;
}

export default AddTodo;
