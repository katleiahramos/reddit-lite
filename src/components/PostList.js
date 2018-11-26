import React from "react";
import Post from "./Post.js";
const PostList = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post, idx) => {
      return <Post post={post.data} key={idx} />;
    });
  };

  return <div className="PostList">{renderPosts()}</div>;
};

export default PostList;
