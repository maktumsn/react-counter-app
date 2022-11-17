import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    console.log("prevProps", prevProps);
  }
  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  render() {
    console.log("Counter-Rendered");
    return (
      <div>
        <span style={this.styles} className="badge bg-primary m-2 ">
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styles}
          className="badge bg-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={this.styles}
          className="badge bg-danger"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
