import React from 'react';
import { PostItem } from './PostItem'
import { fetchPosts } from '../../service/fetchposts'

export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    loadData() {
        fetchPosts()
            .then(posts => {
                this.setState({ posts: posts })
            })
    }

    componentDidMount() {
        this.loadData()
    }
    render() {
        return (
            <div className="posts-list" >
                <h1 className="posts-title">POSTS</h1>
                <div className="whole-list">
                    {this.state.posts.map((post) => {
                        return <PostItem post={post} />
                    })}
                </div>


            </div>
        )
    }
}


