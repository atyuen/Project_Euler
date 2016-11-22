// Find the largest palindrome made from the product of two 3-digit numbers.

var euler4 = function() {
    var palArray = [];
    
    // Get every palindrome that is a product of two 3-digit numbers
    for (var i = 999; i >= 100; i--) {
	for (var j = 999; j >= 100; j--) {
	    var product = i * j;
	    if (isPalindrome(product)) {
		palArray.push(product);
	    }
	}
    }
    
    // Return the max palindrome in the array
    return Math.max(...palArray);
}
    
var isPalindrome = function(number) {
    var num = number.toString();
    var start = 0;
    var end = num.length-1;
    
    while (start <= end) {
	if (num[start] != num[end]) {
	    return false;
	}
	
	start++;
	end--;
    }
    
    return true;
}
    
    euler4();