import React from 'react';

var ChartInput = {
  principal: 100,
  interestRate: 0,
  years: 0,
  compoundRate: 0,
  name: "poop",
  setCompoundRate: function(input) {
    switch(input) {
      case "Yearly":
        break;
      case "Quarterly":
        break;
      case "Monthly":
        break;
    }
  },
  onSubmit: function() {
    var validation = this.refs.form.value().validation
      if (ReactForms.validation.isFailure(validation)) {
        console.log('invalid form');
      }
      else {
        console.log("valid form");
      }
    // this.compoundRate = setCompoundRate(12);
    // this.principal = 0;
    // this.interestRate = 0;
    // this.years = 0;
    // this.name = "";
  },
  render: function() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input type="text"></input>

          <label>Principal</label>
          <input type="number" value={this.principal}></input>

          <label>Interest Rate</label>
          <input type="number"></input>

          <label>Compound Rate</label>
          <select></select>

          <label>Years</label>
          <input type="numbber"></input>

          <button type="submit">Submit</button>
        </form>
      </div>
      );
  }
}

export default (ChartInput.render);
