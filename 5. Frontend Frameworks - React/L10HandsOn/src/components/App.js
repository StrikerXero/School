import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  inputChangeClick,
  inputChanged,
} from "../actions/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          pressCount={this.props.pressCount}
          onInputChangeClick={this.props.onInputChangeClick}
          onInputChanged={this.props.onInputChanged}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputChanged: (text) => dispatch(inputChanged(text)),
    onInputChangeClick: (text) => dispatch(inputChangeClick(text)),
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    pressCount: state.pressCount,
    inputtedNumber: state.inputtedNumber,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
