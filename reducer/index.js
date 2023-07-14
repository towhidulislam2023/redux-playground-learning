//* reducer 

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//state
const initiakCounterState = {
  count: 0,
};

//* reducer
// action - object -type playLoad
const IncrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer for counter

const counterReducer = (state = initiakCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    //

    case DECREMENT:
        return {
            ...state,
            count: state.count - 1,
          };

    //

    default:
      state;
  }
};
