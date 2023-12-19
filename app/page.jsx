import Image from "next/image";
import AddTask from "./components/addtask.jsx"; 


export default function Home() {
 
  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div>
          <h1 className="uppercase py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500">
            To-do App
          </h1>
        </div>
        <AddTask /> 
       
      </div>
    </main>
  );
}
