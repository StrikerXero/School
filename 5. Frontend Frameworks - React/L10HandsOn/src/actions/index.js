export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const inputChanged = (text) => ({
  type: "INPUTCHANGED",
  text,
});

//Click function
export const inputChangeClick = (text) => ({
  type: "INPUTCHANGECLICK",
  text,
});


