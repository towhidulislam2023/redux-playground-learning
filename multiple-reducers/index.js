// product reducer
// product constant
const { combineReducers } = require("redux");
const { createStore } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_CART_ITEM="GET_CART_ITEM"
const ADD_CART_ITEM="ADD_CART_ITEM"

// states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct: 2,
};
const initialCartState={
    cart:["sugar"],
    numberOfProduct: 1,
}
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
// cart actions
const getcartAction = () => {
  return {
    type: GET_CART_ITEM,
  };
};

const addcart = (product) => {
  return {
    type: ADD_CART_ITEM,
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
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return {
        ...state,
      };

    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.playload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
      return state;
  }
};
//! very important  
const rootReducer= combineReducers({
    productR:productReducer,
    cartR:cartReducer
})

// store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductsAction());
store.dispatch(addProduct("RICE"));
store.dispatch(getcartAction());
store.dispatch(addcart("Rice"));
