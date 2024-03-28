# Interactive Dataizations and Charts Package

 JavaScript package allows you easily create interactive data visualizations and charts for web applications using Chart.js library.

 Installation

To use this package, you can install it via npm:

```bash
npm install interactive-charts-package
```

## Usage

Here's an example of how to create a chart using this package:

```javascript
const createBarChart = require('interactive-charts-package');

const labels = ['January', 'February', 'March', 'April', 'May'];
const data = [10, 20, 15, 25, 30];
const title = 'Sales Report';

// Create a bar chart
createBarChart('chartCanvas', labels, data, title);
```

You can customize the chart type, colors, labels, data, and additional options according to your requirements.

## License

This package is licensed under the MIT License.