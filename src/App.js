import React, { useState, useCallback, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import SomeChild from "./components/SomeChild";
import PureChild from "./components/PureChild";
import Button from "./components/Button";
import './imgs/logo192.png'
import { useSelector } from "react-redux";


export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

export const MyThemeContext = React.createContext({
  value: THEMES.LIGHT,
  change: () => {}
});

function App() {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [counter, setCounter] = useState(0);
  const state = useSelector(state => state);
  console.log(state);

  const changeTheme = useCallback(() => {
    setTheme(theme => theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  }, []);

  const handleClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  useEffect(() => {
    //localStorage.setItem('animal', 'cat');
  }, []);

  return (
    <MyThemeContext.Provider value={{ value: theme, change: changeTheme }}>
      <Button onClick={changeTheme}>
        <span style={{ fontStyle: "italic" }}>change theme</span>
      </Button>
      <Button>Text second</Button>
      <Button>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          style={{ width: 100, height: 50 }}
          alt=""
        />
      </Button>
      <Button children={<span>Lalala</span>} />
      <Button render={(v) => <span>Lalala: {v}</span>} />
      <SomeChild counter={counter} />
    </MyThemeContext.Provider>
  );
}

export default App;
