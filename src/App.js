import React from "react";
import { Provider } from 'react-redux';

import PostsList from "./components/PostsList";
import { posts } from "./constants";
import Router from "./components/Router";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router posts={posts} />
        </div>
      </Provider>
    );
  }
}
export default App;
