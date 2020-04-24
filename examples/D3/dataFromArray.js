var data = [10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8];
function render(data) {
    var bars = d3.select("#arrayStage").selectAll("div.h-bar")
        .data(data);

    bars.enter()
        .append("div")
        .attr("class", "h-bar")
        .style("width", function (d) {
            return (d * 3) + "px";
        })
        .text(function (d) {
            return d;
        });
}

render(data);
