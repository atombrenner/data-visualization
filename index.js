'use strict';

var chart = d3.select("#chart");
var margin = {top:10, bottom:50, left:50, right:30};
var width = chart.node().clientWidth - margin.left - margin.right;
var height = chart.node().clientHeight - margin.top - margin.bottom;

var scaleX = d3.scaleLinear().domain([0, 10]).range([0, width]);
var scaleY = d3.scaleLinear().domain([0, 10]).range([height, 0]);

var axisX = d3.axisBottom(scaleX);
var axisY = d3.axisLeft(scaleY);

chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(${margin.left}, ${margin.top + height})`)
    .call(axisX);
chart.append('g')
    .attr('class', 'y axis')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    .call(axisY);

