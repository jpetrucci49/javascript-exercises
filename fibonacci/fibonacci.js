const fibonacci = function(num) {
 if (num < 1) {
     return 'OOPS'
 }
 if (num <= 2){
     return 1
 }
 return fibonacci(num-1) + fibonacci(num-2)
}

module.exports = fibonacci
