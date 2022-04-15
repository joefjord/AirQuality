const glob = require('glob');
const fs = require('fs');
const { dbModel } = require('./Database/dbModel.js');
const newestFile = glob.sync('qualitySheets/*csv')
  .map(fileName => ({fileName, ctime: fs.statSync(fileName).ctime}))
  .sort((a, b) => b.ctime - a.ctime)[0];


console.log(newestFile);

let fileData = fs.readFileSync(newestFile.fileName).toString('utf-8');
let lines = fileData.split("\n");
const SKIPLINES = 7;

// Time: 2022/02/15 00:00:00
// NO2 (ppb): 0.0
// O3 (ppb): 21.5
// PM2.5 (µg/m³): 1.1
// TEMP (°C): 1.31
// RH (%): 90.6
// DP (°C): -0.1
// Inlet: Sample

// line[n] = [NO2ppb, 03ppb, PM2.5, TEMPc, RH, DPc, Inlet, Date, time ]
// It requires this formatting (data.csv) for pulling data
let sensor = lines[0].split(' · ')[1].split('(')[0];
for(let i = SKIPLINES; i < lines.length; i++){
    let line = lines[i].split(',');
    let time = line.shift().split(' ');
    line.push(time[0]);
    line.push(time[1]);
    line.push(sensor);
    dbModel.insertAirData(line);
}