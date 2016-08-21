import React from 'react';
import rd3 from 'rd3';
import s from './ChartResult.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class ChartResult extends React.Component {
  constructor(data) {
    super();
    this.total = data.data.total;
    this.principal = data.data.principal;
    this.interest = data.data.interest;
  }

  render() {
    return (
      <div>
        <p>Total: {this.state.data.total}</p>
        <p>principal: {this.state.data.principal}</p>
        <p>Interest: {this.state.data.interest}</p>
      </div>
      );
  }
}

export default withStyles(s)(ChartResult)