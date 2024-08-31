import ToDoItem from "./ToDoItem";

export default function ToDoList({
  todos,
  deleteTodo,
  editTodo,
  toggleComplete,
}) {
  return (
    <div className="mx-2 sm:mx-5 md:mx-20  h-[70%] flex flex-col ">
      <hr />
      {/* checking length and based on that displaying message or list */}
      {todos.length === 0 ? (
        <div className="text-center mt-20 text-slate-600">
          <h2 className="font-bold">No Todo Data 🥲</h2>
          <p>Add Some!</p>
        </div>
      ) : (
        <div className=" h-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-200">
                <th className="w-[25%] py-4">Complete</th>
                <th className="w-[50%]">ToDo</th>
                <th className="w-[50%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item) => (
                <ToDoItem
                  key={item.id}
                  toDo={item}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleComplete={toggleComplete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
