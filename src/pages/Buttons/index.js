import React, { useState } from "react";
import "./buttons.css";
import { Button, Divider, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { dispatch } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Buttons() {
  const button = [
    <Button variant="text">Text</Button>,
    <Button variant="contained">Contained</Button>,
    <Button variant="outlined">Outlined</Button>,
  ];

  const [todoItem, setTodoItem] = useState("");

  //add todo
  const addTodo = (inpValue) => {
    if (todoItem.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: inpValue });
    setTodoItem("");
  };

  const todos = useSelector((state) => state.todos);

  // remove todo
  const removeTodo = (index) =>
    dispatch({ type: "REMOVE_TODO", payload: index });

  return (
    <div className="buttons">
      <section style={{ marginTop: "2rem" }}>{button}</section>

      <div className="todoApp">
        <div className="inpSection">
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => addTodo(todoItem)}
          >
            <AddIcon />
          </Fab>
        </div>
        <ul>
          {todos?.map((item, index) => (
            <>
              <li className="todoItem" key={index}>
                <span>{item.title}</span>
                <div className="todoItemIcons">
                  <EditIcon />
                  <span onClick={() => removeTodo(index)}>
                    <DeleteIcon style={{ marginLeft: "10px" }} />
                  </span>
                </div>
              </li>
              <Divider />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
