// Find the sum of all multiples of 3 or 5 below some integer n

var euler1 = function(n) {
    var sum = 0;
  
    for (var i = 0; i < n; i++) {
	if ((i % 3) === 0 || (i % 5)=== 0) {
	    sum += i;
	}
    }
  
    return sum;
}

euler1(1000);