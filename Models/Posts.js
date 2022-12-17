const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: String,
  location: String,
  likes: {
    type: Number,
    default: 47,
  },
  description: String,
  PostImage: String,
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
});

// const PostSchema = mongoose.Schema({
//     name:String,
//     location:String,
//     likes:Number,
//     description:String,
//     PostImage:String,
//     date:String,
// })

const Post = mongoose.model("Posts", PostSchema);

module.exports = Post;
