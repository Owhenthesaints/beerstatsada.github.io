import time_series_rb from '../../data/seasonal_trends_sample_RB.csv';
import time_series_ba from '../../data/seasonal_trends_sample_BA.csv';

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
  return selector
}

export function plotTimeSeries() {
  let selector = populateDatasetSelector();

  // function to plot
  function plot(used_dataset) {
    let dataset = (used_dataset === 'Beer Advocate') ? time_series_ba : time_series_rb;
    // set x
    let x_ba = Object.keys(dataset[0]).slice(1);
    const year = 2024;
    const x_iso_ba = x_ba.map(x => `${year}-${x}`);

    // setup y
    let y_ba = []
    for (let key of x_ba) {
      y_ba.push(dataset[0][key]);
    }

    let trace_ba = {
      x: x_iso_ba,
      y: y_ba,
      mode: 'lines',
      name: 'BA'
    };

    let data = [trace_ba];

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

  function selectorCallback() {
    let selected = selector.options[selector.selectedIndex].value;
    plot(selected);
  }
  selector.addEventListener('change', selectorCallback);

  plot('Beer Advocate');
}
