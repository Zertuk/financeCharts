import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LineChart.css';
import rd3 from 'rd3';

function infoFactory(principal, rate, compounding) {
  var info = {
    principal: principal,
    rate: rate,
    compounding: compounding
  }
  return info;
}
var info = infoFactory(100, 0.05, 12);


function compoundInterest(info, years) {
  var innerResult = 1 + (info.rate / info.compounding);
  var result = info.principal * Math.pow(1 + (info.rate / info.compounding), years * info.compounding);
  result = result.toFixed(2);
  return result; 
}


function compoundInterestGraph(info, years) {
  var graphInfo = [];
  for (var i = 0; i < years + 1; i++) {
    var result = compoundInterest(info, i);
    var obj = {
      x: i,
      y: parseInt(result)
    }
    graphInfo.push(obj);
  }
  return graphInfo;
}

var info = infoFactory(100, 0.05, 1);
var graph = compoundInterestGraph(info, 5);
var info2 = infoFactory(100, 0.10, 1);
var graph2 = compoundInterestGraph(info2, 5);


var lineData = [
  {
    name: "5%",
    values: graph,
    strokeWidth: 3
  },
  {
    name: "10%",
    values: graph2,
    strokeWidth: 1
  }
]

var LineChart = rd3.LineChart;

function Feedback() {
  return (
<LineChart
  legend={true}
  data={lineData}
  title="Compound Interest"
  width={"1000"}
  height={"600"}
  yAxisLabel="$"
  xAxisLabel="Years"
  gridHorizontal={true}
  domain={{x: [0,5], y: [100,175]}} />
  );
}


// export default class { LineChart }
export default withStyles(s)(Feedback);


