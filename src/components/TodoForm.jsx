import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./TodoForm.css";

export const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [todoIndex, setTodoIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const addTodoHandler = useCallback(() => {
    const oldTodos = [...todos];
    if (userInput === "") {
      return;
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: userInput,
      };
      const newTodos = oldTodos.concat(newTodo);
      setTodos(newTodos);
      console.log(newTodos);
    }
    setUserInput("");
  }, [todos, userInput]);

  const deleteTodoHandler = useCallback(
    (id) => {
      const oldTodos = [...todos];
      const newTodos = oldTodos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    [todos]
  );
  const editTodoHandler = useCallback((index) => {
    setTodoIndex(index);
    setEditing(true);
  }, []);
  const saveEditTodoHandler = useCallback(
    (id) => {
      setEditing(false);
      setTodoIndex(null);

      const oldTodos = [...todos];

      const newTodos = oldTodos.map((todo) => {
        if (todo.id === id) {
          if (editText !== "") {
            todo.text = editText;
          } else {
            return todo;
          }
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [editText, todos]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <span>
        Total Todos: <b>{todos.length}</b>
      </span>
      <input
        type="text"
        placeholder="add new todo..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        ref={ref}
      />
      <button onClick={addTodoHandler}>add todo</button>
      <StyledItemContainer>
        {todos.map((todo, index) => (
          <StyledItemContainerChild key={todo.id}>
            {editing && todoIndex === index ? (
              <form>
                <input
                  type="text"
                  defaultValue={todo.text}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEditTodoHandler(todo.id)}>
                  save{" "}
                </button>
              </form>
            ) : (
              <>
                <div>
                  <h4>{todo.text}</h4>
                </div>
                <div>
                  <MdDelete
                    className="icon"
                    onClick={() => deleteTodoHandler(todo.id)}
                  />
                  <MdEdit
                    className="icon"
                    onClick={() => editTodoHandler(index)}
                  />
                </div>
              </>
            )}
          </StyledItemContainerChild>
        ))}
      </StyledItemContainer>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  min-height: 80vh;
  background-color: #0c0a3e;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #f9564f;
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    b {
      color: #fff;
    }
  }
  input {
    font-size: 18px;
    border-radius: 5px;
    padding: 5px;
    width: 200px;
    margin-top: 10px;
  }

  button {
    padding: 5px;
    color: #fff;
    background-color: #f9564f;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 10px;
    outline: none;
    border: none;
    font-weight: bold;
  }
`;

const StyledItemContainer = styled.div`
  color: #fff;
  width: 40%;
`;
const StyledItemContainerChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #f9564f;
  margin: 12px 0 10px 0;
  border-radius: 5px;
  div > h4 {
    margin-left: 10px;
  }
`;
