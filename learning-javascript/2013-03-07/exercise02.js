function identity(n) {
	var iden="";
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			if(i===j) 
				iden+=1;
			else 
				iden+=0;
			
			if(j===n)
				iden+="\t";
			else
				iden+=",\t";

		}
		iden+="\n";
	}
	return iden;
}