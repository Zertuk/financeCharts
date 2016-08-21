import React from 'react';
import rd3 from 'rd3';
import s from './ChartResult.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class ChartResult extends React.Component {
  constructor() {
    super();
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