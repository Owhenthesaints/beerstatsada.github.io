import triple_map_country from '../../data/country_analysis3_test.csv';

export function plotMaps() {
  /** @type {CsvDataRow[]}*/
  const typedCsvData = triple_map_country;

  let consumption_pc = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['consumption_per_inhabitant_L_per_year']),
    autocolorscale: true,
    visible: true,
    colorscale: 'RdBu'

  }

  let consumption_p_country = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['consumption_per_country_millionL_per_year']),
    visible: false,
    colorscale: 'Viridis'
  }

  let avg_nbr_ratings = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['avg_nbr_ratings']),
    visible: false,
    colorscale: 'YlGnBu'
  }

  Plotly.newPlot('triple_map', [consumption_pc, consumption_p_country, avg_nbr_ratings], {
    title: 'Differnt statistics per country',
    updatemenus: [{
      y: 0.8,
      yanchor: 'top',
      buttons: [{
        method: 'restyle',
        args: ['visible', [true, false, false]],
        label: 'Consumption per inhabitant(L/year)'
      }, {
        method: 'restyle',
        args: ['visible', [false, true, false]],
        label: 'Consumption per country(million L/year)'
      }, {
        method: 'restyle',
        args: ['visible', [false, false, true]],
        label: 'Average number of ratings'
      }]
    }]
  });


}
