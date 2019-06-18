import React from 'react';


const Post = (props) => {
    return (
        <secton className="one-post">
            <title>{props.post.id}</title>
            <h4 className="post-title">{props.post.title}</h4>
            <article className="post-content">
                {props.post.body}
            </article>
        </secton>
    )
}

export {
    Post
}