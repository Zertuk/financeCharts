class ChartData {
  constructor(principal, rate, compounding, years) {
    this.state = {
      principal: principal,
      rate: rate,
      compounding: compounding,
      years: years
    }
  }

  compoundInterest() {
    var innerResult = 1 + (this.state.rate / this.state.compounding);
    var result = this.state.principal * Math.pow(1 + (this.state.rate / this.state.compounding), this.state.years * this.state.compounding);
    result = result.toFixed(2);
    return result;
  }

  createCompoundInterestGraph() {
    var graphInfo = [];
    for (var i = 0; i < years + 1; i++) {
      var result = compoundInterest(info, i);
      console.log(result);
      console.log(i);
      var obj = {
        x: i,
        y: parseInt(result)
      }
      graphInfo.push(obj);
    }
    return graphInfo;
  }
}



export default class { ChartData }



