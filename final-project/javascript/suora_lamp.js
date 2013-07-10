//colors
var bisque = [1, 228/255, 196/255];
var gold = [1,185/255,15/255];
var c_light = [1.5,1.5,1.5,0.7];

var domain = INTERVALS(1)(36);
var domain2D = PROD1x1([INTERVALS(1)(32),INTERVALS(1)(32)]);

function sphere(r) {
	var domain = DOMAIN([[0, PI], [0, 2*PI]])([16,16]);

	var mapping = function(v) {
		var a = v[0];
		var b = v[1];

		var u = r*SIN(a)*COS(b);
		var v = r*SIN(a)*SIN(b);
		var w = r*COS(a);

		return [u,v,w];
	}
	return MAP(mapping)(domain)
}

//Modello il paralume
function lamp() {

	var point1 = [[5.4, 5.12, 0], [4.36, 5.12, 0], [4.36, 4.04, 0], [5.4, 4.04, 0]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[5.4, 5.12, 3], [4.36, 5.12, 3], [4.36, 4.04, 3], [5.4, 4.04, 3]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var point3 = [[5.4, 5.12, 3], [6.62, 5.06, 3], [5.92, 2.95, 3], [5.71, 2.56, 3]];
	var c3 = BEZIER(S0)(point3);
	var curve3 = MAP(c3)(domain);

	var point4 = [[5.4, 5.12, 0], [6.62, 5.06, 0.3], [5.92, 2.95, 1.5], [5.71, 2.56, 2.8]];
	var c4 = BEZIER(S0)(point4);
	var curve4 = MAP(c4)(domain);

	var surface1 = MAP(BEZIER(S1)([c1,c2]))(domain2D);
	var surface2 = MAP(BEZIER(S1)([c3,c4]))(domain2D);

	var point5 = [[5.4, 5.12, 0], [6.44, 5.12, 0], [6.44, 4.04, 0], [5.4, 4.04, 0]];
	var c5 = BEZIER(S0)(point5);
	var curve5 = MAP(c5)(domain);

	var point6 = [[5.4, 5.12, 3], [6.44, 5.12, 3], [6.44, 4.04, 3], [5.4, 4.04, 3]];
	var c6 = BEZIER(S0)(point6);
	var curve6 = MAP(c6)(domain);

	var point7 = [[5.4, 5.12, 3], [4.18, 5.06, 3], [5.5, 2.95, 3], [5.71, 2.56, 3]];
	var c7 = BEZIER(S0)(point7);
	var curve7 = MAP(c7)(domain);

	var point8 = [[5.4, 5.12, 0], [4.18, 5.06, 0.3], [5.5, 2.95, 1.5], [5.71, 2.56, 2.8]];
	var c8 = BEZIER(S0)(point8);
	var curve8 = MAP(c8)(domain);

	var surface3 = MAP(BEZIER(S1)([c5,c6]))(domain2D);
	var surface4 = MAP(BEZIER(S1)([c7,c8]))(domain2D);

	var fhl = STRUCT([surface1,surface2]);

	var n_surface4 = T([1,2])([9.16,3])(R([1,2])([PI])(surface4));
	
	var shl = T([0,1,2])([-0.5,-0.3, 0.7])(STRUCT([surface3,n_surface4]));
	
	var l = COLOR(bisque)(T([0,1,2])([1.7,-3.4,1])(R([0,2])([-PI/4])(STRUCT([fhl, shl]))));

	return l;
}

//Modello il piedistallo
function pedestal() {

	var point1 = [[0.7, 0, 0], [1, 1, 0]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[0, 0.7, 0], [1, 1, 0]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var point3 = [[0, -0.7, 0], [-1, -1, 0]];
	var c3 = BEZIER(S0)(point3);
	var curve3 = MAP(c3)(domain);

	var point4 = [[-0.7, 0, 0], [-1, -1, 0]];
	var c4 = BEZIER(S0)(point4);
	var curve4 = MAP(c4)(domain);
	
	var surface1 = MAP(BEZIER(S1)([c1,c3]))(domain2D);
	var surface2 = MAP(BEZIER(S1)([c2,c4]))(domain2D);

	surface3 = STRUCT([surface1,surface2]);

	var surfaces = STRUCT([surface3, R([0,1])([PI/2])(surface3)]);

	var point1_t = [[0.7, 0, 0.2], [1, 1, 0.2]];
	var c1_t = BEZIER(S0)(point1_t);
	var curve1_t = MAP(c1_t)(domain);

	var point2_t = [[0, 0.7, 0.2], [1, 1, 0.2]];
	var c2_t = BEZIER(S0)(point2_t);
	var curve2_t = MAP(c2_t)(domain);

	var surface4 = MAP(BEZIER(S1)([c1,c1_t]))(domain2D);
	var surface5 = MAP(BEZIER(S1)([c2,c2_t]))(domain2D);

	var s = STRUCT([surface4,surface5]);

	var vertical_surfaces = STRUCT([s,
									R([0,1])([PI/2])(s),
									R([0,1])([PI])(s),
									R([0,1])([-PI/2])(s)]);

	var ped = COLOR(gold)(T([0,1])([1,1])(STRUCT([surfaces, T([2])([0.2])(surfaces), vertical_surfaces])));
	return ped;

}

function light() {
	
	var l = COLOR(c_light)(T([0,1,2])([4,1,6])(sphere(0.25)));

	return l;
}

//Modello i nodi della struttura
function nodes() {

	var sp1 = T([0,1,2])([1,1,0.2])(sphere(0.1));

	var sp2 = T([0,1,2])([1,1,0.6])(sphere(0.2));	
	
	var sp3 = T([0,1,2])([0,1,5])(sphere(0.1));

	var sp4 = T([0,1,2])([2,1,8])(sphere(0.1));

	n = COLOR(gold)(STRUCT([sp1, sp2, sp3, sp4]));
	
	return n;
}

//Modello i collegamenti della struttura
function links() {

	var link1 = T([0,1,2])([1,1,0.2])(CYL_SURFACE([0.05, 0.3])([32,1]));

	var link2 = R([0,2])([-PI/14])(T([0,1,2])([1.1,1,0.4])(CYL_SURFACE([0.05, 4.5])([32,1])));

	var link3 = T([1,2])([1,5])(R([0,2])([PI/5.4])(CYL_SURFACE([0.05, 3.6])([32,1])));

	var link4 = T([0,1,2])([2,1,8])(R([0,2])([3*PI/4])(CYL_SURFACE([0.05, 2.6])([32,1])));

	var link5 = T([0,1,2])([3,1,7])(R([1,2])([-PI/2])(CYL_SURFACE([0.01, 0.38])([32,1])));

	var link6 = T([0,1,2])([3,1,7])(R([1,2])([PI/2])(CYL_SURFACE([0.01, 0.63])([32,1])));

	var links = COLOR(gold)(STRUCT([link1, link2, link3, link4, link5, link6]));

	return links;

}

//Modello i dettagli
function details() {

	var point1 = [[0, 0, 0], [0.3, 0, -0.2]];
	var c1 = BEZIER(S0)(point1);
	var curve1 = MAP(c1)(domain);

	var point2 = [[0, 0, 0], [0.3, 0, 0.2]];
	var c2 = BEZIER(S0)(point2);
	var curve2 = MAP(c2)(domain);

	var det = COLOR(gold)(T([0,1,2])([1,1,0.6])(R([0,1])([-PI/2])(MAP(BEZIER(S1)([c1,c2]))(domain2D))));
	
	return det;
}

var model = STRUCT([lamp(), pedestal(), nodes(), light(), links(), details()]);

DRAW(model);