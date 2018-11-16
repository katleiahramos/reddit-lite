import React from "react";

const PostList = ({posts}) => {

  const renderPosts = () => {
    return posts.map((post, idx) => {
      return <div className="Post" id={idx}>{post.data.title}</div>
    })
  }

 

  return  <div className="PostList">{renderPosts()}</div>;
};

export default PostList;
