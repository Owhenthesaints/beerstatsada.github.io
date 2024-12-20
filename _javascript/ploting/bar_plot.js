import top10 from '../../data/top10.csv';

export function barPlot(){
  let score1 = {
    x: top10.map(row => row["Origin"]),
    y: top10.map(row => row["score1_Mean_grade"]),
    type: 'bar',
    name: 'Mean grade'
  }
  let score2 = {
    x: top10.map(row => row["Origin"]),
    y: top10.map(row => row["score2_Price_norm_income_score"]),
    type: 'bar',
    name: 'Price norm income score'
  }
  let score3 = {
    x: top10.map(row => row["Origin"]),
    y: top10.map(row => row["score3_income_average_rating"]),
    type: 'bar',
    name: 'Income average rating'
  }
  let score4 = {
    x: top10.map(row => row["Origin"]),
    y: top10.map(row => row["score4_normalized_number_breweries_inversed"]),
    type: 'bar',
    name: 'Normalized number breweries inversed'
  }
  let score5 = {
    x: top10.map(row => row["Origin"]),
    y: top10.map(row => row["score5_consumption_per_inhabitant_L_per_year_wikipedia"]),
    type: 'bar',
    name: 'Consumption per inhabitant L per year wikipedia'
  }
  const data = [score1, score2, score3, score4, score5];

  const layout = {
    title: 'Top 10 countries to launch beer',
    barmode: 'stack',
    xaxis: {
      title: 'Country'
    },
    yaxis: {
      title: 'Score'
    }
  };

  Plotly.newPlot('bar_plot', data, layout);
}
