const express = require("express");
const mongoose = require("mongoose");
const app=express();
const cors=require("cors");
mongoose.connect("mongodb://127.0.0.1:27017/vijayloginwithgoogle");
const session=require("express-session");
const passport=require("passport");
const OAuth2Strategy=require("passport-google-oauth2").Strategy;
const userDB=require("./models/userModel");

const clientid="941788385206-do4ce04bk4mukeerjm6qhol0hdcguv3e.apps.googleusercontent.com";
const clientsecret="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";

app.use(cors({ 
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE",
    credentials:true
}));

app.use(express.json());

app.use(session({
    secret:"vijay1234",
    resave:false,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(

    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile", "email"]
    })
)