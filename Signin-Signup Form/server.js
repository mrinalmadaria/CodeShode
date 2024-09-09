const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

// Create Express App
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Registeration_Test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("connected to database"))
    .catch((err) => console.log("Failed to connect to database", err));


// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/signup', async(req, res)=>{
    const {name, email, password} = req.body;

    // Check if user exists
    let user = await User.findOne({email});
    if(user){
        return res.json({message: "user already exists"});
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    user = new User({name, email, password: hashedPassword});
    await user.save();

    res.json({message: 'Signup Successful!'});
});

// Login route
app.post('/login', async(req, res)=>{
    const {email, password} = req.body;

    // Check if user exists or not
    const user = await User.findOne({email});
    if(!user){
        return res.json({message: 'Invalid credentials'});
    }

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.json({message: "Invalid credentials"});
    }

    res.json({message: 'Login successful'});
});

app.use(express.static('public'));

// Start the server
app.listen(3000, ()=>{
    console.log('Server is running at port 3000');
});