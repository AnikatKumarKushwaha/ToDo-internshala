import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

function App() {
  ///////todo array
  let [todos, setTodoes] = useState([]);

  //////Add ToDo functionality
  function addTodo(toDo) {
    let newTodo = [...todos, { id: Date.now(), text: toDo, completed: false }];
    setTodoes(newTodo);
  }

  ///////Delete Todo Functionality
  function deleteTodo(id) {
    setTodoes(todos.filter((item) => item.id !== id));
  }

  ///////Toggle Complete Todo functionality
  function toggleComplete(id) {
    setTodoes(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  //////Edit ToDo functionality
  function editTodo(id, data) {
    setTodoes(
      todos.map((item) => {
        if (item.id == id) {
          return { ...item, text: data };
        }
        return item;
      })
    );
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500">
        <div className="h-full sm:h-[90%] bg-white shadow-lg w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] rounded-md overflow-y-hidden">
          <Header addTodo={addTodo} />
          <ToDoList
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
