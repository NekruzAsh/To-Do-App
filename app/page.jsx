"use client";
import React, { useState } from "react";
import AddTask from "./components/addtask.jsx";
import TodoList from "./components/todoList.jsx";

export default function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center">
        
          <h1 className="uppercase py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500">
            To-do App
          </h1>
      
        <AddTask
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </main>
  );
}
