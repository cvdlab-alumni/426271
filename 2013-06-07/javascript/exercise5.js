//Obtaining a terrain model
var brown = [91/255, 48/255, 43/255];
var blue_water = [127/255, 1, 212/255];
var green = [0,1,0];
var hood_brown = [123/255, 27/255,2/255];
var red = [1,0,0];

var domain = DOMAIN([[0,20],[0,20]])([20,20]);

var altitude = 3;

var points = [];//

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

	points.push([x,y,z]);//

	return [x,y,z];
}


var mountainous_terrain = COLOR(brown)(MAP(mapping)(domain));

//DRAW(mountainous_terrain);

//Inserting water
var lake = COLOR(blue_water)(CUBOID([20,20,altitude/2]));

var lake_model = STRUCT([lake, mountainous_terrain]);

//DRAW(lake_model);

//Creating a tree model
var domain2D = DOMAIN([[0,2*PI],[0,1]])([70,70]);

function full_circle(r, h) {

	var domain = DOMAIN([[0, 2*PI],[0,r]])([70,1]);
	var mapping = function(p) {
		var a = p[0];
		var r = p[1];

		return [r*COS(a), r*SIN(a), h];
	}

	model = MAP(mapping)(domain);

	return model;
}

var circumference = function (r,h) {
	return function (p) {
		return [r*COS(p[0]), r*SIN(p[0]), h];
	};
};

function external_surface(cur){
	
	return MAP(BEZIER(S1)(cur))(domain2D);
}

var trunk = function(radius,height) {
	var c1 = circumference(radius,0);
	var c2 = circumference(radius,height);
	var s = external_surface([c1,c2]);
	var c3 = full_circle(radius,0);
	return STRUCT([s,c3]);
}

var leaves = function(radius,minHeight,maxHeight) {
	var p  = BEZIER(S0)([[0,0,maxHeight]]);
	var c1 = circumference(radius,minHeight);
	var s = external_surface([c1,p]);
	var c2 = full_circle(radius,minHeight);
	return STRUCT([s,c2]);
}

var tree = function (r,R,height) {
	var t = COLOR(hood_brown)(trunk(r,0.5*height));
	var l = COLOR(green)(leaves(R,0.5*height,height));
	return STRUCT([t,l]);
}

var t = tree(0.1,0.15,0.5);


function select_altitude(px,py) {
	for(var i = 0; i<points.length/2; i++){
		if((points[i][0]===px)&&(points[i][1]===py))
			return points[i][2];
	}
}

function grow_forest(px,py) {
	
	var hei = select_altitude(px,py);
	
	var tree1 = T([0,1,2])([px,py,hei])(t);

	if(py-10<=0)
		var tree2 = T([0,1,2])([px+0.25,py,hei])(t);
	else if(hei>select_altitude(px,py-10))
		var tree2 = T([0,1,2])([px,py-0.5,hei-0.05])(t);
	else
		var tree2 = T([0,1,2])([px,py-0.5,hei+0.05])(t);

	if(py+10>=431)
		var tree3 = T([0,1,2])([px+0.25,py,hei])(t);
	else if(hei>select_altitude(px,py+10))
		var tree3 = T([0,1,2])([px,py+0.5,hei-0.05])(t);
	else
		var tree3 = T([0,1,2])([px,py+0.5,hei+0.05])(t);

	if(py-1<=0)
		var tree4 = T([0,1,2])([px,py+0.25,hei])(t);
	else if(hei>select_altitude(px,py-1))
		var tree4 = T([0,1,2])([px-0.5,py,hei-0.05])(t);
	else
		var tree4 = T([0,1,2])([px-0.5,py,hei+0.05])(t);

	if(py+1>=431)
		var tree5 = T([0,1,2])([px,py+0.25,hei])(t);
	else if(hei>select_altitude(px,py+1))
		var tree5 = T([0,1,2])([px+0.5,py,hei-0.05])(t);
	else
		var tree5 = T([0,1,2])([px+0.5,py,hei+0.05])(t);

	var trees = STRUCT([tree1,tree2,tree3,tree4,tree5]);

	return trees;
}

var forests = STRUCT([grow_forest(10,2)]);

var coniferous_forest_model = STRUCT([lake_model, forests]);

//DRAW(coniferous_forest_model); //richiede alcuni secondi affinché carichi gli alberi

//Making the villages
GRID = SIMPLEX_GRID;

var buildings1 = STRUCT([
	GRID([[-8.5, 0.7],[-15, 1],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-8.5, 0.5],[-17, 0.8],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-8.5, 0.6],[-19, 0.5],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-11, 0.5],[-15, 1],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-11, 0.8],[-17, 0.8],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-11, 0.4],[-19, 0.5],[-altitude*0.6, Math.random()*0.5]]),
	]);

var buildings2 = STRUCT([
	GRID([[-15, 0.7],[-8.5, 1],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-15, 0.5],[-11, 0.8],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-17, 0.6],[-8.5, 0.5],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-17, 0.5],[-11, 1],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-19, 0.8],[-8.5, 0.8],[-altitude*0.6, Math.random()*0.5]]),
	GRID([[-19, 0.4],[-11, 0.5],[-altitude*0.6, Math.random()*0.5]]),
	]);

var settlements = COLOR(red)(STRUCT([buildings1, buildings2]));

var human_settlements_model = STRUCT([coniferous_forest_model, settlements]);

//DRAW(human_settlements_model);

//Inserting roads in villages
var roads1 = STRUCT([
	GRID([[-9.3, 1.5],[-15, 4.5],[-altitude*0.6,0.01]]),
	GRID([[-8.5, 3.4],[-18.2, 0.6],[-altitude*0.6,0.01]]),
	GRID([[-8.5, 3.4],[-16.2, 0.6],[-altitude*0.6,0.01]])	
	]);

var roads2 = STRUCT([
	GRID([[-15, 4.7],[-9.7, 1],[-altitude*0.6,0.01]]),
	GRID([[-16, 0.8],[-8.5, 3.3],[-altitude*0.6,0.01]]),
	GRID([[-18, 0.8],[-8.5, 3.3],[-altitude*0.6,0.01]])	
	]);

var final_model = STRUCT([human_settlements_model,roads1,roads2]);
DRAW(final_model);
//richiede alcuni secondi affinché carichi gli alberi