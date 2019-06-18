import axios from 'axios';
import { Post } from '../entities/Post'

const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response)
        .then((posts) => {
            return posts.map((postObj) => {
                return new Post(postObj)
            })
        })
}

export {
    fetchPosts
}