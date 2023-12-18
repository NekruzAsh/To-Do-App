"use client";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center">
  <div>
    <h1 className="uppercase py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500">To-do App</h1>
  </div>
  <div className="bg-purple-300 p-6 rounded-md shadow-md shadow-gray-500 mt-[70px]">
    <div className="grid lg:grid-cols-2 lg:gap-6">
      <textarea
        className="shadow-sm shadow-gray-500 rounded-sm border-2 border-gray-300 w-68 h-40 p-4"
        placeholder="Type your note..."
        name="text"
      ></textarea>

      <ul className="text-purple-600 text-center text-2xl mt-6 lg:mt-12">
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-purple-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <li className="relative text-black group-hover:text-white">
            Make a note
          </li>
        </button>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Navbar;
