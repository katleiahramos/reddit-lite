import React, { Component } from "react";
import "./App.css";
import PostListContainer from "./containers/PostListContainer";
class App extends Component {
  render() {
    return (
    <div className="App">
      <PostListContainer />
    </div>
    );
  }
}

export default App;
