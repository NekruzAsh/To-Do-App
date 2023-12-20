import React, { useState } from 'react';
import { IoMdCheckbox } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const TodoList = ({ todos, setTodos }) => {
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    // Set the editingId to enable editing mode for the corresponding note
    setEditingId(id);
  };

  const handleDelete = (id) => {
    // Add logic for deleting a todo item
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    // Add logic for marking a todo item as completed
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyPress = (event, id) => {
    // Save the edited note on Enter key press
    if (event.key === 'Enter') {
      setEditingId(null);
      // Implement logic to save the edited note (e.g., update the state)
    }
  };

  return (
    <div className=''>
      <table className="table">
        {/* Table headers */}
        <thead>
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
                    className={`list ${todo.completed ? 'completed' : ''}`}
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
                <div>
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
