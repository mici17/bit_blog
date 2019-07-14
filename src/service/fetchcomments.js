import axios from 'axios';
import { Comment } from '../entities/Comment';

const fetchComments = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.data)
        .then((comments) => {
            return comments.map((commentObj) => {
                return new Comment(commentObj)
            })
        })
}

const fetchCommentsCount = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}&_limit=0`)
        .then(response => {
            console.log(response);
            const commentsCount = response.headers['x-total-count']
            return commentsCount
        })

}

export {
    fetchComments,
    fetchCommentsCount
}