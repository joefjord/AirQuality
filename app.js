"use strict";

const express = require("express");
const app = express();
const path = require("path");
const { dbModel } = require("./Database/dbModel.js");

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

//FAQ Page
app.get("/faq", (req, res) => {
    res.render('faq')
});

// Current Statistics Page
app.get("/statistics", (req, res) => {
    res.render('statistics')
});

//How PM2.5 Affects You Page
app.get("/affects", (req, res) => {
    res.render('affects')
});

//What PM2.5 Are Page
app.get("/pm25", (req, res) => {
    res.render('pm25')
});

//Where PM2.5 Come From Page
app.get("/where", (req, res) => {
    res.render('where')
});

//Leaf Burn Calculator Page
app.get("/leafburn", (req, res) => {
    res.render('leafburn')
});

//Learn more Page
app.get("/learn-more", (req, res) => {
    res.render('learnmore')
});

//Graph Page
app.get("/graph", (req, res) => {
    const bigData = dbModel.getAirData_5Hour()

    let refinedData = [];
    for (let i = 0 ; i < bigData.length; i++)
    {
        refinedData.push({x: bigData[i].datetime, y: bigData[i].PM25});
    }
    //console.log(refinedData)

    res.render('graph', {refinedData})
});

module.exports = app;