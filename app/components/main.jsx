"use client";
import React from "react";
import { useState } from "react";

const TodoAPP = () => {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };


  return (

<div className="min-h-screen flex flex-col items-center justify-center">
  <div>
    <h1 className="uppercase py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500">To-do App</h1>
  </div>
  <div className="bg-purple-300 p-6 rounded-md shadow-md shadow-gray-500 mt-[70px]">
    <div className="grid lg:grid-cols-2 lg:gap-6">
      <textarea
        className="shadow-sm shadow-gray-500 text-white rounded-sm border-2 border-gray-300 w-full min-h-[100px] p-4 resize-none"
        placeholder="Type your note..."
        name="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      ></textarea>

      <ul className="text-purple-600 text-center text-2xl mt-6 lg:mt-7">
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
        onClick={addNote}>
          <div className="absolute inset-0 w-3 bg-purple-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <li className="relative text-black group-hover:text-white">
            Make a note +
          </li>
        </button>
      </ul>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mt-6">
  {notes.map((note, index) => (
    <div
      key={index}
      className="bg-yellow-200 p-4 rounded-md shadow-md max-w-md"
      style={{ wordWrap: 'break-word' }}
    >
      <p className="whitespace-pre-wrap">
        {note}
      </p>
      <button
        className="text-red-500 mt-2"
        onClick={() => deleteNote(index)}
      >
        Delete
      </button>
    </div>
  ))}
</div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="hover:text-white hover:bg-indigo-600">
        <td>Cy Ganderton</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

  );
};

export default TodoAPP;
