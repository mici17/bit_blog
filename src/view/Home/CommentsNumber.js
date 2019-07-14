import React from 'react'
import { fetchCommentsCount } from '../../service/fetchcomments';

class CommentsNumber extends React.Component {

    state = {
        commentsCount: null
    }

    componentDidMount() {
        fetchCommentsCount(this.props.postId)
            .then((commentsCount) => {
                this.setState({ commentsCount })
            })
    }

    render() {

        const { commentsCount } = this.state;
        if (commentsCount === null) {
            return <p>...</p>
        }

        return (
            <p>Comments: {commentsCount} </p>
        )
    }
}

export default CommentsNumber