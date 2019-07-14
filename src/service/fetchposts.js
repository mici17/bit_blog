import axios from 'axios';
import { Post } from '../entities/Post'

const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then((posts) => {
            return posts.map((postObj) => {
                return new Post(postObj)
            })
        })
}

const fetchSinglePost = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.data)
        .then((singlePost) => {
            return new Post(singlePost)
        })
}

const fetchRelatedPosts = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.data)
        .then((posts) => {
            return posts.map((postObj) => {
                return new Post(postObj)
            })
        })
}



export {
    fetchPosts,
    fetchSinglePost,
    fetchRelatedPosts
}