//Obtaining a terrain model
var brown = [91/255, 48/255, 43/255];
var blue_water = [127/255, 1, 212/255];
var green = [0,1,0];
var hood_brown = [123/255, 27/255,2/255];
var red = [1,0,0];

var domain = DOMAIN([[0,20],[0,20]])([20,20]);

var altitude = 3;

var points = [];

var mapping = function(p) {

	var x = p[0];
	var y = p[1];

	if(x>7&&x<13&&y>7&&y<13) 
		var z = altitude - (altitude - (Math.random()*altitude*0.5));
	
	else if (x>7&&x<13&&y>14)
		var z = altitude*0.6;
	
	else if (x>14&&y>7&&y<13)
		var z = altitude*0.6;
	
	else 
		var z = altitude - (Math.random()*altitude*0.5);

	points.push([x,y,z]);

	return [x,y,z];
}


var mountainous_terrain = COLOR(brown)(MAP(mapping)(domain));

DRAW(mountainous_terrain);

