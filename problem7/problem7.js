// Find the nth prime number.
var euler7 = function(n) {
    var count = 1;
    var number = 1;
  
    while (count !== n) {
	number += 2;
	if (isPrime(number)) {
	    count++;
	}
    }

    return number;
};

var isPrime = function(num) {
    if (num % 2 === 0) {
	return false;
    }
    else {
	for (var i = 3; i < num; i += 2) {
	    if (num % i === 0) {
		return false;
	    }
	}
	
	return true;
    }
};
    
euler7(10001);