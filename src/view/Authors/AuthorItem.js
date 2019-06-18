import React from 'react';
import {Link} from 'react-router-dom';

const AuthorItem = ({ author }) => {
    return (
        <secton className="one-author">
            <title>{author.id}</title>
            <Link to={`/author/${author.id}`}><h4 className="author-name">{author.name}</h4></Link>
        </secton>
    )
}

export {
    AuthorItem
}