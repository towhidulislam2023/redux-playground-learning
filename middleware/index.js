// product reducer
// product constant
const { createStore , applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct: 2,
};

// products actions
const getProductsAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    playload: product,
  };
};
// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.playload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
      return state;
  }
};

// store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductsAction());
store.dispatch(addProduct("RICE"));
