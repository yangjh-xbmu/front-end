// 打开文件，将其赋值给全局变量raw
function getFile(filename) {
    window.raw = '';
    function reqListener() {
        window.raw = d3.csvParse(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    // 使用同步方式打开文件
    oReq.open("GET", filename, false);
    oReq.send();
}
getFile('CSSQuizScore.csv');
// console.log(raw);
// 清理数据
function clearData(raw) {
    const data = [];
    var i = 0;
    raw.forEach(
        function (value) {
            // console.log(value['姓名']);
            data[i] = {};
            // debugger;
            name = getChinese(value['姓名']);
            if (!isNameExist(name, data) && name != "") { // 如果存在
                data[i]['name'] = name;
                data[i]['班级'] = value['班级'];
                data[i]['答题时长'] = value['答题时长'];
                data[i]['成绩'] = getBestScore(name, raw);
                i++;
            }
        }
    );
    // 删除最后一个元素
    data.pop();
    return data;
}
data = clearData(raw);

// 数据绑定及制图

function render(data, className, comparator) {
    let bars = d3.select("#stage").selectAll("div.h-bar").data(data);
    // enter
    bars.enter()
        .append("div")
        .attr("class", "h-bar")
        .style("width", function (d) {
            return (d['成绩']) * 7 + "px";
        })
        .html('<span class="name"></span>')
        .append("span")
        .attr("class", "score")
        .text(function (d) {
            return d['成绩'];
        });

    // debugger;

    d3.selectAll("span.name").data(data)
        .text(function (d) {
            return d['name'];
        });
    // update
    d3.selectAll("div.h-bar").attr("class", "h-bar");

    // d3.select("body").selectAll("div.h-bar") // 
    //     .data(data)
    //     .exit().remove();

    d3.select("body").selectAll("div.h-bar")
        .filter(function (d, i) {
            return d['班级'] == className;
        })
        .classed("selected", true);

    if (comparator)
        d3.select("body")
            .selectAll("div.h-bar")
            .sort(comparator);
}

render(data);

function select(className) {
    render(data, className);
}

var compareByScore = function (a, b) {  //
    return Number(a['成绩']) < Number(b['成绩']) ? -1 : 1;
};

function sort(comparator) {
    render(data, '', comparator);
}


// let name = '何一佑';
// let array = { 0: { 答题时长: "762", name: "何一佑", 班级: "4", 总得分: "100" }, 1: { 答题时长: "762", name: "何一佑", 班级: "4", 总得分: "100" } };
// 查找姓名是否存在
function isNameExist(name, obj) {
    for (var index in obj) {
        // console.log('key=', index, 'value=', obj[index]);
        if (obj[index]['name'] == name) {
            return true;
        }
    }
    return false;

}

// console.log(isNameExist(name, array));
// 处理姓名，只要中文
function getChinese(strValue) {
    if (strValue != null && strValue != "") {
        var reg = /[\u4e00-\u9fa5]/g;
        result = strValue.match(reg);
        if (result) {
            return result.join("");
        } else {
            return "";
        }
    }
    else
        return "";
}
// console.log(getChinese("ddddd"));

// 取得某位同学的最好成绩
function getBestScore(name, obj) {
    let score = 0;
    for (const key in obj) {
        // console.log("第", key, '次对比前', score, obj[key]['总得分'], (Number(obj[key]['总得分']) > score));
        if (obj[key]['姓名'] == name && (Number(obj[key]['总得分']) > score)) {
            score = obj[key]['总得分'];
            // console.log('对比后', key, score, obj[key]['总得分']);
        }
    }
    return score;
}

// name = '潘东丽';
// obj = {
//     0: { 答题时长: "762", 姓名: "何一佑", 班级: "4", 总得分: "100" },
//     1: { 答题时长: "980", 姓名: "何一佑", 班级: "4", 总得分: "50" },
//     2: { 答题时长: "202", 姓名: "哈正家", 班级: "3", 总得分: "100" },
//     3: { 答题时长: "48", 姓名: "李文镜", 班级: "4", 总得分: "100" },
//     4: { 答题时长: "59", 姓名: "李文镜", 班级: "4", 总得分: "90" },
//     5: { 答题时长: "142", 姓名: "李北园", 班级: "4", 总得分: "100" },
//     6: { 答题时长: "209", 姓名: "杨澎锴", 班级: "1", 总得分: "90" },
//     7: { 答题时长: "397", 姓名: "杨澎锴", 班级: "1", 总得分: "80" },
//     8: { 答题时长: "729", 姓名: "杨澎锴", 班级: "1", 总得分: "60" },
//     9: { 答题时长: "142", 姓名: "黄巧丽", 班级: "4", 总得分: "40" },
//     10: { 答题时长: "95", 姓名: "马雪", 班级: "4", 总得分: "100" },
//     11: { 答题时长: "213", 姓名: "杨澎锴", 班级: "1", 总得分: "50" },
//     12: { 答题时长: "192", 姓名: "杨澎锴", 班级: "1", 总得分: "40" },
//     13: { 答题时长: "222", 姓名: "杨澎锴", 班级: "1", 总得分: "10" },
//     14: { 答题时长: "71", 姓名: "英毛措", 班级: "4", 总得分: "50" },
//     15: { 答题时长: "162", 姓名: "英毛措", 班级: "4", 总得分: "50" },
//     16: { 答题时长: "51", 姓名: "英毛措", 班级: "4", 总得分: "50" },
//     17: { 答题时长: "65", 姓名: "英毛措", 班级: "4", 总得分: "60" },
//     18: { 答题时长: "71", 姓名: "英毛措", 班级: "4", 总得分: "60" },
//     19: { 答题时长: "88", 姓名: "英毛措", 班级: "4", 总得分: "60" },
//     20: { 答题时长: "86", 姓名: "英毛措", 班级: "4", 总得分: "70" },
//     21: { 答题时长: "74", 姓名: "黄晨晨", 班级: "4", 总得分: "100" },
//     22: { 答题时长: "119", 姓名: "英毛措", 班级: "4", 总得分: "60" },
//     23: { 答题时长: "805", 姓名: "英毛措", 班级: "4", 总得分: "20" },
//     24: { 答题时长: "48", 姓名: "潘东丽", 班级: "4", 总得分: "100" },
//     25: { 答题时长: "77", 姓名: "潘东丽", 班级: "4", 总得分: "100" },
//     26: { 答题时长: "90", 姓名: "潘东丽", 班级: "4", 总得分: "80" },
//     27: { 答题时长: "75", 姓名: "潘东丽", 班级: "4", 总得分: "90" },
//     28: { 答题时长: "64", 姓名: "潘东丽", 班级: "4", 总得分: "70" },
//     29: { 答题时长: "93", 姓名: "潘东丽", 班级: "4", 总得分: "80" },
//     30: { 答题时长: "786", 姓名: "英毛措", 班级: "4", 总得分: "30" },
//     31: { 答题时长: "90", 姓名: "潘东丽", 班级: "4", 总得分: "70" },
//     32: { 答题时长: "59", 姓名: "潘东丽", 班级: "4", 总得分: "70" },
//     33: { 答题时长: "65", 姓名: "潘东丽", 班级: "4", 总得分: "80" },
//     34: { 答题时长: "88", 姓名: "潘东丽", 班级: "4", 总得分: "60" },
//     35: { 答题时长: "78", 姓名: "潘东丽", 班级: "4", 总得分: "70" },
//     36: { 答题时长: "117", 姓名: "潘东丽", 班级: "4", 总得分: "60" },
//     37: { 答题时长: "78", 姓名: "潘东丽", 班级: "4", 总得分: "50" },
//     38: { 答题时长: "739", 姓名: "潘东丽", 班级: "4", 总得分: "40" },
//     39: { 答题时长: "54", 姓名: "宋婉铭", 班级: "4", 总得分: "100" }
// };

// console.log(getBestScore(name, obj));
