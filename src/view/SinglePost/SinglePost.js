import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSinglePost } from '../../service/fetchposts'
import { fetchSingleAuthor } from '../../service/fetchauthors'

export class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            author: null
        }
    }


    loadSinglePostData() {
        const postId = this.props.match.params.id;
        fetchSinglePost(postId)
            .then(post => {
                this.setState({ post: post })
                this.loadSingleAuthorData(post.userId)

            })
    }

    loadSingleAuthorData(userId) {
        fetchSingleAuthor(userId)
            .then(author => {
                this.setState({ author: author })
            })
    }

    componentDidMount() {
        this.loadSinglePostData()
    }

    render() {
        // const post = posts.find(post => `${post.id}` === props.match.params.id);
        const post = this.state.post;
        const author = this.state.author;
        if (!post) {
            return <h3>Loading post...</h3>
        }
        const authorLink = author ? <Link to={`/author/${author.id}`} className="author-link">{author.name}</Link> : "Loading..."
        return (
            <div className="single-post">
                <h5><Link to="/" className="back-button">Back</Link></h5>
                <h1 className="single-post-title">{post.title}</h1>
                <span className="post-author-name">
                    <p >{authorLink}</p>
                </span>
                <article className="single-post-body">
                    {post.body}
                </article>
            </div>
        )
    }


}