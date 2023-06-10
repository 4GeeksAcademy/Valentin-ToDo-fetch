import React, { useState } from "react";
import "../styles/index.css";
import Todos from "./Todos.jsx";
import Input from "./Input.jsx";

//create your first component
const Home = () => {
  const [todo, setTodo] = useState([]);

  return (
    <div className="main text-center">
      <Input todo={todo} setTodo={setTodo} />
      <div className="list">
        <ul>
          <Todos todo={todo} setTodo={setTodo} />
        </ul>
      </div>
    </div>
  );
};

export default Home;
