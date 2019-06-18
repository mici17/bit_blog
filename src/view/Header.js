import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <p className="logo">BIT BLOG</p>
            <div className="links">
                <Link to="/" className="nav-links"><p >Home</p></Link>
                <Link to="/authors" className="nav-links"><p className="authors">Authors</p></Link>
                <Link to="/about" className="nav-links"><p >About</p></Link>
            </div>
        </header>
    )
}

export {
    Header
}
