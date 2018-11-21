import React from "react";



const Post = ({post}) => {
    debugger
    return <div className="Post"><a href={post.url}>{post.title}</a></div>
}


export default Post
