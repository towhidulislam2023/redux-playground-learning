//state - count -0
// action - increment , decrement , reset
// reducer
//store
// --------------------------------------
// requre redux
const { createStore } = require("redux");

// constant

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_COUNT_BY_VALUE = "INCREMENT_COUNT_BY_VALUE";
const ADD_USER = "ADD_USER";

const initialState = {
  count: 1,
  users: ["anis"],
};
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};
const incrementByValue = (value) => {
  return {
    type: INCREMENT_COUNT_BY_VALUE,
    playload: value,
  };
};
const addUser = (user) => {
  return {
    type: ADD_USER,
    playload: user,
  };
};
const adduserResucer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users,action.playload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

//  const counterReducer=(state = initialState, action)=>{
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count:state.count+1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count:state.count-1
//             }
//         case INCREMENT_COUNT_BY_VALUE:
//             return {
//                 ...state,
//                 count:state.count+action.playload
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count:0
//             }

//         default:
//             state;
//     }

//  }

// store
const store = createStore(adduserResucer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addUser("Towhid"));
store.dispatch(addUser("Tamim"));
//  store.dispatch(incrementCounter())
//  store.dispatch(incrementCounter())
//  store.dispatch(incrementCounter())
//  store.dispatch(incrementCounter())
//  store.dispatch(decrementCounter())
//  store.dispatch(resetCounter())
//  store.dispatch(incrementByValue(5))
//  store.dispatch(incrementByValue(15))
