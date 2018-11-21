import React from "react";



const Post = ({post}) => {
    const commentsUrl = 'https://www.reddit.com' + post.permalink
   
    return (
        <div className="Post">
            <a href={post.url}>{post.title}</a>
            <br/>
            <a href={commentsUrl}>{post.num_comments} Comments</a>
        </div>
    )
}


export default Post
