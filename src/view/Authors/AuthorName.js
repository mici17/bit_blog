import React from 'react'
import { fetchSingleAuthor } from '../../service/fetchauthors';

class AuthorName extends React.Component {

    state = {
        author: { name: "..." }
    }

    componentDidMount() {
        fetchSingleAuthor(this.props.authorId)
            .then((author) => {
                this.setState({ author })
            })
    }

    render() {

        const { author } = this.state;

        if (!author) {
            return <p>...</p>
        }

        return (
            <p>Author: {author.name}</p>
        )
    }
}

export default AuthorName