import { useState, useRef, useCallback } from "react";
import TodoItem from "./todo-items";
function Todo() {
  const [todoItems, setTodoItems] = useState([]);
  const inputRef = useRef(null);

  function onKeyUpHandler(e) {
    if (e.key === "Enter") {
      setTodoItems([
        ...todoItems,
        { id: Date.now(), name: inputRef.current.value, isCompleted: false },
      ]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  const handleDelete = useCallback((id) => {
    setTodoItems((prevTodoItem) =>
      prevTodoItem.filter((item) => item.id !== id)
    );
  }, []);

  const handleComeplete = useCallback((id, isCompleted) => {
    setTodoItems((prevTodoItem) =>
      prevTodoItem.map((item) =>
        item.id === id ? { ...item, isCompleted } : item
      )
    );
  }, []);

  return (
    <div className="todo-wrapper">
      <header>Todo List</header>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new task"
        onKeyUp={onKeyUpHandler}
        ref={inputRef}
      />
      <div className="todo-items">
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDelete={handleDelete}
            handleComeplete={handleComeplete}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
