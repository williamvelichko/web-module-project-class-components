import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleAdditem = (itemTask) => {
    const newTodo = {
      task: itemTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.props.todos, newTodo],
    });
  };

  handleChanges = (e) => {
    console.log("working", this.state.input);
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleAdditem(this.state.input);
  };

  addItem = () => {
    console.log("adding");
  };

  deleteItem = () => {
    console.log("deleting");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type="text"></input>
        <button>add</button>
        <button onClick={this.deleteItem}>delete</button>
      </form>
    );
  }
}

export default ListForm;
