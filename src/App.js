import React from "react";
import TodoList from "./TodoList";
import ListForm from "./ListForm";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: true,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  deleteItem = (e) => {
    e.preventDefault();

    this.setState({
      ...this.state,
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      }),
    });
  };

  toggleItem = (selectedItem) => {
    console.log("clicking");
    this.setState({
      ...this.state,
      todos: this.state.todos.map((item) => {
        if (item.id === selectedItem.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  handleAdditem = (itemTask) => {
    console.log("handle add item is working", itemTask);
    const newTodo = {
      task: itemTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <ListForm
          handleAdditem={this.handleAdditem}
          deleteItem={this.deleteItem}
        />
        {/* <button onClick={this.deleteItem}>delete</button> */}
      </div>
    );
  }
}

export default App;
