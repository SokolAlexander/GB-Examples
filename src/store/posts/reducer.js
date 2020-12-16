import { ADD_POST, REMOVE_POST } from "./actions";

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
