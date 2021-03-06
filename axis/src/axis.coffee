
chart = d3.select("#chart")
margin = {top:10, bottom:50, left:50, right:30}
width = chart.node().clientWidth - margin.left - margin.right
height = chart.node().clientHeight - margin.top - margin.bottom

scaleX = d3.scale.linear().domain([0, 10]).range([0, width])
scaleY = d3.scale.linear().domain([0, 10]).range([height, 0])

axisX = d3.svg.axis().scale(scaleX).orient('bottom')
axisY = d3.svg.axis().scale(scaleY).orient('left')

chart.append('g').attr('class', 'x axis').attr('transform', "translate(#{margin.left}, #{margin.top + height})").call(axisX)
chart.append('g').attr('class', 'y axis').attr('transform', "translate(#{margin.left}, #{margin.top})").call(axisY)


