import random_names from '../../data/generated_beer_names.csv';

function populateOriginSelector() {
  let origin_selector = document.getElementById('random_origin_selector');
  let origins = Object.keys(random_names[0]);
  origins.forEach(origin => {
    let option = document.createElement('option');
    option.value = origin;
    option.text = origin;
    origin_selector.appendChild(option);
  });
  return origin_selector;
}

export function RandomNameHandler() {
  let origin_selector = populateOriginSelector();
  let button_selector = document.getElementById('random_beer_generator');
  let div_selector = document.getElementById('random_beer');
  function randomNameGenerator(origin) {
    let random_names_fo = random_names.filter(row=>row[origin]!=='NaN').map(row => row[origin])
    return random_names_fo[Math.floor(Math.random()*random_names_fo.length)];
  }

  function randomNameHandler() {
    let origin = origin_selector.value;
    div_selector.textContent = `random name : "${randomNameGenerator(origin)}" from ${origin}`;
  }

  button_selector.addEventListener('click', randomNameHandler);
}
