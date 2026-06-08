import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [Todo, setTodo] = useState("");

  const [Todolist, setTodolist] = useState(() => {
    const savedTodos = localStorage.getItem("wishlist");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(Todolist));
  }, [Todolist]);

  const onTodoInputChange = (e) => {
    setTodo(e.target.value);
  };

  const onAddTodoClick = () => {
    if (!Todo.trim()) return;
    setTodolist([...Todolist, { id: uuid(), todo: Todo, isCompleted: false }]);
    setTodo("");
  };

  const onDeleteClick = (id) => {
    const updatedtodolist = Todolist.filter((todo) => todo.id !== id);
    setTodolist(updatedtodolist);
  };

  const onTodoCheckChange = (id) => {
    const updatedtodolist = Todolist.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );
    setTodolist(updatedtodolist);
  };

  return (
    <>
      <div className="app">
        <h1>My Wishlist</h1>
        <div>
          <input
            value={Todo}
            onChange={onTodoInputChange}
            placeholder="Add your wishlist here"
          />
          <button onClick={onAddTodoClick}>Add</button>
        </div>
        <div>
          {Todolist.length === 0 ? (
            <p>No items in wishlist yet.</p>
          ) : (
            Todolist.map((item) => (
              <div key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => onTodoCheckChange(item.id)}
                  />
                  <span className={item.isCompleted ? "completed" : ""}>
                    {item.todo}
                  </span>
                </label>
                <button onClick={() => onDeleteClick(item.id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
