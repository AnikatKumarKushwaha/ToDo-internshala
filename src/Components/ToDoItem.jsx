import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export default function ToDoItem({
  toDo,
  deleteTodo,
  editTodo,
  toggleComplete,
}) {
  /////if todo length is greater then 20 it slice the todo
  let sliceToDo =
    toDo.text.length > 20 ? toDo.text.slice(0, 30) + "..." : toDo.text;

  let [isEditing, setIsEditing] = useState(false);
  let [editText, setEditText] = useState(toDo.text);

  /////// update Todo functionality
  function handelEditing() {
    editTodo(toDo.id, editText);
    setIsEditing(!isEditing);
  }

  return (
    <tr className="w-full border-b border-slate-200 hover:bg-slate-100 transition-all duration-400">
      <td className="text-center py-4">
        {/* ***check box to check todo is completed or not**** */}
        <input
          type="checkbox"
          defaultChecked={toDo.completed}
          onChange={() => toggleComplete(toDo.id)}
        />
      </td>

      {/* ***Check wheteher we are editing todo or not**** */}
      {isEditing ? (
        <td>
          {/* ***input to update todo**** */}
          <input
            type="text"
            defaultValue={toDo.text}
            className="w-full px-2 py-1 border border-slate-400 rounded-md"
            onChange={(e) => setEditText(e.target.value)}
          />
        </td>
      ) : (
        <td className={`text-center ${toDo.completed && "line-through"}`}>
          {sliceToDo}
        </td>
      )}

      <td className="text-center">
        {/* edit button */}
        <button
          className="mr-2 p-1 hover:bg-blue-200 rounded-full transition-all duration-400"
          onClick={handelEditing}
        >
          <MdEdit className="text-blue-600 text-xl" />
        </button>

        {/* delete button */}
        <button
          className="p-1 hover:bg-red-200 rounded-full transition-all duration-400"
          onClick={() => deleteTodo(toDo.id)}
        >
          <MdDelete className="text-red-600 text-xl" />
        </button>
      </td>
    </tr>
  );
}
