"use client";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="w-64 h-64">
      {/* Dynamic Resizing Text Box */}
      <textarea
        type="text"
        className="w-full h-full px-6 py-10 border rounded-lg border-purple-400 text-md resize-y flex items-center justify-center"
        style={{ height: "auto" }}
        placeholder="Type your note..."
      />

      <ul className="text-purple-600 text-center text-2xl">
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-purple-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <li className="relative text-black group-hover:text-white">
            Make a note
          </li>
        </button>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
