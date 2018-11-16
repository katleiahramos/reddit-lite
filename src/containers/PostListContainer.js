import React, { Component } from "react";
import PostList from "../components/PostList";
import SubredditSearch from "../components/SubredditSearch";

class PostListContainer extends Component {
  state = {
    posts: []
  };

  fetchPosts = (query) => {
    debugger
  }

  render() {
    return (
    <div className="PostListContainer">
      <SubredditSearch fetchPosts={this.fetchPosts} />
      <PostList />
    </div>);
  }
}

export default PostListContainer;
    