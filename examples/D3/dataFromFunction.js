var data = [];

var newData = function (key) {
    data.push(function (key) {
        return 15 + key * key;
    });
    return data;
};

function render() {
    var selection = d3.select("#functionStage")
        .selectAll("div")
        .data(newData);

    selection.enter().append("div").append("span");

    selection.exit().remove();

    selection.attr("class", "v-bar")
        .style("height", function (d, i) {
            return d(i) + "px";
        })
        .select("span")
        .text(function (d, i) {
            return d(i);
        });
}

setInterval(function () {
    render();
}, 1500);

render();
