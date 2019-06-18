import React from 'react';
import {Link} from 'react-router-dom';

const author = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
}

const SingleAuthor = () => {
    return (
        <div className="single-author-container">
            <div className="back">
               <Link to="/authors"><h4 className="back-all-authors"> &#60;All authors</h4></Link>
                <h1 className="single-author-title">SINGLE AUTHOR</h1>
            </div>
            <section>
                <div className="single-author-photo">
                    <img src="https://via.placeholder.com/300" alt="img"/>
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
                <p>street: {author.address.street}</p>
                <p>city: {author.address.city}</p>
                <p>zipcode: {author.address.zipcode}</p>
                </div>
                <div className="frame">
                    <iframe></iframe>
                </div>
            </section>
            <section className="company">
                <h1>Company</h1>
                <p>name: {author.company.name}</p>
                <p>slogan: {author.company.catchPhrase}</p>
            </section>

        </div>
    )
}

export {
    SingleAuthor
}