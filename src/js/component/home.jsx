import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css";

//create your first component
const Home = () => {
  const [inputValue, setinputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = (e) => {
    if (
      (e.key === "Enter" && inputValue.trim() !== "") ||
      (e.type === "click" && inputValue.trim() !== "")
    ) {
      const newTask = [...todo, inputValue];
      setTodo(newTask);
      setinputValue("");
    }
  };

  const handleDelete = (i) => {
    const newTask = todo.filter((task, index) => index !== i);
    setTodo(newTask);
  };

  return (
    <div className="main text-center">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        onKeyUp={handleAdd}
      />
      <button className="btn-add" onClick={handleAdd}>
        Add
      </button>
      <div className="list">
        <ul>
          {todo.length === 0 ? (
            <li>No tasks. Add tasks, lazy!</li>
          ) : (
            todo.map((task, index) => (
              <li key={index}>
                <span className="tasks-added"> {task} </span>
                <FontAwesomeIcon
                  className="trash"
                  onClick={() => handleDelete(index)}
                  icon={faTrash}
                />{" "}
              </li>
            ))
          )}
          <span className="num-tasks">{todo.length} tasks</span>
        </ul>
      </div>
    </div>
  );
};

export default Home;
