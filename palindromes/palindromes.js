const palindromes = function(str) {
    let filteredStr = str.toLowerCase().match(/[a-z]/ig)
    return filteredStr.join('') === filteredStr.reverse().join('')
}

module.exports = palindromes
