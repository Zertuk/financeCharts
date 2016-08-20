import React from 'react';
import rd3 from 'rd3';
import s from './ChartResult.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class ChartResult extends React.Component {
  constructor() {
    super();
    console.log(this.props);
    // this.total = this.props.data.total;
    // this.principal = this.props.data.principal;
    // this.interest = this.props.data.interest;
  }

  render() {
    return (
      <div>
        // <p>Total: {this.total}</p>
        // <p>principal: {this.principal}</p>
        // <p>Interest: {this.interest}</p>
      </div>
      );
  }
}

export default withStyles(s)(ChartResult)