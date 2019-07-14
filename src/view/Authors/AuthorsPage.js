import React from 'react';
import { AuthorItem } from './AuthorItem';
import { fetchAuthors } from '../../service/fetchauthors'

export class AuthorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }
    loadData() {
        fetchAuthors()
            .then(authors => {
                this.setState({ authors: authors })
            })
    }

    componentDidMount() {
        this.loadData()
    }




    render() {
        return (
            <div className="authors-list">
                <h1 className="authors-title">AUTHORS ({this.state.authors.length})</h1>
                <div className="authors-whole-list">
                    {this.state.authors.map(author => <AuthorItem author={author} />)}
                </div>
            </div>
        );

    }
}
