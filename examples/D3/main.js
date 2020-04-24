var raw;
var data;
async function getData() {
  raw = await d3.csv("CSSQuizScore.csv");
  data = clearData(raw);
  render(data);
}

function select(className) {
  render(data, className);
}

var compareByScore = function (a, b) {
  //
  return Number(a["成绩"]) < Number(b["成绩"]) ? -1 : 1;
};

function sort(comparator) {
  render(data, "", comparator);
}

function render(data, className, comparator) {
  let bars = d3.select("#stage").selectAll("div.h-bar").data(data);
  // enter
  bars
    .enter()
    .append("div")
    .attr("class", "h-bar")
    .style("width", function (d) {
      return d["成绩"] * 7 + "px";
    })
    .html('<span class="name"></span>')
    .append("span")
    .attr("class", "score")
    .text(function (d) {
      return d["成绩"];
    });

  // debugger;

  d3.selectAll("span.name")
    .data(data)
    .text(function (d) {
      return d["name"];
    });
  // update
  d3.selectAll("div.h-bar").attr("class", "h-bar");

  // d3.select("body").selectAll("div.h-bar") //
  //     .data(data)
  //     .exit().remove();

  d3.select("body")
    .selectAll("div.h-bar")
    .filter(function (d, i) {
      return d["班级"] == className;
    })
    .classed("selected", true);

  if (comparator) d3.select("body").selectAll("div.h-bar").sort(comparator);
}

function clearData(raw) {
  const data = [];
  var i = 0;
  raw.forEach(function (value) {
    // console.log(value['姓名']);
    data[i] = {};
    // debugger;
    name = getChinese(value["姓名"]);
    if (!isNameExist(name, data) && name != "") {
      // 如果存在
      data[i]["name"] = name;
      data[i]["班级"] = value["班级"];
      data[i]["答题时长"] = value["答题时长"];
      data[i]["成绩"] = getBestScore(name, raw);
      i++;
    }
  });
  // 删除最后一个元素
  data.pop();
  return data;
}

function getChinese(strValue) {
  if (strValue != null && strValue != "") {
    var reg = /[\u4e00-\u9fa5]/g;
    result = strValue.match(reg);
    if (result) {
      return result.join("");
    } else {
      return "";
    }
  } else return "";
}

function getBestScore(name, obj) {
  let score = 0;
  for (const key in obj) {
    // console.log("第", key, '次对比前', score, obj[key]['总得分'], (Number(obj[key]['总得分']) > score));
    if (obj[key]["姓名"] == name && Number(obj[key]["总得分"]) > score) {
      score = obj[key]["总得分"];
      // console.log('对比后', key, score, obj[key]['总得分']);
    }
  }
  return score;
}

function isNameExist(name, obj) {
  for (var index in obj) {
    // console.log('key=', index, 'value=', obj[index]);
    if (obj[index]["name"] == name) {
      return true;
    }
  }
  return false;
}
