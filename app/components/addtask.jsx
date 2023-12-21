import React from "react";
import {v4 as uuidV4} from "uuid";

const addTask = ({input, setInput, todos, setTodos}) => {
    const onIChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidV4(), title: input, completed: false}]);
        setInput("");
    };
  return (
   
    <div className="bg-purple-300 p-[70px] lg:p-[100px] rounded-md shadow-md shadow-gray-500 mt-[70px]">
      <div className="grid lg:grid-cols lg:gap-6">
        <form onSubmit={onFormSubmit}>
        <textarea
          className="shadow-sm shadow-gray-500 text-white rounded-sm border-2 border-gray-300 w-full min-h-[100px] p-4 h-full mt-[-35px] resize-none"
          placeholder="Type your note..."
          type="text"
          value={input}
          required
          onChange={onIChange} 
        ></textarea>

        <ul className="text-purple-600 text-center text-2xl mt-6 lg:mt-7">
          <button type="submit" className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-purple-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <li className="relative text-black group-hover:text-white">
              Make a note +
            </li>
          </button>
        </ul>
        </form>
      </div>
    </div>
    
  );
};

export default addTask;
