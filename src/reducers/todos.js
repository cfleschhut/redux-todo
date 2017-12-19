import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

    case REMOVE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.id
      });

    default:
      return state;
  }
};

export default todos;
