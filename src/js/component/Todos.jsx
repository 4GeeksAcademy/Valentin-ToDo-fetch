import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, setTodo }) => {
  const handleDelete = (i) => {
    const newTask = todo.filter((task, index) => index !== i);
    setTodo(newTask);
  };
  return (
    <>
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
    </>
  );
};

export default Todo;
