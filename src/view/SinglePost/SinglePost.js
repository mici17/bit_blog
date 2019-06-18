import React from 'react';
import { posts } from '../../shared/posts'
import { authors } from '../../shared/authors'

export const SinglePost = (props) => {

    const post = posts.find(post => `${post.id}` === props.match.params.id);

    return (
        <div>
            <span>Back</span>
            <h1>{post.title}</h1>
            <span>{authors.name}</span>
            <article>
                {post.body}
            </article>
        </div>
    )
}