import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

export default function Header({ addTodo }) {
  let [newTodo, setNewTodo] = useState("");

  ///////Add New Todo functionality
  function handelSubmit() {
    if (newTodo.length == 0) return;

    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <header className="px-2 sm:px-5 md:px-20 py-5">
      {/* ********heading text******* */}
      <h1 className="text-center text-2xl font-bold pb-10 text-slate-600">
        TODO LIST
      </h1>

      <div className="flex gap-4">
        {/* ********Add new todo input******* */}
        <input
          type="text"
          placeholder="Add List"
          className="border-2 border-slate-400 w-[80%] rounded-md px-2 py-1 text-slate-500"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        {/* ********Submit buttopn******* */}
        <button
          className="border-2 border-blue-400 px-8 py-2 rounded-sm flex justify-center items-center gap-1  text-blue-400 hover:bg-blue-400 hover:text-blue-50"
          onClick={handelSubmit}
        >
          <IoIosAdd size={20} />
          ADD
        </button>
      </div>
    </header>
  );
}
