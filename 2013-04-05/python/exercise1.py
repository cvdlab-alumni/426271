#realize base of the circular pillars at the base floor with r = 1
dom2D = PROD([INTERVALS(2*PI)(24), INTERVALS(1)(1)])

def full_circle(p):
	a,r = p
	return [r*COS(a), r*SIN(a)]

f_c = MAP(full_circle)(dom2D)

#resize the base and traslate on the x-axe
c_b = T(1)(0.25)(S([1,2])([0.25,0.25])(f_c))

circ_base = T(2)(0.25)(c_b)

#make the replica of base in right places
bases1 = STRUCT(NN(5)([circ_base, T(1)(5.5)]))

bases2 = STRUCT(NN(2)([circ_base, T(2)(10.5)]))

bases = STRUCT([bases1, bases2])

#extrude the bases with the right height
pillars0_circ = PROD([bases, Q(5)])

#make the square-based pillars of the base floor
pillars0_square = INSR(PROD)(AA(QUOTE)([[-0.5,-2.5,0.5,-2,0.5,-5,0.5,-5,0.5], [-10.5,0.5], [5]]))

pillars0 = STRUCT([pillars0_circ, pillars0_square])

#make the square-based pillars of the first floor
pillars1_sq1 = INSR(PROD)(AA(QUOTE)([[-1.5, 0.3], [-10.5, 0.3], [-5.6, 5]]))

pillars1_sq2 = INSR(PROD)(AA(QUOTE)([[0.5,-5,0.5,-5,0.5,-10.5,0.5], [0.5,-10,0.5], [-5.6, 5]]))

pillars1_sq3 = INSR(PROD)(AA(QUOTE)([[-0.5,-5,-0.5,-5,-0.5,-5,0.5], [0.5], [-5.6, 5]]))

#make the circle-based pillar of the first floor
pillars1_circ = PROD([circ_base, Q(5)])

pillars1_c = T([1,2,3])([16.5, 10.5, 5.6])(pillars1_circ)

pillars1 = STRUCT([pillars1_sq1, pillars1_sq2, pillars1_sq3, pillars1_c])

#make the pillars of the second floor
pillars2_sq1 = INSR(PROD)(AA(QUOTE)([[0.5,-5,0.5,-5,0.5,-10.5,0.5], [0.5,-10,0.5], [-5.6, -5, 4.1]]))

pillars2_sq2 = INSR(PROD)(AA(QUOTE)([[-0.5,-5,-0.5,-5,-0.5,-5,0.5], [-10.5,0.5], [-5.6, -5, 4.1]]))

pillars2 = STRUCT([pillars2_sq1, pillars2_sq2])

#make the pillars of the third floor
pillars3_sq1 = INSR(PROD)(AA(QUOTE)([[0.5,-5,0.5,-5,0.5,-5,0.5,-5,0.5], [-0.5,-10,0.5], [-5.6, -5, -4.1,-0.9,4.5]]))

pillars3_sq2 = INSR(PROD)(AA(QUOTE)([[-0.5,-5,-0.5,-5,0.5,-10.5,0.5], [0.5], [-5.6, -5, -4.1, -0.9, 4.5]]))

pillars3 = STRUCT([pillars3_sq1, pillars3_sq2])

pillars = STRUCT([pillars0, pillars1, pillars2, pillars3])




