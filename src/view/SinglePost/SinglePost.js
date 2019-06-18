import React from 'react';
import { posts } from '../../shared/posts'
import { authors } from '../../shared/authors'

export const SinglePost = () => {
    return (
        <div>
            <span>Back</span>
            <h1>{posts.title}</h1>
            <span>{authors.name}</span>
            <article>
                {posts.body}
            </article>
        </div>

    )
}