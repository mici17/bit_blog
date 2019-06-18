import React from 'react';

const AuthorItem = ({ author }) => {
    return (
        <secton className="one-author">
            <title>{author.id}</title>
            <h4 className="author-name">{author.name}</h4>
        </secton>
    )
}

export {
    AuthorItem
}