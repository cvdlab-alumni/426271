//Exercise 6
//Example
fv = [[5,6,7,8],
[0,5,8],
[0,4,5],
[1,2,4,5],
[2,3,5,6],
[0,8,7],
[3,6,7],
[1,2,3],
[0,1,4]];

v = [[0,6],
[0,0],
[3,0],
[6,0,4],
[0,3,4],
[3,3],
[6,3],
[6,6],
[3,6]];

lar = [v, fv];

//Function
function expLarToObj(larModel) {
	v = larModel[0];
	fv = larModel[1];

	var out = '';

	for(var i = 0; i< v.length; i++){
		if(v[i][2] != undefined) 
			out += 'v ' + v[i][0] + ' ' + v[i][1] + ' ' + v[i][2] + '\n';
		else 
			out += 'v ' + v[i][0] + ' ' + v[i][1] + ' 0' + '\n';
	}

	out += '\n';

	for(var i = 0; i < fv.length; i++) {

		out += 'f ';
		for(var j = 0; j < fv[i].length; j++) {
			out += fv[i][j] + ' ';
		}
		out += '\n';
	}

	return out;
}

expLarToObj(lar);