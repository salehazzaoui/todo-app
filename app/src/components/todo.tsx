import React from 'react';

interface Props{
    id: number,
    title: string,
    completed: boolean,
    deletehandler: (id: number) => void
}

function Todo({id, title, completed, deletehandler}: Props) {
  return <div className={`flex items-center justify-between ${!completed? 'bg-gray-100' : 'bg-fuchsia-500'} rounded-sm shadow-sm p-2 hover:bg-gray-200`}>
      <h3 className='text-md font-mono'>{ title }</h3>
      <div className='flex items-center space-x-1'>
          <button onClick={() => deletehandler(id)} className='bg-red-500 text-white p-2 text-sm rounded-sm hover:bg-red-600'>D</button>
          <button className='bg-orange-500 text-white p-2 text-sm rounded-sm hover:bg-orange-600'>C</button>
      </div>
  </div>;
}

export default Todo;
