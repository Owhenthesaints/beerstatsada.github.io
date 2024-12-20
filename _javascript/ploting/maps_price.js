import maps_price from '../../data/maps_price.csv';

export function mapsPrice(){
  let mean_price_euro = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: maps_price.map(row => row['Origin']),
    z: maps_price.map(row => row['Mean_price_euro_per_litter']),
    colorscale: 'YlGnBu',
    colorbar: {
      title: '€/L'
    }
  }]
  let price_norm_income_score = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: maps_price.map(row => row['Origin']),
    z: maps_price.map(row => row['Price_norm_income_score']),
    colorscale: 'YlGnBu',
    colorbar: {
      title: 'Score'
    }

  }]
  let income_average_rating = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: maps_price.map(row => row['Origin']),
    z: maps_price.map(row => row['income_average_rating']),
    colorscale: 'YlGnBu',
    colorbar: {
      title: 'Score'
    }
  }]

  Plotly.newPlot('sylvain_mean_euro', mean_price_euro, {
    title: 'Mean price in €/L'

  });

  Plotly.newPlot('sylvain_norm_income_score', price_norm_income_score, {
    title: 'Score of average beer price adjusted by the mean income of country'
  });

  Plotly.newPlot('sylvain_income_avg_rating', income_average_rating,{
    title: 'Score of average beer rating vs mean income of country'
  });
}
