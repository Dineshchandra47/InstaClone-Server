const router = require("express").Router()
const Post = require("../Models/Posts")
const cloudinary = require("../Cloudinary/Cloudinary")

router.get("/getPosts", async (req, res) => {

    try {
        const data = await Post.find()
        // console.log(data);

        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({ message: "Server Issue" })
    }
})


router.post("/createPost", async (req, res) => {

    try {
        // console.log(req.body);
        const { author, location, description, image } = req.body

        const cloudImg = await cloudinary.uploader.upload(image,{
            folder:"postImages"
        })

        // console.log(cloudImg.public_url);

        const newPost = await new Post({
            name: author,
            location: location,
            description: description,
            PostImage: cloudImg.secure_url
        })
        // console.log(newPost);
        newPost.save()

        res.status(201).json({ message: "Post Created" })

    } catch (error) {
        res.status(500).json({ message: "Server Issue" })
    }
})



router.get("/hello",(req,res)=>{
    res.send("ffaf")
})
module.exports = router;