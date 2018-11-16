import React, { Component } from "react";
import PostList from "../components/PostList";

class PostListContainer extends Component {
  state = {
    posts: []
  };

//   fetchGIFs = (query) => {

//   }

  render() {
    return (
    <div className="PostListContainer">
      <PostList />
    </div>);
  }
}

export default PostListContainer;
    