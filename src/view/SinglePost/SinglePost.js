import React from 'react';
import { fetchSinglePost } from '../../service/fetchposts'
import { authors } from '../../shared/authors'

export class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }


    loadSinglePostData() {
        const postId = this.props.match.params.id;
        fetchSinglePost(postId)
            .then(post => {
                this.setState({ post: post })
            })
    }
    componentDidMount() {
        this.loadSinglePostData()
    }

    render() {
        // const post = posts.find(post => `${post.id}` === props.match.params.id);
        const post = this.state.post

        if (!post) {
            return <h3>Loading post...</h3>
        }

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


}