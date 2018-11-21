import React, { Component } from "react";
import PostList from "../components/PostList";
import SubredditSearch from "../components/SubredditSearch";

class PostListContainer extends Component {
  state = {
    posts: [],
    query: "all",
  };

  componentDidMount() {
    this.interval = setInterval(this.fetchPosts, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setQuery = (query) => {
    // this.setState(prevState => {
    //   posts: prevState.posts;
    //   query: query 
    // });
    this.fetchPosts(query)
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
    console.log("rendering")
    return (
      <div className="PostListContainer">
        <SubredditSearch setQuery={this.setQuery} fetchPosts={this.fetchPosts} />
        <PostList posts={this.state.posts} />
      </div>);
  }
}

export default PostListContainer;
