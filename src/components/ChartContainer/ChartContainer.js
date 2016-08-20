import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ChartData from '../ChartData/ChartData.js';
import ChartInput from '../ChartInput/ChartInput.js';
import ChartResult from '../ChartResult/ChartResult.js';
import s from './ChartContainer.css';
import rd3 from 'rd3';
import cx from 'classnames';



class ChartContainer extends React.Component {
  constructor() {
    super();
    this.maxX = 0;
    this.maxY = 0;
    this.minY = 0;
    this.state = {};
    this.lineData = [];
    this.lines = [];
    this.line = null;
    this.chartData = new ChartData();
    this.endResult = null;
  }

  addNewLine(newLine) {
    this.line = newLine;
    this.lineData = this.chartData.addLineData(newLine);
    this.setState({});
    this.findRange();
    this.endResult = findEndResult();
  }

  findEndResult() {
    if (this.line) {
      var total = this.lineData[this.lineData.length - 1].x;
      var principal = this.line.principal * this.line.years;
      var interest = total - principal;
      var endResult = {
        total: total,
        principal: principal,
        interest: interest
      }
      return endResult;
    }
    return null;
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
  render() {
    var LineChart = rd3.LineChart;
    return (
      <div className={s.container}>
        <div className={s.row}>
          <div className={cx(s.three, s.columns)}>
            <ChartInput onSubmit={this.addNewLine.bind(this)} />
            <ChartResult data={this.endResult}/>
          </div>
          <div className={cx(s.nine, s.columns)}>
            <LineChart
            width='100%'
            viewBoxObject={{
              x: 0,
              y: 0,
              width: 400,
              height: 500
            }}
            legend={true}
            data={this.lineData}
            height={"600"}
            xAxisLabel="Years"
            gridHorizontal={true}
            domain={{x: [0,this.maxX], y: [this.minY, this.maxY + (this.maxY*1/10)]}} />
          </div>
        </div>
      </div>
      );
  }
}

export default withStyles(s)(ChartContainer);

