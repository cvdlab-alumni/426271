//colors
var blurrywood = [1, 211/255, 155/255];
var red = [1,0,0];
var black = [0,0,0];

//Modello la parte superiore della poltrona
var domain = INTERVALS(1)(36);
var domain2D = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);

var fatt = 3;

var distance = 2.5;

function upper_chair() {

	var point1 = [[fatt*3.79, 0, fatt*2.53], [fatt*3.87, 0, fatt*2.51], [fatt*3.9, 0, fatt*2.44], [fatt*3.96, 0, fatt*2.24]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[fatt*3.79, 0, fatt*2.53], [fatt*3.69, 0, fatt*2.5], [fatt*3.8, 0, fatt*2.37], [fatt*3.78, 0, fatt*2.26]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var point3 = [[fatt*3.78, 0, fatt*2.26],[fatt*3.78, 0, fatt*2.14],[fatt*4.03, 0, fatt*1.73],[fatt*4.11, 0, fatt*1.48]];
	var c3 = BEZIER(S0)(point3);
	var curve3 = MAP(c3)(domain);

	var point4 = [[fatt*3.96, 0, fatt*2.24], [fatt*4.02, 0, fatt*2.07], [fatt*4.2, 0, fatt*1.94], [fatt*4.25, 0, fatt*1.71]];
	var c4 = BEZIER(S0)(point4);
	var curve4 = MAP(c4)(domain);

	var point5 = [[fatt*4.11, 0, fatt*1.48], [fatt*4.3, 0, fatt*1.53], [fatt*4.09, 0, fatt*1.58], [fatt*4.25, 0, fatt*1.71]];
	var c5 = BEZIER(S0)(point5);
	var curve5 = MAP(c5)(domain);

	var point6 = [[fatt*4.11, 0, fatt*1.48], [fatt*4.09, 0, fatt*1.54], [fatt*4.07, 0, fatt*1.6], [fatt*3.98, 0, fatt*1.79]];
	var c6 = BEZIER(S0)(point6);
	var curve6 = MAP(c6)(domain);

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);
	var surface2 = MAP(BEZIER(S1)([c3,c4]))(domain2D);
	var surface3 = MAP(BEZIER(S1)([c5,c6]))(domain2D);
	
	var faces = STRUCT([surface1, surface2, surface3]);

	var faces_t = T([1])([distance])(faces);

	var point1_t = [[fatt*3.79, distance, fatt*2.53], [fatt*3.87, distance, fatt*2.51],
				 [fatt*3.9, distance, fatt*2.44], [fatt*3.96, distance, fatt*2.24]];
	var c1_t = BEZIER(S0)(point1_t);
	var surface4 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);

	var point2_t = [[fatt*3.79, distance, fatt*2.53], [fatt*3.69, distance, fatt*2.5], 
				[fatt*3.8, distance, fatt*2.37], [fatt*3.78, distance, fatt*2.26]];
	var c2_t = BEZIER(S0)(point2_t);
	var surface5 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);

	var point3_t = [[fatt*3.78, distance, fatt*2.26],[fatt*3.78, distance, fatt*2.14],
					[fatt*4.03, distance, fatt*1.73],[fatt*4.11, distance, fatt*1.48]];
	var c3_t = BEZIER(S0)(point3_t);
	var surface6 = MAP(BEZIER(S1)([c3,c3_t]))(domain2D);

	var point4_t = [[fatt*3.96, distance, fatt*2.24], [fatt*4.02, distance, fatt*2.07],
				[fatt*4.2, distance, fatt*1.94], [fatt*4.25, distance, fatt*1.71]];
	var c4_t = BEZIER(S0)(point4_t);
	var surface7 = MAP(BEZIER(S1)([c4,c4_t]))(domain2D);

	var point5_t = [[fatt*4.11, distance, fatt*1.48], [fatt*4.3, distance, fatt*1.53],
					[fatt*4.09, distance, fatt*1.58], [fatt*4.25, distance, fatt*1.71]];
	var c5_t = BEZIER(S0)(point5_t);
	var surface8 = MAP(BEZIER(S1)([c5,c5_t]))(domain2D);

	var surfaces = COLOR(red)(STRUCT([faces, faces_t, surface4, 
		surface5, surface6, surface7, surface8]));
	
	return surfaces;
}

