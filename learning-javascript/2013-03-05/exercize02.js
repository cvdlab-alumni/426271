for (var i = 1; i <= 10; i++) {
	var mul="";
	for (var j = 1; j <= 10; j++) {
		mul+=i*j;
		if(j===10)
			mul+=" ";
		else
			mul+=", ";
	};
	console.log(mul);
};