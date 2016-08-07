import React from 'react';
import ChartData from '../ChartData/ChartData.js';
import ChartInput from '../ChartInput/ChartInput.js';
import rd3 from 'rd3';



class ChartContainer extends React.Component {
  constructor() {
    super();
    this.maxX = 0;
    this.maxY = 0;
    this.state = {};
    this.lineData = [];
    this.addNewLine();
  }

  addNewLine() {
        this.chartData = new ChartData();

    var lineData = {
      name: "test1",
      principal: 300,
      interestRate: 5/100,
      years: 10,
      compounding: 1,
    }
    this.lineData = this.chartData.addLineData(lineData);
    var lineData2 = {
      name: "test",
      principal: 200,
      interestRate: 5/100,
      years: 10,
      compounding: 1,
    }
    this.lineData = this.chartData.addLineData(lineData2);
    this.findMaxRange();
  }


  findMaxRange() {
    for (var i = 0; i < this.lineData.length; i++) {
      for (var j = 0; j < this.lineData[i].values.length; j++) {
        if (this.lineData[i].values[j].x > this.maxX) {
          this.maxX = this.lineData[i].values[j].x;
        }
        if (this.lineData[i].values[j].y > this.maxY) {
          this.maxY = this.lineData[i].values[j].y;
        }
      }
    }
  }

  onSubmit(e) {

  }

  handleChange(name, e) {

  }

  render() {
     var LineChart = rd3.LineChart;
    return (
      <div>
        <ChartInput />
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
            domain={{x: [0,this.maxX + 1], y: [100,this.maxY + 10]}} />
          );
      </div>
      );
  }
}

export default ChartContainer