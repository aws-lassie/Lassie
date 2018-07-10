import React, { Component } from 'react';
import styles from './styles.css';
import {withFauxDOM} from 'react-faux-dom';
import * as d3 from 'd3';

class Durations extends React.Component {
  render () {
    return (
      <div class="durations">
        <h5 class="sectionTitle">Durations</h5>
        {this.props.durations}
      </div>
    )
  }

  componentDidMount() {
    var faux = this.props.connectFauxDOM('div', 'durations');

    var component = this;

    // Set the dimensions of the canvas / graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 800 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDur = d3.timeParse("%M:%S")

    // Set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    //Set the area
    var area2 = d3.area()
      .x(function(d) { return x(d.dur); })
      .y0(height)
      .y1(function(d) { return y(d.num); });

    // Define the line
    var valueline2 = d3.line()
      .x(function(d) { return x(d.dur); })
      .y(function(d) { return y(d.num); });


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

    // Define the axes
    var xAxis = d3.axisBottom().scale(x)
      .ticks(5);

    var yAxis = d3.axisLeft().scale(y)
      .ticks(10);

      var dur = [
        {time: "01:38", value:14.2},
        {time: "02:18", value:2.2},
        {time: "03:20", value:13.5},
        {time: "04:07", value:20.2},
        {time: "05:02", value:14.8},
        {time: "06:07", value:4.6},
        {time: "07:07", value:31.6},
        {time: "08:33", value:32.0},
        {time: "09:16", value:45.4},
        {time: "10:04", value:37.3},
      ];

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "14px") 
        .style("text-decoration", "underline")  

      // Get the data
      dur.forEach(function(d) {
          d.dur = parseDur(d.time);
          d.num = +d.value;
          });

      // Scale the range of the data
      x.domain(d3.extent(dur, function(d) { return d.dur; }));
      y.domain([0, d3.max(dur, function(d) { return d.num; })]);

      // add the area
      svg.append("path")
        .datum(dur)
        .attr("class", "area2")
        .attr("d", area2)


      // Add the valueline path.
      svg.append("path")
          .attr("class", "pathLine2")
          .attr("d", valueline2(dur))

      // Add the scatterplot
      svg.selectAll("dot")	
            .data(dur)			
        .enter().append("circle")								
            .attr("r", 3)		
            .attr("cx", function(d) { return x(d.dur); })		 
            .attr("cy", function(d) { return y(d.num); })	
            .attr("class", "dot2")	
            .on("mouseover", function(d) {		
                div.transition()		
                    .duration(200)		
                    .style("opacity", .9);		
                div.html(d.num)	
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px");	
                })					
            .on("mouseout", function(d) {		
                div.transition()		
                    .duration(500)		
                    .style("opacity", 0);	
            });

      // Add the X Axis
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      // Add the Y Axis
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
   
  }
}


const FauxDurations = withFauxDOM(Durations);

export default FauxDurations;