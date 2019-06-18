class Post {
    constructor(postObject) {
        this.title = postObject.title;
        this.id = postObject.id;
        this.body = postObject.body;
        this.userId = postObject.userId;
    }
}

export {
    Post
}