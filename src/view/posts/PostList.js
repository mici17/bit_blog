import React from 'react';
import { Post } from './Post';

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => {
                return <Post post={post} />
            })}
        </div>
    )
}

export {
    PostList
}