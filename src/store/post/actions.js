export const ADD_POST = 'posts::ADD_POST';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});
