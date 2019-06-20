class Comment {
    constructor(commentObject) {
        this.id = commentObject.id;
        this.postId = commentObject.postId;
        this.name = commentObject.name;
        this.body = commentObject.body;
        this.email = commentObject.email;
    }
}

export {
    Comment
}