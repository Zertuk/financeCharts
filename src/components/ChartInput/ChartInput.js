import React from 'react';

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
    console.log(this);
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

// ChartInput.constructor();

// var ChartInput = {
//   principal: 100,
//   interestRate: 0,
//   years: 0,
//   compoundRate: 0,
//   name: "poop",
//   setCompoundRate: function(input) {
//     switch(input) {
//       case "Yearly":
//         break;
//       case "Quarterly":
//         break;
//       case "Monthly":
//         break;
//     }
//   },
//   onSubmit: function(e) {
//     e.preventDefault();
//     var validation = this.refs.form.value().validation
//       if (ReactForms.validation.isFailure(validation)) {
//         console.log('invalid form');
//       }
//       else {
//         console.log("valid form");
//       }
//     // this.compoundRate = setCompoundRate(12);
//     // this.principal = 0;
//     // this.interestRate = 0;
//     // this.years = 0;
//     // this.name = "";
//   },
//   render: function() {
//     return (
//       <div>
//         <form>
//           <label>Name</label>
//           <input value={""} type="text"></input>

//           <label>Principal</label>
//           <input type="number"></input>

//           <label>Interest Rate</label>
//           <input type="number"></input>

//           <label>Compound Rate</label>
//           <select></select>

//           <label>Years</label>
//           <input type="numbber"></input>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       );
//   }.bind(this)
// }

export default ChartInput;
