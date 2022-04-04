const glob = require('glob');
const fs = require('fs');
const { range } = require('express/lib/request');
const { line } = require('fontawesome');

const newestFile = glob.sync('qualitySheets/*csv')
  .map(fileName => ({fileName, ctime: fs.statSync(fileName).ctime}))
  .sort((a, b) => b.ctime - a.ctime)[0];


console.log(newestFile);

let fileData = fs.readFileSync(newestFile.fileName).toString('utf-8');
let lines = fileData.split("\n");
let data = [];

for(let i = 7; i < lines.length; i++){
    let line = lines[i].split(',');
    let time = line.shift().split(' ');
    line.push(time[0]);
    line.push(time[1]);
    console.log(line);
}