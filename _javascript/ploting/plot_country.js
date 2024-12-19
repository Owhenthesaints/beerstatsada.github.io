import csvData from '../../data/origin_stats.csv';

export function plotMap() {
  /** @type {CsvDataRow[]}*/
  const typedCsvData = csvData;

  let data = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['Origin']),
    z: typedCsvData.map(row => row['Mean_grade']),
    autocolorscale: true
  }]

// Layout
  const layout = {
    title: 'Simple Line Chart',
    xaxis: {title: 'X Axis Label'},
    yaxis: {title: 'Y Axis Label'}
  };

// Render Plot
  Plotly.newPlot('specific', data, layout);
}
