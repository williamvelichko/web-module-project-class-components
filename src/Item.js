import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className={`item${props.item.purchased ? " purchased" : ""}`}>
        <p>{props.item.task}</p>
      </div>
    );
  }
}
export default Item;
