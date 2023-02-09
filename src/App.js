import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a todo app", completed: false },
    { text: "Profit", completed: false }
  ]);

  const addTodo = text => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo(e.target.elements.todo.value);
        e.target.elements.todo.value = "";
      }}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
