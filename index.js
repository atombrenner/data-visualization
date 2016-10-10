'use strict';

var chart = d3.select("#chart");
var margin = {top:10, bottom:50, left:50, right:30};
var width = chart.node().clientWidth - margin.left - margin.right;
var height = chart.node().clientHeight - margin.top - margin.bottom;

var x = d3.scaleTime()
    .domain([data[0][0], data[data.length-1][0]])
    .range([0, width]);
var axisX = d3.axisBottom(x);

var line = d3.line().x((t) => x(t[0])).y((t) => scaleY(t[1]));

var scaleY = d3.scaleLinear().domain([0, 10]).range([height, 0]);
var axisY = d3.axisLeft(scaleY);

chart = chart.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${height})`)
    .call(axisX);

chart.append('g')
    .attr('class', 'y axis')
    .call(axisY);

chart.append("path")
    .attr("class", "line")
    .datum(data)
    .attr("d", line);

d3.selectAll("#chart").call(d3.drag().on('start', () => console.log('started')));