import React, { useState } from 'react';
import { IoMdCheckbox } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const TodoList = ({ todos, setTodos }) => {
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter') {
      setEditingId(null);
      
    }
  };

  const getNoteStyle = (length) => {
    if (length > 150) {
      return {
        fontSize: '16px',
        margin: '10px 0',
      };
    } else {
      return {
        fontSize: '18px',
        margin: '15px 0',
      };
    }
  };

  return (
    <div className='mt-10 p-[16px] m-[200px]'>
      <table className="table">
        {/* Table headers */}
        <thead className='text-gray-400'>
          <tr>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows */}
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={todo.title}
                    className={`list edit-input ${todo.completed ? 'completed' : ''}`}
                    style={{ color: 'white' }} 
                    onChange={(event) =>
                      setTodos((prevTodos) =>
                        prevTodos.map((t) =>
                          t.id === todo.id ? { ...t, title: event.target.value } : t
                        )
                      )
                    }
                    onBlur={() => setEditingId(null)}
                    onKeyPress={(event) => handleKeyPress(event, todo.id)}
                  />
                ) : (
                  <div className={`list ${todo.completed ? 'completed' : ''}`}>
                    {todo.title}
                  </div>
                )}
              </td>
              <td>
                <div className='flex'>
                  <button className="text-gray-700" onClick={() => handleEdit(todo.id)}>
                    <FaEdit size={25} />
                  </button>
                  <button className="text-gray-700" onClick={() => handleDelete(todo.id)}>
                    <MdDelete size={25} />
                  </button>
                  <button
                    className="text-gray-700"
                    onClick={() => handleComplete(todo.id)}
                  >
                    <IoMdCheckbox size={25} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
