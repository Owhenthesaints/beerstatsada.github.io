import triple_map_country from '../../data/country_analysis3.csv';

export function plotMaps() {
  /** @type {CsvDataRow[]}*/
  const typedCsvData = triple_map_country;

  let consumption_pc = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['consumption_per_inhabitant_L_per_year_wikipedia']),
    autocolorscale: true,
    visible: true,
    colorscale: 'RdBu'
  }

  let population = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['population_in_2010']),
    visible: false,
    colorscale: 'YlOrRd',
    title: 'Population in 2010'
  }

  let num_users_log_scale = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['log_num_users']),
    visible: false,
    colorscale: 'YlOrRd',
    title: 'Number of users (log scale)'
  }

  let consumption_p_country = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['consumption_per_country_millionL_per_year_wikipedia']),
    visible: false,
    colorscale: 'YlOrRd'
  }

  let avg_nbr_ratings = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['avg_nbr_ratings']),
    visible: false,
    colorscale: 'YlOrRd'
  }

  let normalized_breweries = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['normalized_number_breweries']),
    visible: false,
    colorscale: 'YlOrRd',
    colorbar: {
      title: 'L⁻¹*person⁻¹'
    }
  }

  let percentage_reviewers_per_countries = {
    type: 'choropleth',
    locationmode: 'country names',
    locations: typedCsvData.map(row => row['country']),
    z: typedCsvData.map(row => row['percentage_reviewers_per_country']*100),
    visible: false,
    colorscale: 'YlOrRd',
    colorbar: {
      title: 'Percentage (%)',
      ticksuffix: '%'
    }

  }

  Plotly.newPlot('triple_map', [consumption_pc, consumption_p_country, num_users_log_scale, avg_nbr_ratings, percentage_reviewers_per_countries, normalized_breweries, population], {
    title: 'Different statistics per country',
    updatemenus: [{
      y: 0.8,
      yanchor: 'top',
      buttons: [
        {
          method: 'restyle',
          args: ['visible', [true, false, false, false, false, false, false]],
          label: 'Consumption of beer per capita (L/year)'
        },
        {
          method: 'restyle',
          args: ['visible', [false, true, false, false, false, false, false]],
          label: 'Consumption per country (million L/year)'
        },
        {
          method: 'restyle',
          args: ['visible', [false, false, true, false, false, false, false]],
          label: 'Number of users (log scale)'
        },
        {
          method: 'restyle',
          args: ['visible', [false, false, false, true, false, false, false]],
          label: 'Average number of ratings'
        },
        {
          method: 'restyle',
          args: ['visible', [false, false, false, false, true, false, false]],
          label: 'Percentage of country reviewers'
        },
        {
          method: 'restyle',
          args: ['visible', [false, false, false, false, false, true, false]],
          label: 'number of breweries per person per litre'
        },
        {
          method: 'restyle',
          args: ['visible', [false, false, false, false, false, false, true]],
          label: 'Population'
        }
      ]
    }]
  });


}
