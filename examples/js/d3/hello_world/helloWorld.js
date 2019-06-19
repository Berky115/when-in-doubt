// TODO: Setup properly so I don't have to throw script into html
const d3 = require('d3');

 //draw lines an circles with canvas/d3
 d3.select("svg")
 .append("circle")
 .attr("r", 20)
 .attr("cx",20)
 .attr("cy",20)
 .style("fill","red");
 d3.select("svg")
 .append("text")
 .attr("id", "a")
 .attr("x",20)
 .attr("y",20)
 .style("opacity", 0)
 .text("HELLO WORLD");
 d3.select("svg")
 .append("circle")
 .attr("r", 100)
 .attr("cx",400)
 .attr("cy",400)
 .style("fill","lightblue");
 d3.select("svg")
 .append("text")
 .attr("id", "b")
 .attr("x",400)
 .attr("y",400)
 .style("opacity", 0)
 .text("Uh, hi.");

 //set delay over time
 d3.select("#a").transition().delay(1000).style("opacity", 1);
 d3.select("#b").transition().delay(3000).style("opacity", .75);

 //set duration of a transition
 d3.selectAll("circle").transition().duration(2000).attr("cy", 200);