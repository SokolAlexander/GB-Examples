export const ADD_POST = 'ACTIONS::ADD_POST';
export const REMOVE_POST = "ACTIONS::REMOVE_POST";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const removePost = (post) => ({
  type: ADD_POST,
  payload: post,
});
