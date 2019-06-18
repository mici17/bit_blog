import React from 'react';
import { posts } from '../../shared/posts';
import { PostList } from '../posts/PostList'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: posts
        }
    }

    render() {
        return (
            <div className="posts-list">
                <h1 className="posts-title">POSTS</h1>
                <div className="whole-list">
                    <PostList posts={posts} />
                </div>


            </div>
        )
    }

}

export {
    HomePage
}
