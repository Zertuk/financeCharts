class ChartData {
  constructor() {
    this.lines = [];
  }

  addLineData(line) {
    this.lines = [];
    this.lines.push(line);
    this.newData = this.createCompoundInterestGraph();
    this.lineData = [];
    for (var i = 0; i < this.newData.length; i++) {
      this.lineData[i] = {
        name: this.lines[i].name,
        values: this.newData[i],
        strokeWidth: 1
      }
    }
    return this.lineData;
  }

  // OLDaddLineData(line) {
  //   this.lines.push(line);
  //   this.newData = this.createCompoundInterestGraph();
  //   this.lineData = [];
  //   for (var i = 0; i < this.newData.length; i++) {
  //     this.lineData[i] = {
  //       name: this.lines[i].name,
  //       values: this.newData[i],
  //       strokeWidth: 1
  //     }
  //   }
  //   console.log(this.lineData);
  //   return this.lineData;
  // }

  compoundInterest(data, years, adjustedPrincipal) {
    var innerResult = 1 + (data.interestRate/100 / data.compounding);
    var result = (adjustedPrincipal) * Math.pow(1 + (data.interestRate/100 / data.compounding), years * data.compounding);
    result = result.toFixed(2);
    return result;
  }


  createCompoundInterestGraph() {
    var newData = [];
    for (var j = 0; j < this.lines.length; j++) {
      var graphInfo = [];
      var adjustedPrincipal = this.lines[j].principal;
      var prevResult  = this.lines[j].principal;
      graphInfo.push({x: 0, y: adjustedPrincipal});
      for (var i = 1; i < this.lines[j].years + 1; i++) {
        adjustedPrincipal = prevResult + this.lines[j].difference ;
        var result = parseInt(this.compoundInterest(this.lines[j], 1, adjustedPrincipal));
        prevResult = result;
        var res = {
          x: i,
          y: result
        }
        if (i == 0) {
          res.y = this.lines[j].principal
        }
        graphInfo.push(res);
      }
      newData.push(graphInfo);
    }
    return newData;
  }

  // debtPayoffGraph() {
  //   var lineData = [];
  //   for (var j = 0; j < this.lines.length; j++) {
  //     var count = 1;
  //     var payoffData = [];
  //     var prevResult = this.lines[j].principal;
  //     var adjustedPrincipal = this.lines[j].principal;
  //     var debtRemaining = true;
  //     while (debtRemaining) {
  //       adjustedPrincipal = prevResult - this.lines[j].difference;
  //       var result = parseInt(this.compoundInterest(this.lines[j], 1, adjustedPrincipal));
  //       prevResult = result;
  //       payoffData.push({
  //         x: count,
  //         y: result
  //       })
  //       if (result < 0) {
  //         payoffData[count].y = 0;
  //         debtRemaining = false;
  //       }
  //       count = count++;
  //     }
  //     lineData.push(payoffData);
  //   }
  //   return lineData;
  // }
}

export default ChartData