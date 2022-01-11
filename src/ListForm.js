import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log("adding");
    e.preventDefault();
    this.props.handleAdditem(this.state.input);
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChanges} type="text"></input>
        <button onClick={this.handleSubmit}>add</button>
        <button onClick={this.props.deleteItem}>delete</button>
      </form>
    );
  }
}

export default ListForm;
