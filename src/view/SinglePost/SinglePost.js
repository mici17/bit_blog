import React from 'react';
import { posts } from '../../shared/posts'
import { authors } from '../../shared/authors'

export const SinglePost = (props) => {

    const post = posts.find(post => `${post.id}` === props.match.params.id);
    // const author=authors.find(author)

    return (
        <div className="single-post"> 
            <span>Back</span>
            <h1 className="single-post-title">{post.title}</h1>
            <span>{authors.name}</span>
            <article className="single-post-body">
                {post.body}
            </article>
        </div>
    )
}