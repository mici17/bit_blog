import React from 'react';


const Post = (props) => {
    return (
        <secton>
            <title>{props.post.id}</title>
            <h4>{props.post.title}</h4>
            <article>
                {props.post.body}
            </article>
        </secton>
    )
}

export {
    Post
}