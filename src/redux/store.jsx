import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  isDarkTheme: true,
  todos: [{ title: "Cook Food" }],
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        isDarkTheme: action.palyoad,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { title: action.payload }],
      };
    // remove todo item
    case "REMOVE_TODO":
      const todo = [...state.todos];
      todo.splice(action.palyoad, 1);
      return {
        ...state,
        todos: todo,
      };
    // edit todo
    case "EDIT_TODO":
      return {
        ...state,
        edit: action.palyoad,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const dispatch = store.dispatch;
export { dispatch };

export default store;