//Modello la parte inferiore della poltrone
function lower_chair() {

	var point1 = [[fatt*4.19, 0, fatt*1.56], [fatt*4.19, 0, fatt*1.8],
					[fatt*4.97, 0, fatt*2], [fatt*5.03, 0, fatt*1.84]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[fatt*4.19, 0, fatt*1.56], [fatt*4.49, 0, fatt*1.42],
					[fatt*5.09, 0, fatt*1.7], [fatt*5.03, 0, fatt*1.84]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);	
	var faces = STRUCT([surface1]);

	var faces_t = T([1])([distance])(faces);

	var point1_t = [[fatt*4.19, distance, fatt*1.56], [fatt*4.19, distance, fatt*1.8],
					[fatt*4.97, distance, fatt*2], [fatt*5.03, distance, fatt*1.84]];
	var c1_t = BEZIER(S0)(point1_t);
	var surface4 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);

	var point2_t = [[fatt*4.19, distance, fatt*1.56], [fatt*4.49, distance, fatt*1.42],
					[fatt*5.09, distance, fatt*1.7], [fatt*5.03, distance, fatt*1.84]];
	var c2_t = BEZIER(S0)(point2_t);
	var surface5 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);


	var surfaces = COLOR(red)(STRUCT([faces, faces_t, surface4, surface5]));
	
	return surfaces;
}

var d = 0.2;

var chair = T([1])([d])(STRUCT([upper_chair(), lower_chair()]));

function pieces1() {

	var point1 = [[fatt*4.74, 0, fatt*1.23], [fatt*4.72, 0, fatt*1.15],
				[fatt*4.63, 0, fatt*1.57], [fatt*4.54, 0, fatt*2.05]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[fatt*4.74, 0, fatt*1.23], [fatt*4.78, 0, fatt*1.25],
					[fatt*4.67, 0, fatt*1.63], [fatt*4.63, 0, fatt*2.07]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var point3 = [[fatt*4.54, 0, fatt*2.05], [fatt*4.63, 0, fatt*2.07]];
	var c3 = BEZIER(S0)(point3);
	var curve3 = MAP(c3)(domain);

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);	
	var faces = STRUCT([surface1]);

	var faces_t = T([1])([d])(faces);

	var point1_t = [[fatt*4.74, d, fatt*1.23], [fatt*4.72, d, fatt*1.15],
				[fatt*4.63, d, fatt*1.57], [fatt*4.54, d, fatt*2.05]];
	var c1_t = BEZIER(S0)(point1_t);
	var surface4 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);

	var point2_t = [[fatt*4.74, d, fatt*1.23], [fatt*4.78, d, fatt*1.25],
					[fatt*4.67, d, fatt*1.63], [fatt*4.63, d, fatt*2.07]];
	var c2_t = BEZIER(S0)(point2_t);
	var surface5 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);

	var point3_t = [[fatt*4.54, d, fatt*2.05], [fatt*4.63, d, fatt*2.07]];
	var c3_t = BEZIER(S0)(point3_t);
	var surface6 = MAP(BEZIER(S1)([c3,c3_t]))(domain2D);

	var surfaces1 = COLOR(blurrywood)(STRUCT([faces, faces_t, surface4, surface5, surface6]));

	var legs =STRUCT([surfaces1, T([1])([distance+d])(surfaces1)]);
	
	return legs;
}

