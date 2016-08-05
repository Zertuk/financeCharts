import React from 'react';
import rd3 from 'rd3';
import s from './ChartInput.css';
import ChartData from '../ChartData/ChartData.js';

class ChartInput extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ok",
      principal: 100,
      interestRate: 5,
      years: 1,
      compounding: 1
    }
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    var chartData = new ChartData(this.state.name,
                                  parseInt(this.state.principal),
                                  parseInt(this.state.interestRate), 
                                  parseInt(this.state.compounding), 
                                  parseInt(this.state.years));
    console.log(chartData.compoundInterest())
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    // return <div>test {this.props.name}</div>;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Name</label>
          <input value = {this.state.name} onChange={this.handleChange.bind(this, "name")} type="text"></input>

          <label>Principal</label>
          <input value = {this.state.principal} onChange={this.handleChange.bind(this, "principal")} type="number"></input>

          <label>Interest Rate</label>
          <input value = {this.state.interestRate} onChange={this.handleChange.bind(this, "interestRate")} type="number"></input>

          <label>Compound Rate</label>
          <select></select>

          <label>Years</label>
          <input value = {this.state.years}  onChange={this.handleChange.bind(this, "years")} type="number"></input>

          <button type="submit">Submit</button>
        </form>
      </div>
      );
  }
}

export default ChartInput