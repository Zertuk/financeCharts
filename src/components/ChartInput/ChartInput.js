import React from 'react';
import rd3 from 'rd3';
import s from './ChartInput.css';

class ChartInput extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ok",
      principal: 211,
      interestRate: 0.05,
      years: 3
    }
  }
  onSubmit(e) {
    e.preventDefault();
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

export default class ChartInput