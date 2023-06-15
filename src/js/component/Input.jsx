import React, { useState } from "react";

const Input = ({ onAdd }) => {
  const [inputValue, setinputValue] = useState("");

  const handleAdd = (e) => {
    if (
      (e.key === "Enter" && inputValue.trim() !== "") ||
      (e.type === "click" && inputValue.trim() !== "")
    ) {
      onAdd(inputValue);
      setinputValue("");
    }
  };

  return (
    <>
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
    </>
  );
};

export default Input;
