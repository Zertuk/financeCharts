class ChartData {
  constructor() {
    this.lines = [];
  }

  addLineData(line) {
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

  compoundInterest(data, years) {
    var innerResult = 1 + (data.interestRate / data.compounding);
    var result = data.principal * Math.pow(1 + (data.interestRate / data.compounding), years * data.compounding);
    result = result.toFixed(2);
    return result;
  }

  createCompoundInterestGraph() {
    var newData = [];
    for (var j = 0; j < this.lines.length; j++) {
      var graphInfo = [];
      for (var i = 0; i < this.lines[j].years + 1; i++) {
        var result = this.compoundInterest(this.lines[j], i);
        var res = {
          x: i,
          y: parseInt(result)
        }
        graphInfo.push(res);
      }
      newData.push(graphInfo);
    }
    return newData;

  }
}

export default ChartData