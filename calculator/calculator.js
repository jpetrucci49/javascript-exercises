function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (arr) {
	return arr.reduce((a,e) => a+e, 0)
}

function multiply (arr) {
	return arr.reduce((a,e) => a === 0 ? e : a*e, 0)
}

function power(num1, num2) {
	return num1 ** num2
}

function factorial(num) {
	if (num === 0) {
		return 1
	}
	return num * factorial(num-1)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}