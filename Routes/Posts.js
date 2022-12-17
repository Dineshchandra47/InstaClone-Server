const router = require("express").Router();
const Post = require("../Models/Posts");
const cloudinary = require("../Cloudinary/Cloudinary");

router.get("/getPosts", async (req, res) => {
  try {
    const data = await Post.find();
    console.log(data);
    console.log(res.body);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/createPost", async (req, res) => {
  try {
    console.log(req.body);
    const { author, location, description, image } = req.body;

    const cloudImg = await cloudinary.uploader.upload(image, {
      folder: "postImages",
    });

    // console.log(cloudImg.public_url);

    const newPost = await new Post({
      name: author,
      location: location,
      description: description,
      PostImage: cloudImg.secure_url,
    });
    console.log(newPost);
    newPost.save();

    res.status(200).json({
      status: "success",
      result: newPost,
      message: "Post Created",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/hello", (req, res) => {
  res.send("Hello NODEJS and insta clone");
});
module.exports = router;
