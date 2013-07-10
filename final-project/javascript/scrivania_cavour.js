//colors
var blurrywood = [1, 211/255, 155/255];
var green_glass = [0, 205/255, 102/255, 0.6];

//Modello le gambe della scrivania
var domain = INTERVALS(1)(36);
var domain2D = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);

function leg() {
	var point1 = [[1.94, 0, 4.78], [2.89, 0, 5.86], [1.73, 0, 5.34], [6.71, 0, 5.46]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[2.48, 0, 5.08], [2.35, 0, 5.55], [4.13, 0, 5.34], [5.01, 0, 5.39]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var point3 = [[2.48, 0, 5.11], [2.57, 0, 5.04], [5.27, 0, 5.3], [5.01, 0, 5.39]];
	var c3 = BEZIER(S0)(point3);
	var curve3 = MAP(c3)(domain);

	var point4 = [[2.44, 0, 4.78], [3.39, 0, 5.24], [6.67, 0, 5.25], [6.71, 0, 5.46]];
	var c4 = BEZIER(S0)(point4);
	var curve4 = MAP(c4)(domain);

	var point5 = [[0.73, 0, 3.14], [0.63, 0, 3.23], [1.88, 0, 4.72], [2.35, 0, 5.28]];
	var c5 = BEZIER(S0)(point5);
	var curve5 = MAP(c5)(domain);

	var point6 = [[0.73, 0, 3.14], [0.89, 0, 3.11], [2, 0, 4.65], [2.69, 0, 4.9]];
	var c6 = BEZIER(S0)(point6);
	var curve6 = MAP(c6)(domain);

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);
	var surface2 = MAP(BEZIER(S1)([c3,c4]))(domain2D);
	var surface3 = MAP(BEZIER(S1)([c5,c6]))(domain2D);

	var distance = 0.2;

	var faces = STRUCT([surface1, surface2, surface3]);
	var faces_t = T([1])([distance])(faces);

	var point1_t = [[1.94, distance, 4.78], [2.89, distance, 5.86], [1.73, distance, 5.34], [6.71, distance, 5.46]];
	var c1_t = BEZIER(S0)(point1_t);
	var surface4 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);

	var point2_t = [[2.48, distance, 5.08], [2.35, distance, 5.55], [4.13, distance, 5.34], [5.01, distance, 5.39]];
	var c2_t = BEZIER(S0)(point2_t);
	var surface5 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);

	var point3_t = [[2.48, distance, 5.11], [2.57, distance, 5.04], [5.27, distance, 5.3], [5.01, distance, 5.39]];
	var c3_t = BEZIER(S0)(point3_t);
	var surface6 = MAP(BEZIER(S1)([c3,c3_t]))(domain2D);

	var point4_t = [[2.44, distance, 4.78], [3.39, distance, 5.24], [6.67, distance, 5.25], [6.71, distance, 5.46]];
	var c4_t = BEZIER(S0)(point4_t);
	var surface7 = MAP(BEZIER(S1)([c4,c4_t]))(domain2D);

	var point5_t = [[0.73, distance, 3.14], [0.63, distance, 3.23], [1.88, distance, 4.72], [2.35, distance, 5.28]];
	var c5_t = BEZIER(S0)(point5_t);
	var surface8 = MAP(BEZIER(S1)([c5,c5_t]))(domain2D);

	var point6_t = [[0.73, distance, 3.14], [0.89, distance, 3.11], [2, distance, 4.65], [2.69, distance, 4.9]];
	var c6_t = BEZIER(S0)(point6_t);
	var surface9 = MAP(BEZIER(S1)([c6,c6_t]))(domain2D);

	var surfaces = COLOR(blurrywood)(T([0,2])([-7.21,-3.14])(STRUCT([faces, faces_t, surface4, 
		surface5, surface6, surface7, surface8, surface9])));

	return surfaces;
}

var legs = T([0,1])([6.71,1.7])(STRUCT([R([0,1])([PI/15])(leg()), R([0,1])([-PI/15])(leg())]));

//Modello il tavolo
GRID = SIMPLEX_GRID;

function glass_table() {

	 var table = COLOR(green_glass)(GRID([[-0.6, 7],[-0.3, 3],[-2.4, 0.05]]));
	 
	 return table;

}

//Modello la cassettiera grande
function big_drawers() {

	var drawer = COLOR(blurrywood)(STRUCT([GRID([[-5.5, 1.2], [-0.5, 2.3], [2]]),
					GRID([[-5.5, 1.2],[-0.4, 0.1],[-0.2, 0.5, -0.1, 0.5, -0.1, 0.5]])]));

	return drawer;
}

//Modello la cassettiera piccola
function little_drawers() {

	var drawer = COLOR(blurrywood)(STRUCT([GRID([[-0.05, 1.3], [-0.4, 2.7], [-1.3, 0.1]]),
					GRID([[0.05, -1.3, 0.05], [-0.4, 2.8], [-1.3, 0.7]]),
					GRID([[-0.05, 1.3], [-3.1, 0.1], [-1.3, 0.7]]),
					GRID([[-0.05, 0.1, -1.1, 0.1], [-0.5, 2.7], [-1.4, 0.2]]),
					GRID([[-0.05, 1.3], [-0.4, 0.1, -2.5, 0.1], [-1.4, 0.2]])
					]));

	var glass_cover = COLOR(green_glass)(GRID([[1.4], [-0.4, 2.5], [-2, 0.1]]));
	
	var model = STRUCT([drawer, glass_cover]);

	return model;
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

//Inserisco collegamenti tra le varie parti
function links() {

	var link1 = T([0,1,2])([2.5,2.7,2.3])(CYL_SURFACE([0.05, 0.1])([32,1]));

	var circle1 = T([0,1,2])([2.5,2.7,2.4])(full_circle(0.05,0));

	var link2 = T([0,1,2])([2.5,0.9,2.3])(CYL_SURFACE([0.05, 0.1])([32,1]));

	var circle2 = T([0,1,2])([2.5,0.9,2.4])(full_circle(0.05,0));

	var link3 = T([0,1,2])([5.7,1.6,2])(CYL_SURFACE([0.05, 0.4])([32,1]));

	var circle3 = T([0,1,2])([5.7,1.6,2.4])(full_circle(0.05,0));

	var link4 = T([0,1,2])([5.7,2,2])(CYL_SURFACE([0.05, 0.4])([32,1]));

	var circle4 = T([0,1,2])([5.7,2,2.4])(full_circle(0.05,0));

	var link5 = T([0,1,2])([0.5, 1.3, 1.28])(R([1,2])([-PI/2])(CYL_SURFACE([0.025, 1])([32,1])));

	var link6 = T([0,1,2])([1, 0.6, 0.8])(R([0,2])([-PI/4])(R([1,2])([-PI/4])(CYL_SURFACE([0.025, 1.1])([32,1]))));

	var link7 = T([0,1,2])([1, 3, 0.8])(R([0,2])([-PI/4])(R([1,2])([PI/4])(CYL_SURFACE([0.025, 1.1])([32,1]))));

	var links = STRUCT([link1, link2, link3, link4,
						circle1, circle2, circle3, circle4,
						link5, link6, link7]);

	return links;
}

var desk = STRUCT([legs, big_drawers(), little_drawers(), glass_table(), links()]);

DRAW(desk);