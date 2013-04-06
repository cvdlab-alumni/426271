#make parts of base floor
floor0_1 = INSR(PROD)(AA(QUOTE)([[2.5], [-10.5,3]]))

floor0_2 = INSR(PROD)(AA(QUOTE)([[-2.5, 14.5], [-4.5,9]]))

floor0_3 = INSR(PROD)(AA(QUOTE)([[-2.5, 2], [-0.5,-3,1]]))

floor0_4 = INSR(PROD)(AA(QUOTE)([[-2.5, -14.5, 2], [-9.5,4]]))

domi2D = PROD([INTERVALS(PI)(24), INTERVALS(2)(1)])

def full_circle(p):
	a,r = p
	return [r*COS(a), r*SIN(a)]

sect_arc1 = T([1,2])([19,11.5])(R([1,2])(-PI/2)(MAP(full_circle)(domi2D))) 

domin2D = PROD([INTERVALS(PI)(24), INTERVALS(1)(1)])

sect_arc2 = T([1,2])([3.5,3.5])(R([1,2])(-PI)(MAP(full_circle)(domin2D)))

floor0 = STRUCT([floor0_1, floor0_2, floor0_3, floor0_4, sect_arc1, sect_arc2])

#make parts of first floor
floor1_1 = INSR(PROD)(AA(QUOTE)([[22.5], [11], [-5, 0.6]]))

floor1_2 = INSR(PROD)(AA(QUOTE)([[22.5], [-13, 0.5], [-5, 0.6]]))

floor1_3 = INSR(PROD)(AA(QUOTE)([[6, -6, 10.5], [-11, 2], [-5, 0.6]]))

floor1_4 = T([2,3])([13,5])(R([1,2])(PI)(CUBOID([2, 2, 0.6])))

floor1 = STRUCT([floor1_1, floor1_2, floor1_3, floor1_4])

#make parts of second floor
floor2_1 = INSR(PROD)(AA(QUOTE)([[-11, 11.5], [13.5], [-5, -0.6, -4.1, 0.9]]))

floor2_2 = T(3)(9.7)(PROD([MKPOL([[[11,0], [11, 11], [11,13.5], [9,13.5], [9, 11]], [[1,2,5], [2,4,5], [2,3,4]], None]), Q(0.9)]))

floor2_3 = INSR(PROD)(AA(QUOTE)([[9], [-13, 0.5], [-5, -0.6, -4.1, 0.9]]))

floor2_4 = INSR(PROD)(AA(QUOTE)([[-1.5, 8], [-10.5, 0.5], [-5, -0.6, -4.1, 0.9]]))

floor2_5 = INSR(PROD)(AA(QUOTE)([[0.5], [-10.5, 3], [-5, -0.6, -4.1, 0.9]]))

floor2 = STRUCT([floor2_1, floor2_2, floor2_3, floor2_4, floor2_5])

#make parts of third floor
floor3_1 = INSR(PROD)(AA(QUOTE)([[22.5], [11], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]]))

floor3_2 = INSR(PROD)(AA(QUOTE)([[-11, 0.5, -6, 5], [-11,2], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]]))

floor3_3 = INSR(PROD)(AA(QUOTE)([[11], [-11, 2.5], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]]))

floor3_4 = INSR(PROD)(AA(QUOTE)([[-11, 11.5], [-13, 0.5], [-5, -0.6, -4.1, -0.9, -4.1, 0.9]]))

floor3 = STRUCT([floor3_1, floor3_2, floor3_3, floor3_4])

#make parts of fourth floor
floor4_1 = INSR(PROD)(AA(QUOTE)([[-11, 11.5], [13.5], [-5, -0.6, -4.1, -0.9, -4.1, -0.9, -4.5, 0.9]]))

floor4_2 = INSR(PROD)(AA(QUOTE)([[11], [-10.5, 3], [-5, -0.6, -4.1, -0.9, -4.1, -0.9, -4.5, 0.9]]))

floor4 = STRUCT([floor4_1, floor4_2])

floors = STRUCT([floor0, floor1, floor2, floor3, floor4])