'use client';
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { format, set } from "date-fns";
import { useState } from "react";


const Page = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 9999);
  };
  const handleKeyUp = (key) => {
    if (key === "Enter" && newTodo) {
      const randomNumber = getRandomNumber();
      const newItem = {
        id: `item-${randomNumber}`,
        content: newTodo,
      };
      setTodo(todo.concat(newItem));
      setNewTodo("");
    }
  };

  const handleDelete = (id) => {

    if (id > -1) {
      setTodo(todo.slice(0, id).concat(todo.slice(id + 1)))
    }
  };


  return (
    <div className="flex justify-center pt-40">
      <div className="max-w-sm w-full shadow-lg bg-gray-300 p-8 rounded-md">
        <div className="flex justify-center cursor-default bg-gray-200 rounded-3xl px-4 py-2 color-gray hover:scale-110 transition-all">
          <div className="w-full p-3">
            <h1 className="uppercase text-[45px] py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600">
              To-do App
            </h1>
            <p className="text-sm">{format(new Date(), "MMMM d, yyyy")}</p>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
            <FaCirclePlus size={25} />
          </div>
          <input
            type="text"
            id="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e.key)}
            className="block w-full pl-10 p-2 border-4 rounded-xl bg-gray-600 text-white "
            placeholder="add a task..."
          />
        </div>

        <ul className="block w-full pt-6 ">
          {todo?.map((item, index) => {
            return (
              <li key={item.id} className="w-full border-2 rounded-xl mt-2 hover:border-indigo-500 ">
                <input
                  type="checkbox"
                  id={index}
                  className="float-left block w-6 h-6 m-3 checkbox checkbox-primary"
                />
                <button
                  id={index}
                  onClick={() => handleDelete(index)}
                  className="float-right w-7 h-7 m-2.5 rounded-2xl bg-indigo-800 text-gray-100 shadow-md hover:bg-indigo-500 hover:scale-105"
                >
                  <MdDelete size={28} />
                </button>
                <label htmlFor={index} className="block w-full p-3 ">
                  {item.content}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page;
