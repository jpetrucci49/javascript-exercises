const sumAll = function(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number'|| args[i] < 0) {
            return 'ERROR'
        }
    }
    let [ max, min ] = [ Math.max.apply(null, args), Math.min.apply(null, args) ]
    let result = 0
    while (min < max){
        result += min
        result += max
        min++
        max--
    }
    if (min === max){
        result += min
    }
    return result
}

module.exports = sumAll
