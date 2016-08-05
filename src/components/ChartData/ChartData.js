import React from 'react';
import rd3 from 'rd3';


class ChartData extends React.Component {
  constructor() {
    super();
    this.lines = [];
  }

  addLineData(line) {
    this.lines.push(line);
    this.createCompoundInterestGraph();
  }

  compoundInterest(data, years) {
    var innerResult = 1 + (data.interestRate / data.compounding);
    var result = data.principal * Math.pow(1 + (data.interestRate / data.compounding), years * data.compounding);
    result = result.toFixed(2);
    return result;
  }

  createCompoundInterestGraph() {
    var graphInfo = [];
    for (var j = 0; j < this.lines.length; j++) {
      console.log(this.lines);
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
    }
    return graphInfo;
  }

  render() {
    var LineChart = rd3.LineChart;
    return (
      <LineChart
      legend={true}
      data={this.createCompoundInterestGraph()}
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