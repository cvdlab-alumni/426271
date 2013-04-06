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
