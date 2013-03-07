for (var i = 1; i <= 10; i++) {
	var mul="";
	for (var j = 1; j <= 10; j++) {
		if(i===j)
			mul+=1;
		else
			mul+=0;
		
		if(j===10)
			mul+=" ";
		else
			mul+=", ";
	};
	console.log(mul);
};