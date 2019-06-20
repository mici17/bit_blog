import React from 'react';
import { Link } from 'react-router-dom'
import AuthorName from '../Authors/AuthorName';
import CommentsNumber from '../Home/CommentsNumber'


const PostItem = ({ post }) => {

    return (
        <section className="one-post">
            <title>{post.id}</title>
            <Link to={`/post/${post.id}`}><h4 className="post-title">{post.title}</h4></Link>
            <article className="post-content">
                {post.body}
                <AuthorName authorId={post.userId} />
                <CommentsNumber postId={post.id} bla={true} />
            </article>
        </section>
    )
}

export {
    PostItem
}