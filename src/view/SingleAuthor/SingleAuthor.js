import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSingleAuthor } from '../../service/fetchauthors'

export class SingleAuthor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: null
        }
    }

    loadSingleAuthorData() {
        const userId = this.props.match.params.id
        fetchSingleAuthor(userId)
            .then(author => {
                this.setState({ author: author })
            })
    }
    componentDidMount() {
        this.loadSingleAuthorData()
    }

    render() {
        const author = this.state.author;

        if (!author) {
            return <h3>Loading author...</h3>
        }
        return (
            <div className="single-author-container" >
                <div className="back">
                    <Link to="/authors"><h4 className="back-all-authors"> &#60;All authors</h4></Link>
                    <h1 className="single-author-title">SINGLE AUTHOR</h1>
                </div>
                <section>
                    <div className="single-author-photo">
                        <img src="https://via.placeholder.com/300" alt="img" />
                    </div>
                    <div className="single-author-name-info">
                        <h1>{author.name}</h1>
                        <p>username: {author.username}</p>
                        <p>email: {author.email}</p>
                        <p>phone: {author.phone}</p>
                    </div>
                </section>
                <section className="single-author-adress">
                    <div className="adress">
                        <h3>Adress</h3>
                        <p>street: {author.street}</p>
                        <p>city: {author.city}</p>
                        <p>zipcode: {author.zipcode}</p>
                    </div>
                    <div className="frame">
                        <iframe></iframe>
                    </div>
                </section>
                <section className="company">
                    <h1>Company</h1>
                    <p>name: {author.companyName}</p>
                    <p>slogan: {author.slogan}</p>
                </section>

            </div>
        )
    }
}
