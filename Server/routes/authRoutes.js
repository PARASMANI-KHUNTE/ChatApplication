const express = require('express')
const router = express.Router()
const {hassPassword,VerifyPassword} = require('../utils/hashUtils')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const secretkey = process.env.secretKey

// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
// const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;



// // Serialize and deserialize user for session support
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });
// passport.deserializeUser((id, done) => {
//     const user = User.find(u => u.id === id);
//     done(null, user);
// });

// // Configure Google Strategy
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/google/callback",
// }, async (accessToken, refreshToken, profile, done) => {
//     let user = User.find(u => u.email === profile.emails[0].value);
//     if (!user) {
//         user = {
//             id: profile.id,
//             name: profile.displayName,
//             email: profile.emails[0].value,
//         };
//         User.push(user); // Save user to mock DB
//     }
//     return done(null, user);
// }));

// // Configure Facebook Strategy
// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:5000/auth/facebook/callback",
//     profileFields: ["id", "displayName", "emails"],
// }, async (accessToken, refreshToken, profile, done) => {
//     let user = User.find(u => u.email === profile.emails[0].value);
//     if (!user) {
//         user = {
//             id: profile.id,
//             name: profile.displayName,
//             email: profile.emails[0].value,
//         };
//         User.push(user); // Save user to mock DB
//     }
//     return done(null, user);
// }));

// // Configure LinkedIn Strategy
// passport.use(new LinkedInStrategy({
//     clientID: process.env.LINKEDIN_CLIENT_ID,
//     clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/linkedin/callback",
//     scope: ['r_emailaddress', 'r_liteprofile'],
// }, async (accessToken, refreshToken, profile, done) => {
//     let user = User.find(u => u.email === profile.emails[0].value);
//     if (!user) {
//         user = {
//             id: profile.id,
//             name: profile.displayName,
//             email: profile.emails[0].value,
//         };
//         User.push(user); // Save user to mock DB
//     }
//     return done(null, user);
// }));



router.post('/signup', async (req, res) => {
    const { name, email, mobile, password } = req.body; // Correctly destructure fields from req.body
    console.log(name)
    console.log(email)
    console.log(mobile)
    console.log(password)

    // Check if all required fields are provided
    if (!name || !email || !mobile || !password) {
        return res.status(400).json({
            message: "Please provide name, email, mobile, and password."
        });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists with this email."
            });
        }

        // Hash the password
        const hashedPassword = await hassPassword(password);

        // Create a new user
        const newUser = new User({
            name,
            email,
            mobile,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success
        res.status(201).json({
            message: "Successful signup"
        });
    } catch (error) {
        // Handle any errors that might occur during the process
        console.error(error);
        res.status(500).json({
            message: "An error occurred while processing your request."
        });
    }
});


router.post('/login',async(req,res)=>{
    const {email , password} = req.body;

    if(!email || !password) {
        return res.status(400).json({
            message : "Enter Email and Password"
        })
    }

    const IsUser = await User.findOne({email})
    if(!IsUser){
        return res.status(404).json({
            message : "Invalid Email And Password"
        })
    }
    const checkPassword = await VerifyPassword(IsUser.password,password)
    if(!checkPassword){
        return res.status(401).json({
            message : "Wrong Password"
        })
    }

    const payload = {
        name : IsUser.name,
        email 
    }
    
    const generateToken =  jwt.sign({payload},secretkey,{expiresIn: '1h'})

    return res.status(200).json({
        message : "login Successful",
        token : generateToken
    })

})

// Routes for Social Login
// router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
// router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
//     (req, res) => {
//         res.json({ message: "Logged in with Google", user: req.user });
//     });

// router.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));
// router.get("/auth/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/" }),
//     (req, res) => {
//         res.json({ message: "Logged in with Facebook", user: req.user });
//     });

// router.get("/auth/linkedin", passport.authenticate("linkedin", { scope: ["r_emailaddress", "r_liteprofile"] }));
// router.get("/auth/linkedin/callback", passport.authenticate("linkedin", { failureRedirect: "/" }),
//     (req, res) => {
//         res.json({ message: "Logged in with LinkedIn", user: req.user });
//     });
module.exports = router;