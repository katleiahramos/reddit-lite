import React, { Component } from "react";
import PostList from "../components/PostList";
import SubredditSearch from "../components/SubredditSearch";

class PostListContainer extends Component {
  state = {
    posts: [],
    query: "all",
  };

  componentWillMount(){
    this.fetchPosts("all")
  }


  componentDidMount() {
    this.interval = setInterval(this.fetchPosts, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setQuery = (query) => {
    this.setState({query: query})
  }



  fetchPosts = (query = this.state.query) => {
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
    return (
      <div className="PostListContainer">
        <SubredditSearch setQuery={this.setQuery} fetchPosts={this.fetchPosts} />
        <PostList posts={this.state.posts} />
      </div>);
  }
}

export default PostListContainer;
