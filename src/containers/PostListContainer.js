import React, { Component } from "react";
import PostList from "../components/PostList";
import SubredditSearch from "../components/SubredditSearch";

class PostListContainer extends Component {
  state = {
    posts: []
  };

//   fetchGIFs = (query) => {

//   }

  render() {
    return (
    <div className="PostListContainer">
      <SubredditSearch />
      <PostList />
    </div>);
  }
}

export default PostListContainer;
    