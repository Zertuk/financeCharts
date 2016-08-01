var rd3 = require('react-d3');
// es6
import rd3 from 'react-d3';

function infoFactory(principal, rate, compounding) {
	var info = {
		principal: principal,
		rate: rate,
		compounding: compounding
	}
	return info;
}

infoFactory(5000, 0.05, 12);

var info = {
	principal: 0,
	rate: 0.05,
	compounding: 12,
}

function CompoundInterest(info) {
	var innerResult = 1 + (info.rate / info.compounding);
	var result = info.principal * Math.pow(1 + (info.rate / years), years * compounding);
	result = result.toFixed(2);
	return result; 
}

function CompoundInterestGraph(info, years) {
	var graphInfo = [];
	for (var i = 0; i < years; i++) {
		var result = CompoundInterest(info, i);
		graphInfo.push(result);
	}
	return graphInfo;
}




