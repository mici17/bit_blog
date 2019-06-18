import React from 'react';
import { AuthorItem } from './AuthorItem';
import { authors } from '../../shared/authors'

export const AuthorsPage = () => (
    <div className="authors-list">
        <h1 className="authors-title">AUTHORS ({authors.length})</h1>
        <div className="authors-whole-list">
            {authors.map(author => <AuthorItem author={author} />)}
        </div>
    </div>
);
