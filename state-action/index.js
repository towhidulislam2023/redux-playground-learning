//? steps__
// 1. state
// 2. dispatch action
// 3. reducer
// 4. update

//defining constant

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
//state
const initiakCOunterState = {
  count: 0,
};

const initialUsersState = {
  user: [{ name: "Anisul Islam" }],
};

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

const addUser = () => {
  return {
    type: ADD_USER,
    playload: { name: "Amir Hossain" },
  };
};

