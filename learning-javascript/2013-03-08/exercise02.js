function pushRand(array, n){
	for(i = 1; i <= n; i++)
		array.push(Math.ceil(Math.random()*100));
}

function filterEven(array) {
	return array.filter(function(item) {
		return item%2===1;
	})
}

function sortSmallLarge(array) {
	return array.sort(function(a, b) {
		return a - b;
	})
}

function exercise02(array, n) {
	pushRand(array, n);
	var r = filterEven(array);
	return sortSmallLarge(r);
}