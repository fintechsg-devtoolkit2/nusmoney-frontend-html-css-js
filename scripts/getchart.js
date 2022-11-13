// Create a pie chart showing expenses by category
// Chart derived from https://d3-graph-gallery.com/graph/pie_basic.html

const chartform = document.getElementById('chartform');
const startdate = document.getElementById('startdate');
const enddate = document.getElementById('enddate');
const myChart = document.getElementById('myChart');
const myLegend = document.getElementById('myLegend');

function getCategoriesFromApi(event) {

// mock API hosted by Postman
  let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io"

  var settings = {
    "url": `${url}/categories?startdate=${startdate}&enddate=${enddate}`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
  // var myArray = [];
  console.log("calling API");

  // call API
  $.ajax(settings).done(function (response) {
    myPlotData = response;
    buildChart(myPlotData);
    buildLegend(myPlotData);
    console.log(myPlotData);
  });
  event.preventDefault();
}


function buildChart(data){
  // set the dimensions and margins of the graph
  var width = 450
      height = 450
      margin = 40

  // the radius of the pieplot is half the width or half the height
  var radius = Math.min(width, height) / 2 - margin

  // append the svg object to the div called 'myChart'
  var svg = d3.select("#myChart")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // set the color scale
  var color = d3.scaleOrdinal()
    .domain(data)
    .range(["#111D4A", "#55C1FF", "#F9B5AC",
            "#DA3E52", "#987284", "#F85E00",
            "#3F0D12", "#DEF6CA", "#38369A"])
  
  // compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.value; })
  var data_ready = pie(d3.entries(data))

  // build the pie chart: each part of the pie is a path that we build using the arc function
  svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key))})
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

}

function buildLegend(data) {

}

chartform.addEventListener('submit', getCategoriesFromApi);
