import React from 'react';
import ChartData from '../ChartData/ChartData.js';
import ChartInput from '../ChartInput/ChartInput.js';
import s from './ChartContainer.css';
import rd3 from 'rd3';



class ChartContainer extends React.Component {
  constructor() {
    super();
    this.maxX = 0;
    this.maxY = 0;
    this.minY = 0;
    this.state = {};
    this.lineData = [];
    this.lines = [];
    this.chartData = new ChartData();
  }

  addNewLine(newLine) {
    this.lineData = this.chartData.addLineData(newLine);
    this.setState({});
    this.findRange();
  }


  findRange() {
    this.minY = this.lineData[0].values[0].y;
    for (var i = 0; i < this.lineData.length; i++) {
      for (var j = 0; j < this.lineData[i].values.length; j++) {
        if (this.lineData[i].values[j].x > this.maxX) {
          this.maxX = this.lineData[i].values[j].x;
        }
        if (this.lineData[i].values[j].y > this.maxY) {
          this.maxY = this.lineData[i].values[j].y;
        }
        if (this.lineData[i].values[j].y < this.minY) {
          this.minY = this.lineData[i].values[j].y;
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
      <div className={s.test}>
        <ChartInput className={s.third} onSubmit={this.addNewLine.bind(this)} />
        <LineChart
        className={s.twothird}
        legend={true}
        data={this.lineData}
        title="Compound Interest"
        width={"1000"}
        height={"600"}
        yAxisLabel="$"
        xAxisLabel="Years"
        gridHorizontal={true}
        domain={{x: [0,this.maxX + 1], y: [this.minY - 10,this.maxY + 10]}} />
      </div>
      );
  }
}

export default ChartContainer;

