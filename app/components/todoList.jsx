import React from 'react'

const todoList = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo) => (

            <li className='' key={todo.id}>
                <input type="text" value={todo.title} className='list' onChange={(event) => event.preventDefault()} />
            </li>
        ))}
    </div>
  );
};

export default todoList