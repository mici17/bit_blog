import React from 'react';
import { Link } from 'react-router-dom';

const AuthorItem = ({ author }) => {
    return (
        <section className="one-author">
            <title>{author.id}</title>
            <Link to={`/author/${author.id}`}><h4 className="author-name">{author.name}</h4></Link>
        </section>
    )
}

export {
    AuthorItem
}