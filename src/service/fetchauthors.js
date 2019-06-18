import axios from 'axios';
import { Author } from '../entities/Author'

const fetchAuthors = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => response)
        .then((authors) => {
            return authors.map((authorObj) => {
                return new Author(authorObj)
            })
        })
}

export {
    fetchAuthors
}