import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PostsList from "../PostsList";
import Post from "../Post";

export default function Router({ posts }) {
  return (
    <BrowserRouter>
      <PostsList posts={posts} />
      <Switch>
        <Route path="/posts/:id">
          <Post posts={posts} />
        </Route>
        <Route exact path="/" render={() => <span>select a post</span>} />
        {/* <Route render={() => <span>No such page</span>} /> */}
        <Redirect to={`/posts/${posts[0].id}`} />
      </Switch>
    </BrowserRouter>
  );
}
