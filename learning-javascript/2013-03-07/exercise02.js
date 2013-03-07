function identity(n) {
	for (var i = 1; i <= n; i++) {
		var mul="";
		for (var j = 1; j <= n; j++) {
			if(i===j)
				mul+=1;
			else
				mul+=0;
		
			if(j===10)
				mul+="\t";
			else
				mul+=",\t";
		}
		console.log(mul);
	}
}