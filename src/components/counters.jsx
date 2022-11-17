import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    const { onReset, onDelete, onIncrement, counters } = this.props; //Argument Destructuring
    return (
      <div>
        <button
          onClick={onReset} //instead of this.props.onReset
          className="btn btn-primary btn-sm "
        >
          Reset
        </button>
        {counters.map(
          (
            counter // instead of this.props.counters
          ) => (
            <Counter
              key={counter.id}
              onDelete={onDelete} //instead of this.props.onDelete
              counter={counter}
              onIncrement={onIncrement} //instead of this.props.onIncrement
            />
          )
        )}
      </div>
    );
  }
}

export default Counters;
