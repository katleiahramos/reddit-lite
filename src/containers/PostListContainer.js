import React, { Component } from "react";
import PostList from "../components/PostList";
import SubredditSearch from "../components/SubredditSearch";

class PostListContainer extends Component {
  state = {
    posts: [],
    time: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.fetchPosts, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  fetchPosts = (query = "all") => {
    fetch(`https://www.reddit.com/r/${query}.json`, {
      headers: { "content-type": 'application/json' }
    })
      .then(resp => resp.json())
      .then(postData => {
        this.setState({ posts: postData.data.children.slice(0, 25) })
      })
      .catch(error => {
        window.alert("Subreddit not found. Please try again.")
      })
  }

  render() {
    console.log("rendering")
    return (
      <div className="PostListContainer">
        <SubredditSearch fetchPosts={this.fetchPosts} />
        <PostList posts={this.state.posts} />
      </div>);
  }
}

export default PostListContainer;
