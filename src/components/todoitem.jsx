import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim() === "") return;
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
          />
          <div className="edit-buttons">
            <button onClick={handleSave} className="save-btn">
              💾
            </button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">
              ❌
            </button>
          </div>
        </>
      ) : (
        <>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <div className="action-buttons">
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              ✏️
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
