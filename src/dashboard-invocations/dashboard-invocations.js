import React, { Component } from 'react';
import styles from './dashboard-invocations.css';
import {withFauxDOM} from 'react-faux-dom';
import * as d3 from 'd3';

console.log('D3-----------------', d3);
   
class Invocations extends React.Component {
  render() {
    return (
      <div class="invocations">
        <h5 class="invocationsSectionTitle">Invocations</h5>
        {this.props.invocations}
      </div>
    )
  }

  componentDidMount() {
    var faux = this.props.connectFauxDOM('div', 'invocations');

    var component = this;

    // Set the dimensions of the canvas / graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 565 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.timeParse("%d-%m-%Y");

    // Set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    //Set the area
    var area = d3.area()
      .x(function(d) { return x(d.date); })
      .y0(height)
      .y1(function(d) { return y(d.close); });

    // Define the line
    var valueline = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.close); });


    // Define the div for the tooltip
    var div = d3.select(faux).append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

    // Adds the svg canvas
    var svg = d3.select(faux)
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");

console.log('1---------------------')
    // Define the axes
    var xAxis = d3.axisBottom().scale(x)
      .ticks(5);

    var yAxis = d3.axisLeft().scale(y)
      .ticks(10);
console.log('2----------------------')

    var data = [
    {time: "01-07-2018", value:14.2},
    {time: "02-07-2018", value:10.2},
    {time: "03-07-2018", value:31.5},
    {time: "04-07-2018", value:20.2},
    {time: "05-07-2018", value:14.8},
    {time: "06-07-2018", value:24.6},
    {time: "07-07-2018", value:1.6},
    {time: "08-07-2018", value:32.0},
    {time: "09-07-2018", value:27.4},
    {time: "10-07-2018", value:37.3},
    ];

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "14px") 
        .style("text-decoration", "underline")  
console.log('7--------------------------')
      // Get the data
      data.forEach(function(d) {
          d.date = parseDate(d.time);
          d.close = +d.value;
          });

console.log('3--------------------------')

      // Scale the range of the data
      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.value; })]);

      // add the area
      svg.append("path")
        .datum(data)
        .attr("class", "area")
        .attr("d", area)


      // Add the valueline path.
      svg.append("path")
          .attr("class", "pathLine")
          .attr("d", valueline(data))

console.log('4--------------------------')

      // Add the scatterplot
      svg.selectAll("dot")	
            .data(data)			
        .enter().append("circle")								
            .attr("r", 3)		
            .attr("cx", function(d) { return x(d.date); })		 
            .attr("cy", function(d) { return y(d.close); })	
            .attr("class", "dot")	
            .on("mouseover", function(d) {		
                div.transition()		
                    .duration(200)		
                    .style("opacity", .9);		
                div.html(d.close)	
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px");	
                })					
            .on("mouseout", function(d) {		
                div.transition()		
                    .duration(500)		
                    .style("opacity", 0);	
            });
console.log('5--------------------------')

      // Add the X Axis
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      // Add the Y Axis
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);

console.log('6--------------------------')
      
  }
}

const FauxInvocations = withFauxDOM(Invocations);

export default FauxInvocations;

