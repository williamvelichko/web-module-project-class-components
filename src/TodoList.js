import React from "react";
import Item from "./Item";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((item) => (
        <Item toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
