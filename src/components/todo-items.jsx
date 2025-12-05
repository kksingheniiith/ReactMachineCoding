import { memo } from "react";

const TodoItem = memo(({ id, name, isCompleted, handleDelete, handleComeplete}) => {
  return (
    <div className="todo-items">
      <div className={`item ${isCompleted ? "completed" : ""}`}>
        <div className="status" onClick={() => handleComeplete(id, !isCompleted)}>{isCompleted ? <span>&#10003;</span> : ""}</div>
        <div className="name">{name}</div>
        <div className="delete-action" onClick={() => handleDelete(id)}>
          <span>&#10060;</span>
        </div>
      </div>
    </div>
  );
});

export default TodoItem;
