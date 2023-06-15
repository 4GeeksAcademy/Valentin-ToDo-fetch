import React, { useEffect, useState } from "react";
import "../styles/index.css";
import Todos from "./Todos.jsx";
import Input from "./Input.jsx";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/valentinfrar")
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.status);
        return resp.json();
      })
      .then((data) => setTodo(data))
      .catch((error) => console.log(error));
  };

  const updateTasks = (newTasks) => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/valentinfrar", {
      method: "PUT",
      body: JSON.stringify(newTasks),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.status);
        return resp.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleAdd = (newTask) => {
    const newTasks = [...todo, newTask];
    setTodo(newTasks);
    updateTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = todo.filter((_, i) => i !== index);
    setTodo(newTasks);
    updateTasks(newTasks);
  };

  const handleClearAll = () => {
    const newTasks = [];
    setTodo(newTasks);
    updateTasks(newTasks);
  };

  return (
    <div className="main text-center">
      <Input onAdd={handleAdd} />
      <div className="list">
        <ul>
          <Todos todo={todo} onDelete={handleDelete} />
        </ul>
      </div>
      <button className="btn-clear" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Home;
