const initialState = {
  count: 0,
  pressCount: 0,
  inputtedNumber: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        pressCount: state.pressCount + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        pressCount: state.pressCount + 1,
      };
    case "INPUTCHANGED":
      return {
        ...state,
        inputtedNumber: action.text,
      };
    case "INPUTCHANGECLICK":
      return {
        ...state,
        pressCount: 0,
        count: parseInt(state.inputtedNumber)
      };

    default:
      return state;
  }
}

export default counterReducer;
