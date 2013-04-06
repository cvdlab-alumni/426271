//realize base of the circular pillars at the base floor with r = 1
var dom2D = DOMAIN([[0,2*PI],[0,1]])([24,1]);

var f_c = function full_circle (p) {
	
	var mapping = function (v) {
		var a = v[0];
		var r = v[1];

		return [r*COS(a), r*SIN(a)];
	}

	model = MAP(mapping)(dom2D);

	return model;
}

//resize the base and traslate on the x-axe
var c_b = T([0])([0.25])(S([0,1])([0.25,0.25])(f_c()))

var circ_base = T([1])([0.25])(c_b)

// //make the replica of base in right places

var cil = EXTRUDE([5])(circ_base)
var bases1 = STRUCT(REPLICA(5)([cil, T([0])([5.5])]));


bases2 = STRUCT(REPLICA(2)([cil, T([1])([10.5])]));
pillars0_circ = STRUCT([bases1, bases2])

//make the square-based pillars of the base floor
var pillars0_square = SIMPLEX_GRID([[-0.5,-2.5,0.5,-2,0.5,-5,0.5,-5,0.5], [-10.5,0.5], [5]])

pillars0 = STRUCT([pillars0_circ, pillars0_square])

//make the square-based pillars of the first floor
var pillars1_sq1 = SIMPLEX_GRID([[-1.5, 0.3], [-10.5, 0.3], [-5.6, 5]])

var pillars1_sq2 = SIMPLEX_GRID([[0.5,-5,0.5,-5,0.5,-10.5,0.5], [0.5,-10,0.5], [-5.6, 5]])

var pillars1_sq3 = SIMPLEX_GRID([[-0.5,-5,-0.5,-5,-0.5,-5,0.5], [0.5], [-5.6, 5]])

//make the circle-based pillar of the first floor
var pillars1_circ = EXTRUDE([5])(circ_base)

var pillars1_c = T([0,1,2])([16.5, 10.5, 5.6])(pillars1_circ)

var pillars1 = STRUCT([pillars1_sq1, pillars1_sq2, pillars1_sq3, pillars1_c])

//make the pillars of the second floor
var pillars2_sq1 = SIMPLEX_GRID([[0.5,-5,0.5,-5,0.5,-10.5,0.5], [0.5,-10,0.5], [-5.6, -5, 4.1]])

var pillars2_sq2 = SIMPLEX_GRID([[-0.5,-5,-0.5,-5,-0.5,-5,0.5], [-10.5,0.5], [-5.6, -5, 4.1]])

var pillars2 = STRUCT([pillars2_sq1, pillars2_sq2])

//make the pillars of the third floor
var pillars3_sq1 = SIMPLEX_GRID([[0.5,-5,0.5,-5,0.5,-5,0.5,-5,0.5], [-0.5,-10,0.5], [-5.6, -5, -4.1, 4.5]])

var pillars3_sq2 = SIMPLEX_GRID([[-0.5,-5,-0.5,-5,0.5,-10.5,0.5], [0.5], [-5.6, -5, -4.1, 4.5]])

var pillars3 = STRUCT([pillars3_sq1, pillars3_sq2])

var pillars = STRUCT([pillars0, pillars1, pillars2, pillars3])







//---------------------------------------------ES2-----------------------------------------------------
//make parts of base floor
floor0_1 = SIMPLEX_GRID([[2.5], [-10.5,3]])

floor0_2 = SIMPLEX_GRID([[-2.5, 14.5], [-4.5,9]])

floor0_3 = SIMPLEX_GRID([[-2.5, 2], [-0.5,-3,1]])

floor0_4 = SIMPLEX_GRID([[-2.5, -14.5, 2], [-9.5,4]])

var domi2D = DOMAIN([[0,PI],[0,2]])([24,1]);

var f_c = function full_circle (p) {
	
	var mapping = function (v) {
		var a = v[0];
		var r = v[1];

		return [r*COS(a), r*SIN(a)];
	}

	model = MAP(mapping)(domi2D);

	return model;
}

sect_arc1 = T([0,1])([19,11.5])(R([0,1])(-PI/2)(f_c())) 

var domin2D = DOMAIN([[0,PI],[0,1]])([24,1]);

var f_c = function full_circle (p) {
	
	var mapping = function (v) {
		var a = v[0];
		var r = v[1];

		return [r*COS(a), r*SIN(a)];
	}

	model = MAP(mapping)(domin2D);

	return model;
}

sect_arc2 = T([0,1])([3.5,3.5])(R([0,1])(-PI)(MAP(f_c()))

floor0 = STRUCT([floor0_1, floor0_2, floor0_3, floor0_4, sect_arc1, sect_arc2])

//make parts of first floor
floor1_1 = SIMPLEX_GRID([[22.5], [11], [-5, 0.6]])

floor1_2 = SIMPLEX_GRID([[22.5], [-13, 0.5], [-5, 0.6]])

floor1_3 = SIMPLEX_GRID([[6, -6, 10.5], [-11, 2], [-5, 0.6]])

floor1_4 = T([1,2])([13,5])(R([0,1])(PI)(CUBOID([2, 2, 0.6])))

floor1 = STRUCT([floor1_1, floor1_2, floor1_3, floor1_4])

//make parts of second floor
floor2_1 = SIMPLEX_GRID([[-11, 11.5], [13.5], [-5, -0.6, -4.1, 0.9]])

floor2_2 = T(3)(9.7)(PROD([MKPOL([[[11,0], [11, 11], [11,13.5], [9,13.5], [9, 11]], [[1,2,5], [2,4,5], [2,3,4]], None]), Q(0.9)]))

floor2_3 = SIMPLEX_GRID([[9], [-13, 0.5], [-5, -0.6, -4.1, 0.9]])

floor2_4 = SIMPLEX_GRID([[-1.5, 8], [-10.5, 0.5], [-5, -0.6, -4.1, 0.9]])

floor2_5 = SIMPLEX_GRID([[0.5], [-10.5, 3], [-5, -0.6, -4.1, 0.9]])

floor2 = STRUCT([floor2_1, floor2_2, floor2_3, floor2_4, floor2_5])

//make parts of third floor
floor3_1 = SIMPLEX_GRID([[22.5], [11], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]])

floor3_2 = SIMPLEX_GRID([[-11, 0.5, -6, 5], [-11,2], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]])

floor3_3 = SIMPLEX_GRID([[11], [-11, 2.5], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]])

floor3_4 = SIMPLEX_GRID([[-11, 11.5], [-13, 0.5], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]])

floor3 = STRUCT([floor3_1, floor3_2, floor3_3, floor3_4])

//make parts of fourth floor
floor4_1 = SIMPLEX_GRID([[-11, 11.5], [13.5], [-5, -0.6, -4.1, -0.9, -4.1, -0.9, -4.5, 0.9]])

floor4_2 = SIMPLEX_GRID([[11], [-10.5, 3], [-5, -0.6, -4.1, -0.9, -4.1, -0.9, -4.5, 0.9]])

floor4 = STRUCT([floor4_1, floor4_2])

floors = STRUCT([floor0, floor1,  floor3, floor4])


//------------------------------------------------------ES3----------------------------------------------------
//realize the sud face




building = STRUCT([pillars, floors])

VIEW(building)
