import price_dataset from '../../data/data_for_boxplot.csv';

function populateSelectorBeerType() {
  let selector = document.getElementById('box_plot_selector_type');
  let unique_beer_types = [...new Set(price_dataset.map(row => row['Beer_type']))];
  // add All
  let option = document.createElement('option');
  option.text = 'All';
  selector.add(option);
  unique_beer_types.sort();
  // add all other options
  unique_beer_types.forEach(beer_type => {
    let option = document.createElement('option');
    option.text = beer_type;
    selector.add(option);
  });
  return selector;
}

function populateSelectorCountry() {
  let selector = document.getElementById('box_plot_selector_country');
  let unique_countries = [...new Set(price_dataset.map(row => row['Origin']))];
  let option = document.createElement('option');
  // add All
  option.text = 'All';
  selector.add(option);
  unique_countries.sort();
  // add all other options
  unique_countries.forEach(country => {
    let option = document.createElement('option');
    option.text = country;
    selector.add(option);
  });
  return selector;
}

function boxPlotData(beer_type, country) {
  // deep copy
  let data_for_plot = JSON.parse(JSON.stringify(price_dataset));
  if (beer_type !== 'All') {
    data_for_plot = data_for_plot.filter(row => row['Beer_type'] === beer_type);
  }
  if (country !== 'All') {
    data_for_plot = data_for_plot.filter(row => row['Origin'] === country);
  }
  let unique_countries = [...new Set(data_for_plot.map(row => row['Origin']))];
  // basically give back all the prices per country
  return unique_countries.map(country => [country, data_for_plot.filter(row => row['Origin'] === country).map(row => row['Price_per_litter'])]);
}

export function plotBoxPlot() {
  let type_selector = populateSelectorBeerType();
  let country_selector = populateSelectorCountry();
  let type= 'All';
  let country = 'All';
  refreshBoxPlot();

  function refreshBoxPlot()
  {
    let data = boxPlotData(type, country).map(double => {
      return {
        y: double[1],
        type: 'box',
        name: double[0]
      }
    });
    Plotly.newPlot('box_plots', data, {
      title: 'Box plots indicating the price per litter for different countries',
      xaxis: {
        title: 'Country',
        tickangle: 45,
      },
      yaxis: {
        title: 'Price per litter(€/L)',
      }
    });
  }
  function dropmenuCallback(event) {
    if (event.target.id === 'box_plot_selector_type') {
      type = event.target.value;
    } else if (event.target.id === 'box_plot_selector_country') {
      country = event.target.value;
    }
    refreshBoxPlot();
  }
  type_selector.addEventListener('change', dropmenuCallback);
  country_selector.addEventListener('change', dropmenuCallback);
}