function pieces2() {

	var point1 = [[fatt*3.68, 0, fatt*1.25], [fatt*4.21, 0, fatt*1.61],
					[fatt*4.23, 0, fatt*1.57], [fatt*4.54, 0, fatt*2.05]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[fatt*3.71, 0, fatt*1.22], [fatt*4.46, 0, fatt*1.69],
					[fatt*4.26, 0, fatt*1.43], [fatt*4.54, 0, fatt*2.02]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var point3 = [[fatt*3.62, 0, fatt*1.2],[fatt*3.68, 0, fatt*1.25]];
	var c3 = BEZIER(S0)(point3);
	var curve3 = MAP(c3)(domain);

	var point4 = [[fatt*3.62, 0, fatt*1.2],[fatt*3.71, 0, fatt*1.22]];
	var c4 = BEZIER(S0)(point4);
	var curve4 = MAP(c4)(domain);

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);	
	var surface2 = MAP(BEZIER(S1)([c3,c4]))(domain2D);
	var faces = STRUCT([surface1,surface2]);

	var faces_t = T([1])([d])(faces);

	var point1_t = [[fatt*3.68, d, fatt*1.25], [fatt*4.21, d, fatt*1.61],
					[fatt*4.23, d, fatt*1.57], [fatt*4.54, d, fatt*2.05]];
	var c1_t = BEZIER(S0)(point1_t);
	var surface4 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);

	var point2_t = [[fatt*3.71, d, fatt*1.22], [fatt*4.46, d, fatt*1.69],
					[fatt*4.26, d, fatt*1.43], [fatt*4.54, d, fatt*2.02]];
	var c2_t = BEZIER(S0)(point2_t);
	var surface5 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);

	var point3_t = [[fatt*3.62, d, fatt*1.2],[fatt*3.68, d, fatt*1.25]];
	var c3_t = BEZIER(S0)(point3_t);
	var surface6 = MAP(BEZIER(S1)([c3,c3_t]))(domain2D);

	var point4_t = [[fatt*3.62, d, fatt*1.2],[fatt*3.71, d, fatt*1.22]];
	var c4_t = BEZIER(S0)(point4_t);
	var surface7 = MAP(BEZIER(S1)([c4,c4_t]))(domain2D);

	var surfaces1 = COLOR(blurrywood)(STRUCT([faces, faces_t, surface4, surface5,
											surface6, surface7]));

	var legs =STRUCT([surfaces1, T([1])([distance+d])(surfaces1)]);
	
	return legs;
}

function pieces3() {


	var point1 = [[fatt*3.71, 0, fatt*1.33], [fatt*3.99, 0, fatt*2.02],
					[fatt*3.85, 0, fatt*2.08], [fatt*4.85, 0, fatt*2.14]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[fatt*3.73, 0, fatt*1.29], [fatt*4.22, 0, fatt*2.24],
					[fatt*3.8, 0, fatt*1.86], [fatt*4.85, 0, fatt*2.14]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var point3 = [[fatt*3.62, 0, fatt*1.21],[fatt*3.71, 0, fatt*1.33]];
	var c3 = BEZIER(S0)(point3);
	var curve3 = MAP(c3)(domain);

	var point4 = [[fatt*3.62, 0, fatt*1.21],[fatt*3.73, 0, fatt*1.29]];
	var c4 = BEZIER(S0)(point4);
	var curve4 = MAP(c4)(domain); 

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);
	var surface2 = MAP(BEZIER(S1)([c3,c4]))(domain2D);
	var faces = STRUCT([surface1,surface2]);
	var faces_t = T([1])([d])(faces);

	var point1_t = [[fatt*3.71, d, fatt*1.33], [fatt*3.99, d, fatt*2.02],
					[fatt*3.85, d, fatt*2.08], [fatt*4.85, d, fatt*2.14]];
	var c1_t = BEZIER(S0)(point1_t);
	var surface4 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);

	var point2_t = [[fatt*3.73, d, fatt*1.29], [fatt*4.22, d, fatt*2.24],
					[fatt*3.8, d, fatt*1.86], [fatt*4.85, d, fatt*2.14]];
	var c2_t = BEZIER(S0)(point2_t);
	var surface5 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);

	var point3_t = [[fatt*3.62, d, fatt*1.21],[fatt*3.71, d, fatt*1.33]];
	var c3_t = BEZIER(S0)(point3_t);
	var surface6 = MAP(BEZIER(S1)([c3,c3_t]))(domain2D);

	var point4_t = [[fatt*3.62, d, fatt*1.21],[fatt*3.73, d, fatt*1.29]];
	var c4_t = BEZIER(S0)(point4_t);
	var surface7 = MAP(BEZIER(S1)([c4,c4_t]))(domain2D); 

	var surfaces1 = COLOR(blurrywood)(STRUCT([faces, faces_t, surface4, surface5,
											surface6, surface7]));

	var legs =STRUCT([surfaces1, T([1])([distance+d])(surfaces1)]);
	
	return legs;
}

function details1() {

	var cub = T([0,1,2])([13.5,(d),6])(CUBOID([0.4, 0.05, 0.3]));

	var det = STRUCT([cub, T([1])([distance-0.05])(cub)]);

	return COLOR(black)(det);
}

var domain2D_2 = DOMAIN([[0,2*PI],[0,1]])([6,6]);

var circumference = function (r,h) {
	return function (p) {
		return [r*COS(p[0]), r*SIN(p[0]), h];
	};
};

