//const { Chart } = require("chart.js");

const refinedData = JSON.parse(document.getElementById('refinedData').textContent);
refinedData.reverse();

var delayBetweenPoints = 10;
var started = {};
/*
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: 'PM 2.5 Levels (µg/m³)',
        backgroundColor: "transparent",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0,
        data: refinedData , 
        fill: true,
        animation: (context) => {
          var delay = 0;
          var index = context.dataIndex;
          var chart = context.chart;
          if (!started[index]) {
            delay = index * delayBetweenPoints;
            started[index] = true;
          }
          var {x,y} = index > 0 ? chart.getDatasetMeta(0).data[index-1].getProps(['x','y'], true) : {x: 0, y: chart.scales.y.getPixelForValue(100)};
          
          return {
            x: {
              easing: "linear",
              duration: delayBetweenPoints,
              from: x,
              delay
            },
            y: {
              easing: "linear",
              duration: delayBetweenPoints * 500,
              from: y,
              delay
            },
            skip: {
              type: 'boolean',
              duration: delayBetweenPoints,
              from: true,
              to: false,
              delay: delay
            }
          };
        }
      }
    ]
  },
  options: {
    scales: {
      x: {
        type: 'time',
        time: {

        }
      }
    }
  },
  plugins: [{
    id: 'force_line_update',
    beforeDatasetDraw(chart, ctx) {
      ctx.meta.dataset.points = ctx.meta.data;
    }
  }]
});
*/
// Setup Block

// Config Block

const config = {
  type: 'line',
  data: {
    datasets: [{
      label: 'PM 2.5 Levels (µg/m³)',
      data: refinedData,
      backgroundColor: "transparent",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 1,
      pointRadius: 0,
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour'
            },
            y: {
                beginAtZero: true
            }
          }
        }
      }
    }]
  }
}

// Render/Init Block
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, config);