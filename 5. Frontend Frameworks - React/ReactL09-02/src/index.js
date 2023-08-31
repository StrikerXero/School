import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";


const { Provider } = ReactRedux;

const reducer = (state = 'not started', action) => {
    switch(action.type) {
      case 'STARTED':
        return 'started';
      case 'COMPLETED':
        return 'completed';
    }
    return state;
}

const store = Redux.createStore(reducer);

let StatusDisplay = (props) => {
  return (
    <div>
      <p>{props.status}</p>
      <button onClick={waitTwoSecondsThenDispatch}>Start Dispatch</button>
    </div>
  );
};

const waitTwoSecondsThenDispatch = () => {
  store.dispatch({ type: "STARTED" });
  setTimeout(() => store.dispatch({ type: "COMPLETED" }), 2000);
};

const mapStateToProps = (state) => ({ status: state });

StatusDisplay = ReactRedux.connect(mapStateToProps)(StatusDisplay);

ReactDOM.render(
  <Provider store={store}>
    <StatusDisplay />
  </Provider>,
  document.getElementById("root")
);
