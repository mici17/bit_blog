import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSinglePost, fetchRelatedPosts } from '../../service/fetchposts'
import { fetchSingleAuthor } from '../../service/fetchauthors'

export class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            author: null,
            relatedPosts: []
        }
    }


    loadSinglePostData() {
        const postId = this.props.match.params.id;

        fetchSinglePost(postId)
            .then(post => {
                this.setState({ post: post })
                this.loadSingleAuthorData(post.userId);
                this.loadRelatedPosts(post.userId);
            })
    }

    loadSingleAuthorData(userId) {
        fetchSingleAuthor(userId)
            .then(author => {
                this.setState({ author: author })
            })
    }

    loadRelatedPosts(userId) {
        fetchRelatedPosts(userId)
            .then(userPosts => {
                const currentPostId = Number.parseInt(this.props.match.params.id)
                const relatedPosts = userPosts.filter(post => post.id !== currentPostId)

                this.setState({ relatedPosts })
            })
    }

    componentDidMount() {
        this.loadSinglePostData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const postId = this.props.match.params.id
            this.loadSinglePostData(postId)
        }
    }

    render() {
        const { post, author } = this.state;

        if (!post || !author) {
            return <h3>Loading post...</h3>
        }

        return (
            <div className="single-post">
                <h5><Link to="/" className="back-button">Back</Link></h5>
                <h1 className="single-post-title">{post.title}</h1>
                <span className="post-author-name">
                    <p><Link to={`/author/${author.id}`} className="author-link">{author.name}</Link></p>
                </span>
                <article className="single-post-body">
                    {post.body}
                </article>
                <div>
                    <h4 className="related-title">{this.state.relatedPosts.length} more posts from same author:</h4>
                    {this.state.relatedPosts.map(post =>
                        <p className="related-posts" key={`${post.id}`}>
                            <Link to={`/post/${post.id}`} className="related-links">
                                {`${post.id}. ${post.title}`}
                            </Link>
                        </p>)}
                </div>
            </div>
        )
    }


}