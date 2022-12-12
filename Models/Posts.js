const mongoose = require("mongoose")


const PostSchema = mongoose.Schema({
    name: String,
    location: String,
    likes:
    {
        type: Number,
        default: 0
    },
    description: String,
    PostImage: String,
    date: {
        type: String,
        default: new Date().toLocaleDateString()
    }

})


const Post = mongoose.model("Posts", PostSchema)


module.exports = Post;