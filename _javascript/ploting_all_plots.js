import csvData from '../data/mean_grade_per_type_1.csv'


let data = [{
  type : 'choropleth',
  locationmode: 'country names',
  locations: csvData.map(row => row['Origin']),
  z: csvData.map(row => row['Mean_grade']),
  autocolorscale: true
}]

// Layout
const layout = {
  title: 'Simple Line Chart',
  xaxis: { title: 'X Axis Label' },
  yaxis: { title: 'Y Axis Label' }
};

// Render Plot
Plotly.newPlot('specific', data, layout);
