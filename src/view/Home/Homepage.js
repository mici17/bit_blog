import React from 'react';
import { posts } from '../../shared/posts';
import { PostItem } from './PostItem'

export const HomePage = () => {

    return (
        <div className="posts-list">
            <h1 className="posts-title">POSTS</h1>
            <div className="whole-list">
                {posts.map((post) => {
                    return <PostItem post={post} />
                })}
            </div>


        </div>
    )

}


