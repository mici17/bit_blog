import React from 'react';


const PostItem = ({ post }) => {
    return (
        <secton className="one-post">
            <title>{post.id}</title>
            <h4 className="post-title">{post.title}</h4>
            <article className="post-content">
                {post.body}
            </article>
        </secton>
    )
}

export {
    PostItem
}