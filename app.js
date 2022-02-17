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

module.exports = app;