import React, { useState, useContext, useCallback } from "react";
import { MyThemeContext, THEMES } from "../App";
import { addPost } from '../store/posts/actions';
import "./Button.styles.css";
import { useDispatch, useSelector } from "react-redux";

export default function Button(props) {
  // const [value, setValue] = useState(0);
  // const handleClick = () => setValue((oldvalue) => oldvalue + 1);
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  console.log(posts);

  const addNewPost = useCallback(() => {
    dispatch(addPost({title: 'title', text: 'text'}));
  }, [dispatch]);

  return (
    <div
      className={"genButton light"}
      onClick={addNewPost}
    >
      {props.children}
    </div>
  );
}




// export const withLocalStorage = (loacalStorageItem) => (Component) => {
//   return ({ ...props }) => {
//     console.log(props);
//     const animal = localStorage.getItem(loacalStorageItem);

//     return <Component {...props} animal={animal} />;
//   };
// };
