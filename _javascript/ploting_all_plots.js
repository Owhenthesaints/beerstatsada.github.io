

const trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

const data = [trace1];

// Layout
const layout = {
  title: 'Simple Line Chart',
  xaxis: { title: 'X Axis Label' },
  yaxis: { title: 'Y Axis Label' }
};

// Render Plot
Plotly.newPlot('specific', data, layout);
