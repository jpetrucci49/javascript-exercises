const leapYears = function(year) {
    // running truthy falsy tests on the year,
    // return the result of the 2 conditions
    // if both sides of && evaluate to true, returns true.
    return (year % 4 === 0 && (year % 100 != 0)) || (year % 400 == 0)
}

module.exports = leapYears
