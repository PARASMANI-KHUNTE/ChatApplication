const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();


const cors =  require('cors')
app.use(cors())

app.use(express.json());
app.use(bodyParser.json())
const db = require('./config/dbConfig')
db()


const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

// Serialize and deserialize user for session support
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});


const auth = require('./routes/authRoutes')
const chat = require('./routes/chatRoutes')
const user = require('./routes/userRoutes')

app.use("/api/auth",auth)
app.use("/api/chat",chat)
app.use("/api/user",user)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is up on http://localhost:${PORT}`)
})