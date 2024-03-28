// Install required library by running:
// npm install chart.js

const Chart = require('chart.js');

/**
 * Function to create a bar chart
 * @param {string} canvasId - ID of the canvas element where the chart will be rendered
 * @param {string[]} labels - Array of labels for the chart data
 * @param {number[]} data - Array of data points for the chart
 * @param {string} title - Title of the chart
 */
function createBarChart(canvasId, labels, data, title) {
  const ctx = document.getElementById(canvasId).getContext('2d');

  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: title,
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return barChart;
}

module.exports = createBarChart;