import { createStore, combineReducers } from "redux";

import postsReducer from './posts/reducer';

const store = createStore(
  combineReducers({
    posts: postsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
