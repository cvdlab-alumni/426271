function cap(string) {
	return string.slice(0,1).toUpperCase() 
		+ string.slice(1,string.length);
}

function capLoremIpsum(string) {
	
	var ind = string.indexOf(" ");

	var str = "";
	
	if(ind === -1) {

		str = string.slice(0,1).toUpperCase() +
			string.slice(1, string.length);

	} else {

		str = string.slice(0,1).toUpperCase() +
			string.slice(1, ind);
	
	} 

	var ind2;

	while(ind !== -1) {

		string = string.slice(ind+1, string.length);

		ind2 = string.slice(0, string.length).indexOf(" ");

		
		if(ind2 === -1) {

			str += " " + cap(string.slice(0, string.length));

		} else {

			str += " " + cap(string.slice(0, ind2));
			
		}
		
		ind = ind2;

	}

 	return str;
}