import React from 'react';
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => {
    return (
        <secton className="one-post">
            <title>{post.id}</title>
            <Link to={`/post/${post.id}`}><h4 className="post-title">{post.title}</h4></Link>
            <article className="post-content">
                {post.body}
            </article>
        </secton>
    )
}

export {
    PostItem
}