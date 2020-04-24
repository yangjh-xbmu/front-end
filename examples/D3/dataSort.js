var data = [
    { expense: 10, category: "伙食" },
    { expense: 15, category: "娱乐" },
    { expense: 30, category: "伙食" },
    { expense: 50, category: "学习" },
    { expense: 80, category: "娱乐" },
    { expense: 65, category: "伙食" },
    { expense: 55, category: "娱乐" },
    { expense: 30, category: "学习" },
    { expense: 20, category: "伙食" },
    { expense: 10, category: "学习" },
    { expense: 8, category: "娱乐" }
];

function render(data, category, comparator) {
    d3.select("#stage").selectAll("div.h-bar") // 
        .data(data)
        .enter().append("div")
        .attr("class", "h-bar")
        .append("span");

    d3.select("body").selectAll("div.h-bar") // 
        .data(data)
        .exit().remove();

    d3.select("body").selectAll("div.h-bar") // 
        .data(data)
        .attr("class", "h-bar")
        .style("width", function (d) {
            return (d.expense * 5) + "px";
        })
        .select("span")
        .text(function (d) {
            return d.category;
        });

    d3.select("body").selectAll("div.h-bar")
        .filter(function (d, i) { // <-E
            return d.category == category;
        })
        .classed("selected", true);


    if (comparator)
        d3.select("body")
            .selectAll("div.h-bar")
            .sort(comparator); // 
}

var compareByExpense = function (a, b) {  //
    return a.expense < b.expense ? -1 : 1;
};
var compareByCategory = function (a, b) {  // 
    return a.category < b.category ? -1 : 1;
};

render(data);

function sort(comparator) {
    render(data, '', comparator);
}
function select(category) {
    render(data, category);
}
