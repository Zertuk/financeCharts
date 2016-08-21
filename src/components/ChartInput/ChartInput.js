import React from 'react';
import rd3 from 'rd3';
import s from './ChartInput.css';
import ChartData from '../ChartData/ChartData.js';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class ChartInput extends React.Component {
  constructor() {
    super();
    this.state = {
      principal: 0,
      interestRate: 7,
      years: 0,
      difference: 0,
      compounding: 1
    }
  }
  onSubmit(e) {
    e.preventDefault();
    var newLine = {
      principal: parseInt(this.state.principal),
      interestRate: parseInt(this.state.interestRate),
      difference: parseInt(this.state.difference), 
      compounding: parseInt(this.state.compounding), 
      years: parseInt(this.state.years)
    }
    this.props.onSubmit(newLine)
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
          <label>Principal</label>
          <input value = {this.state.principal} onChange={this.handleChange.bind(this, "principal")} type="number"></input>
        </div>
        <div>
          <label>Interest Rate</label>
          <input value = {this.state.interestRate} onChange={this.handleChange.bind(this, "interestRate")} type="number"></input>
        </div>
        <div>
          <label>Annual Contribution</label>
          <input value = {this.state.difference} onChange={this.handleChange.bind(this, "difference")} type="number"></input>
        </div>
        <div>
          <label>Years</label>
          <input value = {this.state.years}  onChange={this.handleChange.bind(this, "years")} type="number"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      );
  }
}

export default withStyles(s)(ChartInput)