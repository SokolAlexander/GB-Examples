import React, { useMemo, useCallback } from "react";
import { connect, useSelector } from 'react-redux';
import { useParams, Redirect } from "react-router-dom";
import { addPost } from "../../store/post/actions";

function Post({ posts }) {
  const { id } = useParams();
  // console.log(posts, id);
  const postsFromStore = useSelector(state => state.posts.items);
  const dispatch = useDispatch();

  const post = useMemo(() => posts.find((p) => p.id === id), [posts, id]);

  const handleClick = useCallback(() => {
    dispatch(addPost({ title: 'new post', text:'new post' }));
  }, [addPost, dispatch]);

  if (!post) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>{post.title}</div>
      <div>{post.text}</div>
      <button onClick={handleClick} />
    </>
  );
}

// const mapStateToProps = (state) => ({
//   postsFromStore: state.posts.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addPost: (post) => dispatch(addPost(post)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Post);
