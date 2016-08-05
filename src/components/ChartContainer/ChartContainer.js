import React from 'react';
import ChartData from '../ChartData/ChartData.js';
import ChartInput from '../ChartInput/ChartInput.js';


class ChartContainer extends React.Component {
  constructor() {
    super();
    var data = new ChartData();
    var lineData = {
      principal: 100,
      interestRate: 5,
      years: 5,
      compounding: 1,
    }
    data.addLineData(lineData);
        var lineData2 = {
      principal: 400,
      interestRate: 5,
      years: 5,
      compounding: 1,
    }
    data.addLineData(lineData2)

  }
  onSubmit(e) {

  }

  handleChange(name, e) {

  }

  render() {
    return (
      <div>
        <ChartInput />
        <ChartData />
      </div>
      );
  }
}

export default ChartContainer