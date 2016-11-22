// Find the sum of all Fibonacci numbers that are: 
// 1. Even.
// 2. Not greater than an integer n. In this case: 4,000,000.

var euler2 = function(n) {
  
    var sum = 0;
    var term1 = 1;
    var term2 = 2;
    var temp;
  
    while (n > term2) {
	if (term2 % 2 === 0) {
	    sum += term2;
	}
    
	temp = term1;
	term1 = term2;
	term2 += temp;
    }
  
    return sum;
}

    euler2(4000000);