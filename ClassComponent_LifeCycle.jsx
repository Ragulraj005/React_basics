import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor - Component is being initialized.");
  }

  componentDidMount() {
    console.log("componentDidMount - Component is mounted to the DOM.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate - Component has been updated.");
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log("render - Component is rendering.");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
