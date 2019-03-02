const removeFromArray = function(arr, ...rest) {
    rest.forEach(element => arr = arr.filter(e => e !== element))
    return arr
}

module.exports = removeFromArray
