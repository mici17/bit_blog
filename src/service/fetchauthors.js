import axios from 'axios';
import { Author } from '../entities/Author'

const fetchAuthors = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data)
        .then((authors) => {
            return authors.map((authorObj) => {
                return new Author(authorObj)
            })
        })
}

const fetchSingleAuthor = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.data)
        .then((authorObj) => {
            return new Author(authorObj)
        })

}

export {
    fetchAuthors,
    fetchSingleAuthor
}