import React from "react";



const Post = ({post}) => {
    const commentsUrl = 'https://www.reddit.com' + post.permalink
    
    // post.author
    const t = new Date(post.created_utc*1000);
 
    const formattedDateTime = t.toString()

    return (
        <div className="Post">
            <a href={post.url}>{post.title}</a>
            <br/>
            <a href={commentsUrl}>{post.num_comments} Comments</a>
            <br />
            Posted On: {formattedDateTime}
        </div>
    )
}


export default Post
