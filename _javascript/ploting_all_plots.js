/**
 * @typedef {Object} CsvDataRow
 * @property {string} Origin
 * @property {number} Mean_grade
*/

import {plotMap} from './ploting/plot_country.js';
import {plotMaps} from "./ploting/multi_map_plot";
import {plotBoxPlot} from "./ploting/box_plots";
import {plotTimeSeries} from "./ploting/time_series";
import {RandomNameHandler} from "./ploting/random_name";
import {barPlot} from "./ploting/bar_plot";
import {mapsPrice} from "./ploting/maps_price";


//plotMap();

plotMaps();

plotBoxPlot();

plotTimeSeries();

RandomNameHandler();

barPlot();

mapsPrice();
