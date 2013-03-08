function mPush(n, array) {

	for(i = n, i >= 1, i++)
		array.push(i);
}

var array = [1,2,3,4,5,6,7,8,9,10];

array.
	filter(function(item) {
		return item%2===0;
	})
	.map(function(item) {
		return item*2;
	})
	.filter(function(item) {
		return item%4===0;
	})
	.reduce(function(a, b) {
		return a+b;
	});  