function external_surface(cur){
	
	return MAP(BEZIER(S1)(cur))(domain2D_2);
}

function full_circle(r, h) {

	var domain = DOMAIN([[0, 2*PI],[0,r]])([32,1]);
	var mapping = function(p) {
		var a = p[0];
		var r = p[1];

		return [r*COS(a), r*SIN(a), h];
	}

	model = MAP(mapping)(domain);

	return model;
}

function details2() {

	var c1 = circumference(0.03,0);
	var c2 = circumference(0.03,0.02);
	var p  = BEZIER(S0)([[0,0,0.04]]);
	var bolt_a = R([1,2])([PI/2])(external_surface([c1,c2,p]));
	var bolt_b = R([1,2])([-PI/2])(external_surface([c1,c2,p]));
	
	var bolts1 = STRUCT([T([0,2])([13.6,6.05])(bolt_a),
						T([0,2])([13.75,6.1])(bolt_a),
						T([0,2])([13.75,6])(bolt_a),
						T([0,2])([13.9,5.3])(bolt_a),
						T([0,2])([13.95,5])(bolt_a),
						T([0,2])([12.9,4.9])(bolt_a),
						T([0,2])([12.4,4.6])(bolt_a)
						]);

	var bolts2 = STRUCT([T([0,2])([13.6,6.05])(bolt_b),
						T([0,2])([13.75,6.1])(bolt_b),
						T([0,2])([13.75,6])(bolt_b),
						T([0,2])([13.9,5.3])(bolt_b),
						T([0,2])([13.95,5])(bolt_b),
						T([0,2])([12.9,4.9])(bolt_b),
						T([0,2])([12.4,4.6])(bolt_b)
						]);

	var bolts = STRUCT([bolts1, T([1])([d+distance+d])(bolts2)]);
	return COLOR(black)(bolts);
}

function details3() {

	var piece_d = 0.05;

	var c1 = BEZIER(S0)([[0,0,0.5],[0,0,0.25],[0.25,0,0.25]]);
	var curve0 = MAP(c1)(domain);

	var c2 = BEZIER(S0)([[0,0,0],[0.25,0,0]]);
	var curve1 = MAP(c2)(domain);

	var c3 = BEZIER(S0)([[0,0,0],[0,0,0.5]]);
	var curve2 = MAP(c3)(domain);

	var c4 = BEZIER(S0)([[0.25,0,0],[0.25,0,0.25]]);
	var curve3 = MAP(c4)(domain);

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);	
	
	var faces_t = T([1])([0.1])(surface1);

	var c1_t = BEZIER(S0)([[0,0.1,0.5],[0,0.1,0.25],[0.25,0.1,0.25]]);
	var curve0_t = MAP(c1_t)(domain);
	var surface2 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);

	var point2_t = [[0,0.1,0],[0.25,0.1,0]];
	var c2_t = BEZIER(S0)(point2_t);
	var surface3 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);

	var point3_t = [[0,0.1,0],[0,0.1,0.5]];
	var c3_t = BEZIER(S0)(point3_t);
	var surface4 = MAP(BEZIER(S1)([c3,c3_t]))(domain2D);

	var point4_t = [[0.25,0.1,0],[0.25,0.1,0.25]];
	var c4_t = BEZIER(S0)(point4_t);
	var surface5 = MAP(BEZIER(S1)([c4,c4_t]))(domain2D);

	var surfaces1 = COLOR(black)(STRUCT([faces_t, surface1, surface2, surface3,
											surface4, surface5]));

	var pieces = T([0,1,2])([11.63,0.05,5.35])(STRUCT([surfaces1, T([1])([d+distance])(surfaces1)]));

	return pieces;
}

function details4() {

	var link1 = T([0,1,2])([11.75,2.9,5.67])(R([1,2])([PI/2])(CYL_SURFACE([0.05, 2.9])([32,1])));

	var circle1 = T([0,1,2])([11.75,2.9,5.67])(R([1,2])([PI/2])(full_circle(0.05,0)));
	
	var circle2 = T([0,1,2])([11.75,0,5.67])(R([1,2])([PI/2])(full_circle(0.05,0)));

	var det = STRUCT([link1,circle1,circle2]);
	
	return det;
}

var model = T([0,2])([-10, -3])(STRUCT([chair, pieces1(), pieces2(), pieces3(),
					details1(), details2(), details3(), details4()]));

DRAW(model);