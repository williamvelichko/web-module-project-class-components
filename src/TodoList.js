import React from "react";
import Item from "./Item";

function TodoList(props) {
  const handleClick = () => {
    props.toggleItem(props.item);
  };

  return (
    <div
    //   onClick={props.toggleItem}
    //   className={`item${item.completed ? " completed" : ""}`}
    >
      {props.todos.map((item) => {
        return (
          <p
            onClick={handleClick}
            className={`item${item.completed ? " completed" : ""}`}
          >
            {item.task}
          </p>
        );
      })}
    </div>
  );
}

export default TodoList;
