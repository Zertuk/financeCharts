import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LineChart.css';
import rd3 from 'rd3';

class LineChart extends React.Component {
  constructor(lineData) {
    super();
    this.state = {
      lineData: lineData
    }
  }

  render() {
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
}

export default LineChart


