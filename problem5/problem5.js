// Find the smallest positive number that is evenly divisible by all of the numbers from 1 to n.

var euler5 = function(n) {
    var multiple = 10;
    
    while (true) { 
	for (var i = 1; i <= n; i++) {
	    if (multiple % i !== 0) {
		multiple += 2;
		break;
	    }
	    
	    else if (i === n) {
		return multiple;
	    }
	}
	
	continue;
    }
}
    
    euler5(20);