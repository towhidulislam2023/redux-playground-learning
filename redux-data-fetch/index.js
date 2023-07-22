// async action - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux thunk
// axios -api

const { default: axios } = require("axios");
const { createStore , applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL="https://jsonplaceholder.typicode.com/todos"

//state
const initialTodosState = {
  todos: [],
  isloading: false,
  error: null,
};
//action
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

// reducer
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isloading: true,

      };

    case GET_TODOS_SUCCESS:
        return {
            ...state,
            isloading: false,
            todos:action.payload
            
          };

    case GET_TODOS_FAILED:
        return {
            ...state,
            isloading: false,
            error:action.payload
            
          };

    default:
      return state;
  }
};

// async Action creator 

const fetchData=()=>{
    return (dispatch)=>{
        dispatch(getTodosRequest());
        axios.get(API_URL)
        .then(res=>{
            const todos=res.data;
            const title= todos.map(todo=> todo.title)
            // console.log(title);
            // console.log(res.data);
            dispatch(getTodosSuccess(title))
        })
        .catch((error)=>{
            const errorMessage =error.message
            dispatch(getTodosFailed(errorMessage))
        })



    }

}


// store
const store=createStore(todosReducer, applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchData())