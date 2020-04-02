$('document').ready(function() {

  var dataset  = [],
	phase1Array  = [],
	phase2Array = [],
  phase3Array = [],
	phase1ObjectArray = [],
	phase2ObjectArray = [],
  phase3ObjectArray = [],
	stack = d3.layout.stack(),
  phase1Row = d3.selectAll("tr.phase1"),
	phase2Row = d3.selectAll("tr.phase2"),
  phase3Row = d3.selectAll("tr.phase3"),
	/*Width and height*/
	w = 630,
	h = 200,
	barPadding = 40,
	padding = 60,
  duration = 500,
  grouped = false;


	phase1Row.each(function() {
		d3.select(this).selectAll("td").each(function() {
			phase1Array.push(parseInt(d3.select(this).text()));
		})
	});

	phase2Row.each(function() {
		d3.select(this).selectAll("td").each(function() {
			phase2Array.push(parseInt(d3.select(this).text()));
		})
	});

  phase3Row.each(function() {
		d3.select(this).selectAll("td").each(function() {
			phase3Array.push(parseInt(d3.select(this).text()));
		})
	});

	for (var i = 0; i < phase1Array.length; i++) {
		var newObject = {};
		newObject.x = i;
		newObject.y = phase1Array[i];
		phase1ObjectArray.push(newObject);
	};

	for (var i = 0; i < phase2Array.length; i++) {
		var newObject = {};
		newObject.x = i;
		newObject.y = phase2Array[i];
		phase2ObjectArray.push(newObject);
	};

  for (var i = 0; i < phase3Array.length; i++) {
		var newObject = {};
		newObject.x = i;
		newObject.y = phase3Array[i];
		phase3ObjectArray.push(newObject);
	};

	dataset.push(phase1ObjectArray);
	dataset.push(phase2ObjectArray);
  dataset.push(phase3ObjectArray);

	stack(dataset);

	/* Define Y scale */
	var yScale = d3.scale.linear()
		.domain([0,
			d3.max(dataset, function(d) {
				return d3.max(d, function(d) {
					return d.y0 + d.y;
				});
			})
		])
		.range([h, padding]);

	/* Create SVG elephase1t */
	var svg = d3.select(".info-chart")
		.append("svg")
		.attr("viewbox", `0 0 ${w / 2} ${h / 2}`)
		.attr("width", w)
		.attr("height", h);

	/* Add a group for each row of data */
	var groups = svg.selectAll("g")
		.data(dataset)
		.enter()
		.append("g")
		.style("fill", function(d, i) {
      if(d, i === 0) {
      return "#007078";
    } else if(d, i === 1) {
      return "#6b8f00";
    }
    else {
      return "#c97a00";
    }
		});

	groups.selectAll("rect")
		.data(function(d) { return d; })
		.enter()
		.append("rect")
		.attr("x", function(d, i){
			return i * (w / dataset[0].length);
		})
		.attr("y", function(d){
			return yScale(d.y) + yScale(d.y0) - h;
		})
		.attr("width", w / dataset[0].length - barPadding )
		.attr("height", function(d){
			return h - yScale(d.y);
		})
		.on("mouseover", function(d) {

			/* Get this bar's x/y values, then augphase1t for the tooltip */
			var xPosition,
			yPosition = parseInt(d3.select(this).attr("y") );


			if (d3.select(this).attr("x") < 350) {

        if (grouped) {
            console.log("We be grouped!");
            xPosition = parseFloat(d3.select(this).attr("x")) + 14;
          } else  {
            xPosition = parseFloat(d3.select(this).attr("x")) + 27;
          }

				d3.select(".tooltip").classed("tooltip-left", false).classed("tooltip-right", true);
			} else {
				xPosition = parseFloat(d3.select(this).attr("x")) - 143;
				d3.select(".tooltip").classed("tooltip-left", true).classed("tooltip-right", false);;
			}

			/* Update the tooltip position and value */
			d3.select(".tooltip")
				.style("left", xPosition + "px")
				.style("top", yPosition + "px")
				.select(".value")
				.text(d.y);

			/* Show the tooltip */
			d3.select(".tooltip").classed("hidden", false);

			})
			.on("mouseout", function() {
				/* Hide the tooltip */
				d3.select(".tooltip").classed("hidden", true);
			});

d3.selectAll("input").on("change", change);

function change() {
  if (this.value === "grouped") {
    grouped = true;
    transitionGrouped();
  } else  {
    grouped = false;
    transitionStacked();
  }
}

var transitionGrouped = function() {
	groups.selectAll("rect")
		.transition()
		.duration(duration)
    .delay(function(d, i) { return i / dataset[0].length * duration; })
		.attr("width", (w / dataset[0].length - barPadding) / 2 )
		.transition()
		.duration(duration)
		.attr("x", function(d, i, j){
			return i * (w / dataset[0].length) + ((w / dataset[0].length - barPadding)/2) * j ;
		})
		.transition()
    .duration(duration)
		.attr("y", function(d, i, j){
			return yScale(d.y);
		});
};

var transitionStacked = function() {
	groups.selectAll("rect")
		.transition()
    .duration(duration)
    .delay(function(d, i) { return i / dataset[0].length * duration; })
		.attr("y", function(d){
			return yScale(d.y) + yScale(d.y0) - h;
		})
		.transition()
		.duration(duration)
		.attr("x", function(d, i){
			return i * (w / dataset[0].length);
		})
		.transition()
		.duration(duration)
		.attr("width", w / dataset[0].length - barPadding );
};




// CHART
d3.json("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json", function(json) {

var margin = {top: 0, right: 0, bottom: 0, left: 0};

var containerWidth = +d3.select('.chart-container').style('width').slice(0, -2);
var containerHeight = +d3.select('.chart-container').style('height').slice(0, -2);

  // width and height
  var w = 600 - margin.right - margin.left;
  var h = 400 - margin.top - margin.bottom;

  // container svg
  var svg = d3.select("#map")
              .append("svg")
              .attr('width', containerWidth)
              .attr("height", containerHeight)
              .classed("chart-wrap", true)
              /*
              .call(d3.behavior.zoom().on("zoom", function () {
                svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
              }))
              */
              .append("g");

  // PLOT MAP
  var projection = d3.geo.mercator().translate([w/2, h/2]);
  var land = d3.geo.path()
    .projection(projection);
  var world = svg.selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d", land)
    .style("fill", "#6b8f00");

    // RESPONSIVE WIDTH
  window.onresize = function(){
    // new width
    svg.attr("width", containerWidth);
    // new map
    var newProjection = d3.geo.mercator().translate([width/2, h/2]);
    land.projection(newProjection);
    world.attr("d", land);
    meteors.attr("cx", function(d) {
      return newProjection([d.properties.reclong, d.properties.reclat])[0];
    });
  };

});


})(jQuery);
