import maps_price from '../../data/maps_price.csv';

export function mapsPrice(){
  let mean_price_euro = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: maps_price.map(row => row['Origin']),
    z: maps_price.map(row => row['Mean_price_euro_per_litter']),
    colorscale: 'YlGnBu'
  }]
  let price_norm_income_score = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: maps_price.map(row => row['Origin']),
    z: maps_price.map(row => row['Price_norm_income_score']),
    colorscale: 'YlGnBu'
  }]
  let income_average_rating = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: maps_price.map(row => row['Origin']),
    z: maps_price.map(row => row['income_average_rating']),
    colorscale: 'YlGnBu'
  }]

  Plotly.newPlot('sylvain_mean_euro', mean_price_euro);
  Plotly.newPlot('sylvain_norm_income_score', price_norm_income_score);
  Plotly.newPlot('sylvain_income_avg_rating', income_average_rating);
}
