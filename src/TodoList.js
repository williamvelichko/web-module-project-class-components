import React from "react";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((item) => {
        return <p>{item.task}</p>;
      })}
    </div>
  );
}

export default TodoList;
