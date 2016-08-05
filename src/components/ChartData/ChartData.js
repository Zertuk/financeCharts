import React from 'react';
import rd3 from 'rd3';


class ChartData extends React.Component {
  constructor() {
    super();
    this.lines = [];
    this.lineData = [];
  }




  addLineData(line) {
    this.lines.push(line);
    this.newData = this.createCompoundInterestGraph();
    this.lineData = [];
    for (var i = 0; i < this.newData.length; i++) {
      this.lineData[i] = {
        name: this.lines[i].name,
        values: this.newData[i],
        strokeWidth: 1
      }
    }
    console.log(this.lineData);
    this.render();
  }

  compoundInterest(data, years) {
    var innerResult = 1 + (data.interestRate / data.compounding);
    var result = data.principal * Math.pow(1 + (data.interestRate / data.compounding), years * data.compounding);
    result = result.toFixed(2);
    return result;
  }

  createCompoundInterestGraph() {
    var newData = [];
    for (var j = 0; j < this.lines.length; j++) {
      var graphInfo = [];
      for (var i = 0; i < this.lines[j].years + 1; i++) {
        console.log(this.lines[j].years);
        var result = this.compoundInterest(this.lines[j], i);
        console.log(result);
        var res = {
          x: i,
          y: parseInt(result)
        }
        graphInfo.push(res);
      }
      newData.push(graphInfo);
    }
    return newData;

  }

  render() {
    var LineChart = rd3.LineChart;
    return (
      <LineChart
      legend={true}
      data={this.lineData}
      title="Compound Interest"
      width={"1000"}
      height={"600"}
      yAxisLabel="$"
      xAxisLabel="Years"
      gridHorizontal={true}
      domain={{x: [0,5], y: [100,175]}} />
    );
  }
}

export default ChartData