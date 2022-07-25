import React, { useEffect } from "react";
import "./user-todo.css";

const TodoList = () => {
  const [todos, setTodos] = React.useState(null);

  const fetchUserTodos = async () => {
    try {
      // delay for demo purposes
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const user = await response.json();
      return setTodos(user);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    // delay for demo purposes
    fetchUserTodos();
  }, []);

  return (
    <div className='todo-container'>
      <ul>
        {todos?.slice(0, 7)?.map(({ id, title, completed }) => {
          return (
            <li key={id}>
              <span className={`${completed && "line-through"}`}>{title}</span>
              <span
                className={`todo-status ${
                  completed ? "blue-text" : "red-text"
                }`}
              >
                {completed ? "Done" : "Pending"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
