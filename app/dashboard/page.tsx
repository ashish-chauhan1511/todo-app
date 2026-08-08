"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};

export default function DashboardPage() {
  const router = useRouter();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");

  // GET TODOS
  const getTodos = async () => {
    try {
      const response = await fetch("/api/todos");

      const data = await response.json();

      setTodos(data.todos || []);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD TODO
  const addTodo = async () => {
    if (!title.trim()) {
      alert("Please enter todo");
      return;
    }

    try {
      const response = await fetch("/api/todos", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setTitle("");

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE TODO
  const updateTodo = async (
    id: string,
    completed: boolean
  ) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          completed,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT TODO
  const editTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: editTitle,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setEditId("");
      setEditTitle("");

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE TODO
  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__container">

        <h1 className="dashboard__title">
          My Todos
        </h1>

        {/* ADD TODO FORM */}

        <div className="dashboard__form">

          <input
            className="dashboard__input"
            type="text"
            placeholder="Add new todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            className="dashboard__add-btn"
            onClick={addTodo}
          >
            Add Todo
          </button>

        </div>

        {/* TODO LIST */}

        <div className="dashboard__list">

          {todos.length === 0 ? (

            <p className="dashboard__empty">
              No todos found
            </p>

          ) : (

            todos.map((todo) => (

              <div
                className="dashboard__card"
                key={todo._id}
              >

                <div className="dashboard__content">

                  <input
                    className="dashboard__checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) =>
                      updateTodo(
                        todo._id,
                        e.target.checked
                      )
                    }
                  />

                  {editId === todo._id ? (

                    <div className="dashboard__edit">

                      <input
                        className="dashboard__edit-input"
                        type="text"
                        value={editTitle}
                        onChange={(e) =>
                          setEditTitle(e.target.value)
                        }
                      />

                      <button
                        className="dashboard__update-btn"
                        onClick={() => editTodo(todo._id)}
                      >
                        Update
                      </button>

                    </div>

                  ) : (

                    <h3 className="dashboard__todo-title">

                      {todo.completed ? (
                        <del>{todo.title}</del>
                      ) : (
                        todo.title
                      )}

                    </h3>

                  )}

                </div>

                <p className="dashboard__status">
                  {todo.completed
                    ? "Completed"
                    : "Pending"}
                </p>

                <div className="dashboard__actions">

                  <button
                    className="dashboard__edit-btn"
                    onClick={() => {
                      setEditId(todo._id);
                      setEditTitle(todo.title);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="dashboard__delete-btn"
                    onClick={() => deleteTodo(todo._id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>
    </div>
  );
}