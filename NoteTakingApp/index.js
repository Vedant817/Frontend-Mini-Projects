const express = require("express");
const mongoose = require("mongoose");
const note = require('./models/notes')
const User = require('./models/user');
const user = require("./models/user");
const app = express();
app.use(express.json()); //? These are the middleware used for destructing the object.
app.use(express.urlencoded());
const port = 3000;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => {
    res.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
    res.sendFile("./pages/login.html", { root: __dirname });
});

app.get("/signup", (req, res) => {
    res.sendFile("./pages/signup.html", { root: __dirname });
});
//* Endpoints for the API
app.post("/getnotes", async (req, res) => {
    let notes = await note.findOne({email: req.body.email});
    res.status(200).json({success: true, notes});
});

app.post("/login", async (req, res) => {
//  const { userToken } = req.body;
    let user = await User.findOne(req.body);
    if(!user){
        res.status(200).json({success:true, message:'User Not found'});
        Navigate('/login');
    }
    else{
        res.status(200).json({success: false, user:{email: user.email}, message:'User Found'});
    }
});

app.post("/signup", async (req, res) => {
    const { userToken } = req.body;
    console.log(req.body);
    let user= await User.create(req.body);
    res.status(200).json({success: true, user:user})
});

app.post("/addnote", async (req, res) => {
    const { userToken } = req.body;
    let note = await note.create(req,body)
    res.status(200).json({success: true, note})
});

app.post("/deletenote", (req, res) => {
    const { userToken } = req.body;
});

app.listen(port, () => {
    console.log(`Server started at the Port ${port}`);
});
