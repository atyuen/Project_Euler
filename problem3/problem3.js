// Find the largest prime factor of the integer n.
// For Problem 3, n = 600851475143

var euler3 = function(n) {
    var pfactor;
  
    while (n % 2 === 0) {
	n = n/2;
	pfactor = 2;
    }
  
    for (var i = 3; i <= n; i += 2) {
	if (n % i === 0 && isPrime(i)) {
	    pfactor = i;
	    n = n/i;
	}
    }
  
    return pfactor;
}

var isPrime = function(number) {
    if (number % 2 === 0 && number !== 2) {
	return false;
    }
  
    else {
	for (var i = 3; i < number; i += 2) {
	    if (number % i === 0) {
		return false;
	    }
	}
    }
    
    return true;
}

    euler3(600851475143);