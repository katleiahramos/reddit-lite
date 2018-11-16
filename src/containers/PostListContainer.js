import React, { Component } from "react";
import PostList from "../components/PostList";

class PostListContainer extends Component {
  state = {
    posts: []
  };

  render() {
    return <PostList />;
  }
}

export default PostListContainer;
