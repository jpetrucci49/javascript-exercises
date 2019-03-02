const ftoc = function(temp) {
  const result = ((temp - 32) * (5/9)).toFixed(1) 
  return Number(result)
}

const ctof = function(temp) {
  const result = ((temp * (9/5)) + 32).toFixed(1)
  return Number(result)
}

module.exports = {
  ftoc,
  ctof
}
