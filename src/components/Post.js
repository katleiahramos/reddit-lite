import React from "react";



const Post = ({post}) => {
    const commentsUrl = 'https://www.reddit.com' + post.permalink
    
    // post.author
    const t = new Date(post.created_utc*1000);
 
    const formattedDateTime = t.toString()

    return (
        <div className="Post">
            <h2><a href={post.url}>{post.title}</a></h2>
          
            <h3><a href={commentsUrl}>{post.num_comments} Comments</a></h3>
          
            <h4>Posted On  {formattedDateTime} by {post.author}</h4>
        </div>
    )
}


export default Post
