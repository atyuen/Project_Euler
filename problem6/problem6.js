// Find the difference between the square of the sum of the first 'n' numbers and the sum of their squares.
// Sum of squares: 1^2 + 2^2 + 3^2
// Square of sum: (1 + 2 + 3)^2

var euler6 = function(n) {
    var sumSq = sumSquared(n);
    var sqSum = Math.pow(summation(n), 2);
  
    return sqSum - sumSq;
}

// Sum of squares
var sumSquared = function(upTo) {
    var sum = 0;
    for (var i = 1; i <= upTo; i++) {
	sum += Math.pow(i, 2);
    }
    return sum;
}
    
// Square of the sum
var summation = function(upTo) {
    var sum = 0;
    for (var i = 1; i <= upTo; i++) {
	sum += i;
    }
	return sum;
}
    
    euler6(100);