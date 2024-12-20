import time_series_rb from '../../data/seasonal_trends_sample_RB_ra.csv';
import time_series_ba from '../../data/seasonal_trends_sample_BA_ra.csv';

function populateDatasetSelector() {
  let selector = document.getElementById('time_series_dataset_selector');
  // add RB
  let option = document.createElement('option');
  option.text = 'Beer Advocate';
  selector.add(option);
  // add BA
  option = document.createElement('option');
  option.text = 'Rate Beer';
  selector.add(option);
  return selector;
}

function populateBeerTypeSelector(dataset_used) {
  // remove all elements
  while (document.getElementById('time_series_type_selector').length > 0) {
    document.getElementById('time_series_type_selector').remove(0);
  }

  let selector = document.getElementById('time_series_type_selector');
  let dataset = (dataset_used === 'Beer Advocate') ? time_series_ba : time_series_rb;
  const beer_types = [...new Set(dataset.filter((_, index) => index % 2 === 0).map(row => row['style']))];
  beer_types.sort();
  for (let beer_type of beer_types) {
    let option = document.createElement('option');
    option.text = beer_type;
    selector.add(option);
  }
  return selector;
}


export function plotTimeSeries() {
  let selector_dataset = populateDatasetSelector();
  let dataset_used = 'Beer Advocate';
  let index_to_plot = 0;
  let selector_style = populateBeerTypeSelector(dataset_used);

  // function to plot
  function plot() {
    let dataset = (dataset_used === 'Beer Advocate') ? time_series_ba : time_series_rb;

    // set x
    let x_ba = Object.keys(dataset[0]).slice(1);
    const year = 2024;
    const x_iso_ba = x_ba.map(x => `${year}-${x}`);

    // setup y
    let y_ba = []
    for (let key of x_ba) {
      y_ba.push(dataset[index_to_plot * 2][key]);
    }
    let y_ba_ra = []
    for (let key of x_ba) {
      y_ba_ra.push(dataset[index_to_plot * 2 + 1][key]);
    }

    let trace_ba = {
      x: x_iso_ba,
      y: y_ba,
      mode: 'lines',
      name: 'Beer Advocate'
    };

    let trace_ba_ra = {
      x: x_iso_ba,
      y: y_ba_ra,
      mode: 'lines',
      name: 'Beer Advocate with rolling average'
    };

    let data = [trace_ba, trace_ba_ra];

    let layout = {
      title: 'Time series of BA',
      xaxis: {
        title: 'Time',
        tickformat: '%B',
        tickangle: 45,
        tickvals: ["2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12"],
      },
      yaxis: {
        title: 'Average Number of reviews'
      }
    };
    Plotly.newPlot('time_series_ratings', data, layout);
  }

  function selectorCallbackDataset() {
    dataset_used = selector_dataset.options[selector_dataset.selectedIndex].value;
    populateBeerTypeSelector(dataset_used);
    index_to_plot = 0;
    selector_style.selectedIndex = 0;
    plot();
  }

  function selectorCallbackStyle() {
    index_to_plot = selector_style.selectedIndex;
    plot();
  }

  selector_dataset.addEventListener('change', selectorCallbackDataset);
  selector_style.addEventListener('change', selectorCallbackStyle)

  plot();
}
