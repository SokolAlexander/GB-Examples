import { createStore, combineReducers } from 'redux';

import { reducer as postsReducer } from './post/reducer';

const store = createStore(combineReducers({
  posts: postsReducer,
}));

export default store;
