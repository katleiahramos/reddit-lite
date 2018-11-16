import React, { Component } from "react";
import PostList from "../components/PostList";
import SubredditSearch from "../components/SubredditSearch";

class PostListContainer extends Component {
  state = {
    posts: []
  };

  fetchPosts = (query = "all") => {
    fetch(`https://www.reddit.com/r/${query}.json`, {
      headers: {"content-type": 'application/json'}
    })
    .then(resp => resp.json())
    .then( postData => {this.setState({ posts: postData.data.children })})
  }

  render() {
    return (
    <div className="PostListContainer">
      <SubredditSearch fetchPosts={this.fetchPosts} />
      <PostList posts={this.state.posts} />
    </div>);
  }
}

export default PostListContainer;
    