"use strict";

const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"), {
    extensions: ['html'],
}));
// For Boot Strap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

//Home Page
app.get("/", (req, res) => {
    res.render('home')
});

//About Us Page
app.get("/about-us", (req, res) => {
    res.render('about')
});

//Statistics Page
app.get("/statistics", (req, res) => {
    res.render('statistics')
});

//Affects Page
app.get("/affects", (req, res) => {
    res.render('affects')
});

//PM2.5 Page
app.get("/pm25", (req, res) => {
    res.render('pm25')
});

//Leaf Burn Calculator Page
app.get("/leafburn", (req, res) => {
    res.render('leafburn')
});

//Learn more Calculator Page
app.get("/learn-more", (req, res) => {
    res.render('learnmore')
});

module.exports = app;