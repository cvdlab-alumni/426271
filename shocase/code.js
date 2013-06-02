//Animated Marco!!
var brown = [91/255, 48/255, 43/255];//per il contorno e pantaloni
var yellow = [1, 1, 51/255];//per i capelli
var orange = [1, 153/255, 0/255];//per i capelli
var light_grey = [197/255, 195/255, 140/255];//per i polsini, la maglietta e i pantaloni
var dark_grey = [142/255, 140/255, 72/255];//per i polsini, la maglietta e i pantaloni
var white = [1,1,1];
var black = [0,0,0];
var dark_red = [184/255,0,0];// per il giacchetto
var light_red = [184/255,92/255,0];// per il giacchetto
var light_pink = [1,1,153/255];//per la pelle
var pink = [1,204/255,153/255];//per la pelle
var dark_pink = [153/255,102/255,51/255];//per la pelle

GRID = SIMPLEX_GRID;

var row1 = COLOR(black)(GRID([[10, -18, 10], [1], [0.5]]));

var row2 = STRUCT([COLOR(black)(GRID([[2,-5,3,-18,1,-1,2,-4,2], [-1, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-2,2,-30,1], [-1, 1], [0.5]])),
	COLOR(brown)(GRID([[-4,3,-22,1,-2,2,-1,1], [-1, 1], [0.5]]))
	]);

var row3 = STRUCT([COLOR(black)(GRID([[-2,2,-2,2,-1,1,-18,2,-4,2], [-2, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-31,3], [-2, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-4,1], [-2, 1], [0.5]])),
	COLOR(brown)(GRID([[-5,1,-2,1,-21,1], [-2, 1], [0.5]]))
	]);

var row4 = STRUCT([COLOR(black)(GRID([[-4,1,-3,4,-15,4,-2,1], [-3, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-5,1], [-3, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-32,1], [-3, 1], [0.5]])),
	COLOR(brown)(GRID([[-6,2,-23,1], [-3, 1], [0.5]]))
	]);

var row5 = STRUCT([COLOR(black)(GRID([[-5,1,-3,2,-1,1,-13,1,-1,1,-3,1], [-4, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-11,1,-15,1,-3,1], [-4, 1], [0.5]])),
	COLOR(brown)(GRID([[-6,3,-20,2], [-4, 1], [0.5]]))
	]);

var row6 = STRUCT([COLOR(black)(GRID([[-6,4,-3,1,-11,1,-3,3], [-5, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-10,1,-17,1], [-5, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-11,1], [-5, 1], [0.5]])),
	COLOR(brown)(GRID([[-12,1,-13,2], [-5, 1], [0.5]]))
	]);

var row7 = STRUCT([COLOR(black)(GRID([[-6,1,-7,1,-9,1,-6,1], [-6, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-7,1,-4,1,-14,1,-1,2], [-6, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-8,3], [-6, 1], [0.5]])),
	COLOR(brown)(GRID([[-11,1,-1,1,-11,2,-1,1], [-6, 1], [0.5]]))
	]);

var row8 = STRUCT([COLOR(black)(GRID([[-6,1,-8,2,-5,3,-6,1], [-7, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-9,1,-1,4,-11,2], [-7, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-7,2,-1,1,-17,3], [-7, 1], [0.5]])),
	COLOR(brown)(GRID([[-25,1], [-7, 1], [0.5]]))
	]);

var row9 = STRUCT([COLOR(black)(GRID([[-7,1,-9,1,-3,1,-3,1,-4,1], [-8, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-8,1,-6,2,-9,1,-2,1], [-8, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-10,2,-15,2], [-8, 1], [0.5]])),
	COLOR(white)(GRID([[-9,1], [-8, 1], [0.5]])),
	COLOR(brown)(GRID([[-12,3,-7,3], [-8, 1], [0.5]]))
	]);

var row10 = STRUCT([COLOR(black)(GRID([[-8,1,-9,3,-8,1], [-9, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-13,2,-8,3], [-9, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-12,1,-13,2], [-9, 1], [0.5]])),
	COLOR(white)(GRID([[-28,1], [-9, 1], [0.5]])),
	COLOR(brown)(GRID([[-9,3,-3,3,-3,2], [-9, 1], [0.5]]))
	]);

var row11 = STRUCT([COLOR(black)(GRID([[-8,4,-16,1], [-10, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-14,4,-2,1,-1,1,-1,2], [-10, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-13,1,-12,2], [-10, 1], [0.5]])),
	COLOR(brown)(GRID([[-12,1,-5,2,-1,1,-1,1], [-10, 1], [0.5]]))
	]);

var row12 = STRUCT([COLOR(black)(GRID([[-7,1,-4,1,-14,1], [-11, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-14,3,-1,1,-3,1], [-11, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-20,1,-2,1,-1,2], [-11, 1], [0.5]])),
	COLOR(brown)(GRID([[-13,1,-3,1,-1,1,-1,1,-2,1], [-11, 1], [0.5]])),
	COLOR(pink)(GRID([[-9,2], [-11, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-8,1,-2,1], [-11, 1], [0.5]]))
	]);

var row13 = STRUCT([COLOR(black)(GRID([[-7,1,-1,1,-3,1,-12,1], [-12, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-17,1,-7,1], [-12, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-18,2,-1,1,-1,1], [-12, 1], [0.5]])),
	COLOR(brown)(GRID([[-14,3,-3,1,-1,1,-1,1], [-12, 1], [0.5]])),
	COLOR(pink)(GRID([[-8,1,-1,2], [-12, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-12,1], [-12, 1], [0.5]]))
	]);

var row14 = STRUCT([COLOR(black)(GRID([[-8,2,-3,1,-12,1], [-13, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-16,1,-1,2,-3,1,-1,1], [-13, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-17,1,-3,1,-2,1], [-13, 1], [0.5]])),
	COLOR(brown)(GRID([[-14,2,-4,1,-1,1], [-13, 1], [0.5]])),
	COLOR(pink)(GRID([[-10,2], [-13, 1], [0.5]])),	
	COLOR(dark_pink)(GRID([[-12,1], [-13, 1], [0.5]]))
	]);

var row15 = STRUCT([COLOR(black)(GRID([[-9,1,-3,3,-9,1], [-14, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-19,2,-2,2], [-14, 1], [0.5]])),
	COLOR(brown)(GRID([[-16,3,-2,2], [-14, 1], [0.5]])),
	COLOR(pink)(GRID([[-10,3], [-14, 1], [0.5]]))
	]);

var pants = STRUCT([row1, row2, row3, row4, row5, row6, row7, row8, row9, row10,
					row11, row12, row13, row14, row15]);

/*FRAME1 ROWS*/
var row16 = STRUCT([COLOR(black)(GRID([[-8,1,-1,1,-2,1,-1,4,-1,1,-2,2], [-15, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-19,1], [-15, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-21,1], [-15, 1], [0.5]])),
	COLOR(white)(GRID([[-22,1], [-15, 1], [0.5]])),
	COLOR(brown)(GRID([[-9,1], [-15, 1], [0.5]])),
	COLOR(pink)(GRID([[-11,2], [-15, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-14,1], [-15, 1], [0.5]]))
	]);

var row17 = STRUCT([COLOR(black)(GRID([[-7,2,-2,2,-4,7], [-16, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-9,1], [-16, 1], [0.5]])),
	COLOR(brown)(GRID([[-10,1], [-16, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-13,4], [-16, 1], [0.5]]))
	]);

var row18 = STRUCT([COLOR(black)(GRID([[-7,1,-1,1,-2,1,-5,1,-4,1], [-17, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-10,1,-11,1], [-17, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-19,1], [-17, 1], [0.5]])),
	COLOR(white)(GRID([[-20,2], [-17, 1], [0.5]])),
	COLOR(brown)(GRID([[-11,1], [-17, 1], [0.5]])),
	COLOR(pink)(GRID([[-8,1], [-17, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-14,4], [-17, 1], [0.5]])),
	COLOR(light_red)(GRID([[-13,1], [-17, 1], [0.5]])),
	]);

var row19 = STRUCT([COLOR(black)(GRID([[-6,1,-3,1,-1,1,-5,1,-3,1,-1,1], [-18, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-19,2], [-18, 1], [0.5]])),
	COLOR(white)(GRID([[-21,1], [-18, 1], [0.5]])),
	COLOR(brown)(GRID([[-11,1], [-18, 1], [0.5]])),
	COLOR(pink)(GRID([[-7,1,-1,1], [-18, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-8,1], [-18, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-16,2,-5,1], [-18, 1], [0.5]])),
	COLOR(light_red)(GRID([[-13,3], [-18, 1], [0.5]])),
	]);

var row20 = STRUCT([COLOR(black)(GRID([[-5,1,-5,1,-6,1,-3,1,-1,1], [-19, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-21,1], [-19, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-19,2], [-19, 1], [0.5]])),
	COLOR(pink)(GRID([[-6,1,-1,2], [-19, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-7,1], [-19, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-10,1], [-19, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-13,5], [-19, 1], [0.5]])),
	COLOR(light_red)(GRID([[-12,1,-10,1], [-19, 1], [0.5]]))
	]);

var row21 = STRUCT([COLOR(black)(GRID([[-5,1,-5,1,-5,1,-3,1,-1,1], [-20, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-18,3], [-20, 1], [0.5]])),
	COLOR(pink)(GRID([[-7,4], [-20, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-6,1], [-20, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-12,5,-5,1], [-20, 1], [0.5]]))
	]);

var row22 = STRUCT([COLOR(black)(GRID([[-5,1,-5,2,-4,1,-3,1,-1,1], [-21, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-19,2], [-21, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-18,1], [-21, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-8,3], [-21, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-6,2], [-21, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-13,4,-5,1], [-21, 1], [0.5]]))
	]);

var row23 = STRUCT([COLOR(black)(GRID([[-6,1,-5,2,-3,1,-2,4], [-22, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-18,2], [-22, 1], [0.5]])),
	COLOR(pink)(GRID([[-7,4], [-22, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-11,1], [-22, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-14,3], [-22, 1], [0.5]]))
	]);

var row24 = STRUCT([COLOR(black)(GRID([[-6,1,-5,2,-2,1,-2,1,-4,1], [-23, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-17,2], [-23, 1], [0.5]])),
	COLOR(pink)(GRID([[-7,1,-1,2,-9,3], [-23, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-11,1], [-23, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-8,1,-14,1], [-23, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-14,2], [-23, 1], [0.5]]))
	]);

var row25 = STRUCT([COLOR(black)(GRID([[-7,1,-5,1,-2,3,-2,2,-2,2], [-24, 1], [0.5]])),
	COLOR(brown)(GRID([[-23,2], [-24, 1], [0.5]])),
	COLOR(pink)(GRID([[-8,1,-2,1,-7,1], [-24, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-12,1,-7,1], [-24, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-9,2], [-24, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-15,1], [-24, 1], [0.5]])),
	COLOR(light_red)(GRID([[-14,1], [-24, 1], [0.5]]))
	]);

var row26 = STRUCT([COLOR(black)(GRID([[-7,1,-5,1,-2,2,-1,1,-7,2], [-25, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-20,1], [-25, 1], [0.5]])),
	COLOR(white)(GRID([[-9,1,-11,2], [-25, 1], [0.5]])),
	COLOR(brown)(GRID([[-15,1,-7,2], [-25, 1], [0.5]])),
	COLOR(pink)(GRID([[-8,1,-2,1,-6,1], [-25, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-12,1,-12,2], [-25, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-10,1], [-25, 1], [0.5]])),
	COLOR(light_red)(GRID([[-14,1], [-25, 1], [0.5]]))
	]);

var row27 = STRUCT([COLOR(black)(GRID([[-8,1,-4,1,-2,1,-2,3,-7,1], [-26, 1], [0.5]])),
	COLOR(brown)(GRID([[-22,2], [-26, 1], [0.5]])),
	COLOR(pink)(GRID([[-17,1,-8,1], [-26, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-9,4,-2,1,-2,1,-5,2,-1,2], [-26, 1], [0.5]])),
	COLOR(pink)(GRID([[-17,1,-8,1], [-26, 1], [0.5]])),
	COLOR(light_red)(GRID([[-14,1], [-26, 1], [0.5]]))
	]);

var row28 = STRUCT([COLOR(black)(GRID([[-7,3,-2,1,-3,1,-5,1,-7,1], [-27, 1], [0.5]])),
	COLOR(brown)(GRID([[-14,1,-3,1,-4,1], [-27, 1], [0.5]])),
	COLOR(pink)(GRID([[-17,1,-7,2,-1,1], [-27, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-10,2,-3,1,-8,1,-2,1,-1,1], [-27, 1], [0.5]])),
	COLOR(white)(GRID([[-20,2], [-27, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-19,1], [-27, 1], [0.5]])),
	COLOR(light_red)(GRID([[-13,1], [-27, 1], [0.5]]))
	]);

var row29 = STRUCT([COLOR(black)(GRID([[-6,1,-1,1,-1,2,-3,1,-6,1,-7,1], [-28, 1], [0.5]])),
	COLOR(brown)(GRID([[-14,1,-8,1], [-28, 1], [0.5]])),
	COLOR(pink)(GRID([[-17,1,-2,2,-3,1,-1,2], [-28, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-16,1,-1,2,-4,1,-1,1,-2,1], [-28, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-9,1,-3,1], [-28, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-7,1], [-28, 1], [0.5]])),
	COLOR(light_red)(GRID([[-12,1], [-28, 1], [0.5]]))
	]);

var row30 = STRUCT([COLOR(black)(GRID([[-6,1,-2,1,-12,3,-6,1], [-29, 1], [0.5]])),
	COLOR(brown)(GRID([[-13,2], [-29, 1], [0.5]])),
	COLOR(pink)(GRID([[-15,1,-1,2,-1,1,-4,1,-2,2], [-29, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-16,1,-4,1,-4,1,-3,1], [-29, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-19,1,-7,1], [-29, 1], [0.5]])),
	COLOR(dark_red)(GRID([[-12,1], [-29, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-7,1], [-29, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-8,1], [-29, 1], [0.5]])),
	COLOR(light_red)(GRID([[-10,2], [-29, 1], [0.5]]))
	]);

var row31 = STRUCT([COLOR(black)(GRID([[-6,1,-3,2,-13,2,-3,2], [-30, 1], [0.5]])),
	COLOR(brown)(GRID([[-12,1,-1,1,-1,1,-7,1], [-30, 1], [0.5]])),
	COLOR(pink)(GRID([[-15,1,-1,1,-2,3,-5,2], [-30, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-19,1], [-30, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-18,1,-8,1], [-30, 1], [0.5]])),
	COLOR(white)(GRID([[-7,1,-15,1], [-30, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-8,2], [-30, 1], [0.5]])),
	COLOR(orange)(GRID([[-13,1], [-30, 1], [0.5]]))
	]);

var row32 = STRUCT([COLOR(black)(GRID([[-7,3,-16,1,-1,2,-1,1], [-31, 1], [0.5]])),
	COLOR(brown)(GRID([[-12,2,-1,4,-1,1,-2,1,-6,1], [-31, 1], [0.5]])),
	COLOR(pink)(GRID([[-21,1,-5,1], [-31, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-22,1], [-31, 1], [0.5]])),
	COLOR(white)(GRID([[-19,1], [-31, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-14,1], [-31, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-10,2], [-31, 1], [0.5]]))
	]);

var row33 = STRUCT([COLOR(black)(GRID([[-10,2,-8,1,-5,2,-3,1], [-32, 1], [0.5]])),
	COLOR(brown)(GRID([[-12,1,-1,1,-3,1,-3,1,], [-32, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-21,1], [-32, 1], [0.5]])),
	COLOR(orange)(GRID([[-13,1], [-32, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-15,3,-1,1], [-32, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-28,3], [-32, 1], [0.5]]))		
	]);

var row34 = STRUCT([COLOR(black)(GRID([[-27,1,-2,2], [-33, 1], [0.5]])),
	COLOR(brown)(GRID([[-12,1,-2,1,-6,1], [-33, 1], [0.5]])),
	COLOR(white)(GRID([[-17,5], [-33, 1], [0.5]])),
	COLOR(orange)(GRID([[-13,2], [-33, 1], [0.5]])),
	COLOR(light_grey)(GRID([[-16,1,-11,1], [-33, 1], [0.5]])),
	COLOR(dark_grey)(GRID([[-29,1], [-33, 1], [0.5]]))
	]);

var row35 = STRUCT([COLOR(black)(GRID([[-27,3,-2,1], [-34, 1], [0.5]])),
	COLOR(brown)(GRID([[-13,1,-2,2,-3,4], [-34, 1], [0.5]])),
	COLOR(white)(GRID([[-18,3], [-34, 1], [0.5]])),
	COLOR(orange)(GRID([[-14,1], [-34, 1], [0.5]])),
	COLOR(yellow)(GRID([[-15,1], [-34, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-30,2], [-34, 1], [0.5]]))
	]);

var row36 = STRUCT([COLOR(black)(GRID([[-27,1,-4,1], [-35, 1], [0.5]])),
	COLOR(brown)(GRID([[-13,1,-4,4,-3,1], [-35, 1], [0.5]])),
	COLOR(pink)(GRID([[-29,2], [-35, 1], [0.5]])),
	COLOR(orange)(GRID([[-14,2,-6,3], [-35, 1], [0.5]])),
	COLOR(yellow)(GRID([[-16,2], [-35, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-28,1,-2,1], [-35, 1], [0.5]]))
	]);

var row37 = STRUCT([COLOR(black)(GRID([[-26,1,-4,1,-1,1], [-36, 1], [0.5]])),
	COLOR(brown)(GRID([[-14,2,-7,2,-5,1], [-36, 1], [0.5]])),
	COLOR(pink)(GRID([[-27,3], [-36, 1], [0.5]])),
	COLOR(orange)(GRID([[-16,2,-3,1], [-36, 1], [0.5]])),
	COLOR(yellow)(GRID([[-18,3,-1,1], [-36, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-32,1], [-36, 1], [0.5]]))
	]);

var row38 = STRUCT([COLOR(black)(GRID([[-26,1,-6,1], [-37, 1], [0.5]])),
	COLOR(brown)(GRID([[-16,5,-2,1,-4,2,-1,1], [-37, 1], [0.5]])),
	COLOR(pink)(GRID([[-27,1,-2,1,-1,1], [-37, 1], [0.5]])),
	COLOR(yellow)(GRID([[-21,2], [-37, 1], [0.5]]))
	]);

var row39 = STRUCT([COLOR(black)(GRID([[-25,1,-7,1], [-38, 1], [0.5]])),
	COLOR(brown)(GRID([[-21,2,-4,1], [-38, 1], [0.5]])),
	COLOR(pink)(GRID([[-26,1,-1,1,-1,3], [-38, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-29,1], [-38, 1], [0.5]]))
	]);

var row40 = STRUCT([COLOR(black)(GRID([[-24,1,-7,1], [-39, 1], [0.5]])),
	COLOR(brown)(GRID([[-27,1], [-39, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-30,1], [-39, 1], [0.5]])),
	COLOR(pink)(GRID([[-26,1,-1,2,-1,1], [-39, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-25,1], [-39, 1], [0.5]]))
	]);

var row41 = STRUCT([COLOR(black)(GRID([[-23,1,-3,1,-3,1], [-40, 1], [0.5]])),
	COLOR(light_pink)(GRID([[-25,1,-2,2], [-40, 1], [0.5]])),
	COLOR(pink)(GRID([[-24,1,-5,1], [-40, 1], [0.5]])),
	COLOR(dark_pink)(GRID([[-26,1], [-40, 1], [0.5]]))
	]);

var row42 = COLOR(black)(GRID([[-24,3,-1,3], [-41, 1], [0.5]]));

var frame1 = STRUCT([pants,row16, row17, row18, row19, row20, row21, row22, row23, row24, row25, row26,
					row27, row28, row29, row30, row31, row32, row33, row34, row35, row36,
					row37, row38, row39, row40, row41, row42]);

/*FRAME2*/
var black_dots = COLOR(black)(STRUCT([GRID([[-8,1,-1,1,-2,1,-1,4,-1,1,-2,2], [-15, 1], [0.5]]),
						GRID([[-7,2,-2,2,-4,7], [-16, 1], [0.5]]),
						GRID([[-7,1,-1,1,-2,1,-4,1,-5,1], [-17, 1], [0.5]]),
						GRID([[-7,1,-2,1,-1,1,-5,1,-3,1,-1,1], [-18, 1], [0.5]]),
						GRID([[-6,1,-4,1,-6,1,-3,1,-1,1], [-19, 1], [0.5]]),
						GRID([[-6,1,-4,1,-6,1,-3,1,-1,1], [-20, 1], [0.5]]),
						GRID([[-6,1,-5,1,-4,1,-3,1,-1,1], [-21, 1], [0.5]]),
						GRID([[-6,1,-5,2,-3,1,-3,1,-1,1], [-22, 1], [0.5]]),
						GRID([[-7,1,-5,1,-3,1,-1,6], [-23, 1], [0.5]]),
						GRID([[-7,1,-5,1,-2,3,-6,1], [-24, 1], [0.5]]),
						GRID([[-7,1,-5,1,-2,2,-4,1,-3,2], [-25, 1], [0.5]]),
						GRID([[-8,1,-4,1,-1,2,-11,2], [-26, 1], [0.5]]),
						GRID([[-7,3,-2,1,-3,1,-5,1,-7,1], [-27, 1], [0.5]]),
						GRID([[-6,1,-1,1,-1,2,-3,1,-6,1,-7,1], [-28, 1], [0.5]]),
						GRID([[-6,1,-2,1,-12,3,-5,1], [-29, 1], [0.5]]),
						GRID([[-6,1,-3,2,-19,1], [-30, 1], [0.5]]),
						GRID([[-7,2,-17,1,-3,2], [-31, 1], [0.5]]),
						GRID([[-9,3,-8,1,-5,2,-3,1], [-32, 1], [0.5]]),
						GRID([[-27,1,-3,1], [-33, 1], [0.5]]),
						GRID([[-27,1,-1,3], [-34, 1], [0.5]]),
						GRID([[-27,2,-3,1], [-35, 1], [0.5]]),
						GRID([[-26,1,-6,1], [-36, 1], [0.5]]),
						GRID([[-26,1,-6,1], [-37, 1], [0.5]]),
						GRID([[-25,1,-7,1], [-38, 1], [0.5]]),
						GRID([[-25,1,-7,1], [-39, 1], [0.5]]),
						GRID([[-24,1,-2,1,-4,1], [-40, 1], [0.5]]),
						GRID([[-23,1,-2,1,-1,1,-2,1], [-41, 1], [0.5]]),
						GRID([[-24,2,-3,2], [-42, 1], [0.5]])
						]));

var dark_red_dots = COLOR(dark_red)(STRUCT([
						GRID([[-14,1], [-15, 1], [0.5]]),
						GRID([[-13,4], [-16, 1], [0.5]]),
						GRID([[-14,3], [-17, 1], [0.5]]),
						GRID([[-15,3,-5,1], [-18, 1], [0.5]]),
						GRID([[-13,1,-2,2,-5,1], [-19, 1], [0.5]]),
						GRID([[-12,6,-5,1], [-20, 1], [0.5]]),
						GRID([[-13,4,-5,1], [-21, 1], [0.5]]),
						GRID([[-14,3,-5,1], [-22, 1], [0.5]]),
						GRID([[-14,3], [-23, 1], [0.5]]),
						GRID([[-14,2], [-24, 1], [0.5]]),
						GRID([[-15,1], [-25, 1], [0.5]]),
						GRID([[-13,1], [-28, 1], [0.5]])
						]));

var light_red_dots = COLOR(light_red)(STRUCT([
						GRID([[-13,1], [-17, 1], [0.5]]),
						GRID([[-13,2], [-18, 1], [0.5]]),
						GRID([[-12,1,-1,2], [-19, 1], [0.5]]),
						GRID([[-14,1], [-25, 1], [0.5]]),
						GRID([[-14,1], [-26, 1], [0.5]]),
						GRID([[-13,1], [-27, 1], [0.5]]),
						GRID([[-9,1,-2,1], [-28, 1], [0.5]]),
						GRID([[-10,3], [-29, 1], [0.5]])
						]));

var orange_dots = COLOR(orange)(STRUCT([
						GRID([[-13,1], [-30, 1], [0.5]]),
						GRID([[-13,1], [-32, 1], [0.5]]),
						GRID([[-13,2], [-33, 1], [0.5]]),
						GRID([[-14,1], [-34, 1], [0.5]]),
						GRID([[-14,2,-7,2], [-35, 1], [0.5]]),
						GRID([[-16,2,-3,1,-3,1], [-36, 1], [0.5]])
						]));

var yellow_dots = COLOR(yellow)(STRUCT([
						GRID([[-15,1], [-34, 1], [0.5]]),
						GRID([[-16,2], [-35, 1], [0.5]]),
						GRID([[-18,3,-1,1], [-36, 1], [0.5]]),
						GRID([[-21,2], [-37, 1], [0.5]])
						]));

var white_dots = COLOR(white)(STRUCT([
						GRID([[-22,1], [-15, 1], [0.5]]),
						GRID([[-20,2], [-17, 1], [0.5]]),
						GRID([[-20,2], [-18, 1], [0.5]]),
						GRID([[-21,1], [-19, 1], [0.5]]),
						GRID([[-9,1,-11,1], [-26, 1], [0.5]]),
						GRID([[-20,2], [-27, 1], [0.5]]),
						GRID([[-7,1,-15,1], [-30, 1], [0.5]]),
						GRID([[-19,1], [-31, 1], [0.5]]),
						GRID([[-17,5], [-33, 1], [0.5]]),
						GRID([[-18,4], [-34, 1], [0.5]])
						]));

var dark_grey_dots = COLOR(dark_grey)(STRUCT([
						GRID([[-19,1], [-15, 1], [0.5]]),
						GRID([[-9,1], [-16, 1], [0.5]]),
						GRID([[-10,1], [-17, 1], [0.5]]),
						GRID([[-19,2], [-22, 1], [0.5]]),
						GRID([[-18,1], [-23, 1], [0.5]]),
						GRID([[-19,1], [-26, 1], [0.5]]),
						GRID([[-7,1], [-28, 1], [0.5]]),
						GRID([[-8,1], [-29, 1], [0.5]]),
						GRID([[-9,1], [-30, 1], [0.5]]),
						GRID([[-10,2], [-31, 1], [0.5]]),
						GRID([[-30,1], [-32, 1], [0.5]]),
						GRID([[-28,3], [-33, 1], [0.5]]),
						GRID([[-28,1], [-34, 1], [0.5]])
						]));

var light_grey_dots = COLOR(light_grey)(STRUCT([
						GRID([[-21,1], [-15, 1], [0.5]]),
						GRID([[-18,2,-2,1], [-17, 1], [0.5]]),
						GRID([[-19,1], [-18, 1], [0.5]]),
						GRID([[-19,2], [-19, 1], [0.5]]),
						GRID([[-19,3], [-20, 1], [0.5]]),
						GRID([[-18,3], [-21, 1], [0.5]]),
						GRID([[-18,1], [-22, 1], [0.5]]),
						GRID([[-20,1,-1,1], [-26, 1], [0.5]]),
						GRID([[-19,1], [-27, 1], [0.5]]),
						GRID([[-7,1], [-29, 1], [0.5]]),
						GRID([[-8,1], [-30, 1], [0.5]]),
						GRID([[-9,1,-4,1], [-31, 1], [0.5]]),
						GRID([[-15,3,-1,1], [-32, 1], [0.5]]),
						GRID([[-16,1], [-33, 1], [0.5]])
						]));

var light_pink_dots = COLOR(light_pink)(STRUCT([
						GRID([[-8,1], [-18, 1], [0.5]]),
						GRID([[-7,1], [-19, 1], [0.5]]),
						GRID([[-7,1], [-20, 1], [0.5]]),
						GRID([[-7,1], [-21, 1], [0.5]]),
						GRID([[-8,1], [-23, 1], [0.5]]),
						GRID([[-8,2,-12,1], [-24, 1], [0.5]]),
						GRID([[-9,2], [-25, 1], [0.5]]),
						GRID([[-10,1], [-26, 1], [0.5]]),
						GRID([[-19,1], [-29, 1], [0.5]]),
						GRID([[-18,1,-8,1], [-30, 1], [0.5]]),
						GRID([[-22,1,-4,1], [-31, 1], [0.5]]),
						GRID([[-30,1], [-39, 1], [0.5]]),
						GRID([[-28,1], [-40, 1], [0.5]]),
						GRID([[-25,1,-3,2], [-41, 1], [0.5]])
						]));

var pink_dots = COLOR(pink)(STRUCT([
						GRID([[-11,2], [-15, 1], [0.5]]),
						GRID([[-8,1], [-17, 1], [0.5]]),
						GRID([[-9,1], [-18, 1], [0.5]]),
						GRID([[-8,2], [-19, 1], [0.5]]),
						GRID([[-8,3], [-20, 1], [0.5]]),
						GRID([[-8,1], [-21, 1], [0.5]]),
						GRID([[-7,4], [-22, 1], [0.5]]),
						GRID([[-9,3], [-23, 1], [0.5]]),
						GRID([[-10,2,-7,3], [-24, 1], [0.5]]),
						GRID([[-8,1,-2,1,-6,1], [-25, 1], [0.5]]),
						GRID([[-17,1,-8,1], [-26, 1], [0.5]]),
						GRID([[-17,1,-7,3], [-27, 1], [0.5]]),
						GRID([[-17,1,-2,2,-3,2,-1,1], [-28, 1], [0.5]]),
						GRID([[-15,1,-1,2,-1,1,-4,1,-1,2], [-29, 1], [0.5]]),
						GRID([[-15,1,-1,1,-2,3,-5,2], [-30, 1], [0.5]]),
						GRID([[-21,1], [-31, 1], [0.5]]),
						GRID([[-28,4], [-36, 1], [0.5]]),
						GRID([[-27,2,-3,1], [-37, 1], [0.5]]),
						GRID([[-27,1,-2,1,-1,1], [-38, 1], [0.5]]),
						GRID([[-26,1,-1,1,-2,2], [-39, 1], [0.5]]),
						GRID([[-25,2,-2,1,-1,1], [-40, 1], [0.5]]),
						GRID([[-24,1], [-41, 1], [0.5]]),
						]));

var dark_pink_dots = COLOR(dark_pink)(STRUCT([
						GRID([[-10,1], [-19, 1], [0.5]]),
						GRID([[-9,3], [-21, 1], [0.5]]),
						GRID([[-11,1], [-22, 1], [0.5]]),
						GRID([[-12,1], [-23, 1], [0.5]]),
						GRID([[-12,1], [-24, 1], [0.5]]),
						GRID([[-12,1,-6,1,-5,1], [-25, 1], [0.5]]),
						GRID([[-11,2,-11,2,-1,1], [-26, 1], [0.5]]),
						GRID([[-10,2,-3,1,-8,1,-3,2], [-27, 1], [0.5]]),
						GRID([[-16,1,-1,2,-4,1,-2,1,-1,1], [-28, 1], [0.5]]),
						GRID([[-16,1,-4,1,-4,1,-2,1], [-29, 1], [0.5]]),
						GRID([[-19,1,-5,2,-3,1], [-30, 1], [0.5]]),
						GRID([[-28,2], [-31, 1], [0.5]]),
						GRID([[-21,1], [-32, 1], [0.5]]),
						GRID([[-29,3], [-35, 1], [0.5]]),
						GRID([[-27,1,-4,1], [-36, 1], [0.5]]),
						GRID([[-26,1], [-38, 1], [0.5]])
						]));

var brown_dots = COLOR(brown)(STRUCT([
						GRID([[-9,1], [-15, 1], [0.5]]),
						GRID([[-10,1], [-16, 1], [0.5]]),
						GRID([[-11,1], [-17, 1], [0.5]]),
						GRID([[-11,1], [-18, 1], [0.5]]),
						GRID([[-23,2], [-24, 1], [0.5]]),
						GRID([[-20,2,-1,2,], [-25, 1], [0.5]]),
						GRID([[-18,1,-4,1], [-26, 1], [0.5]]),
						GRID([[-14,1,-3,1,-4,1], [-27, 1], [0.5]]),
						GRID([[-14,1,-8,1], [-28, 1], [0.5]]),
						GRID([[-13,2], [-29, 1], [0.5]]),
						GRID([[-12,1,-1,1,-1,1,-7,1], [-30, 1], [0.5]]),
						GRID([[-12,2,-1,4,-1,1,-2,1,-1,1], [-31, 1], [0.5]]),
						GRID([[-12,1,-1,1,-3,1,-3,1,-5,2], [-32, 1], [0.5]]),
						GRID([[-12,1,-2,1,-6,1], [-33, 1], [0.5]]),
						GRID([[-13,1,-2,2,-4,3], [-34, 1], [0.5]]),
						GRID([[-13,1,-4,5,-2,1], [-35, 1], [0.5]]),					
						GRID([[-14,2,-7,2], [-36, 1], [0.5]]),						
						GRID([[-16,5,-2,1,-1,1,-3,3], [-37, 1], [0.5]]),
						GRID([[-21,2,-5,2,-1,1], [-38, 1], [0.5]]),
						GRID([[-27,1,-1,1], [-39, 1], [0.5]]),
						GRID([[-23,1,-6,1], [-40, 1], [0.5]]),
						]));

var frame2 = STRUCT([pants,black_dots,dark_red_dots,light_red_dots,orange_dots,
					yellow_dots,white_dots,dark_grey_dots,light_grey_dots,
					light_pink_dots,pink_dots,dark_pink_dots,brown_dots]);

/*FRAME3*/
var black_dots = COLOR(black)(STRUCT([
						GRID([[-8,1,-1,1,-2,1,-2,3,-1,1,-2,2], [-15, 1], [0.5]]),
						GRID([[-7,2,-2,2,-4,7], [-16, 1], [0.5]]),
						GRID([[-6,1,-2,1,-2,1,-5,1,-3,1,-1,1], [-17, 1], [0.5]]),
						GRID([[-5,1,-4,2,-6,1,-3,1,-1,1], [-18, 1], [0.5]]),
						GRID([[-4,1,-5,1,-6,1,-3,1,-1,1], [-19, 1], [0.5]]),
						GRID([[-4,1,-5,3,-4,1,-3,1,-1,1], [-20, 1], [0.5]]),
						GRID([[-5,1,-5,3,-3,1,-2,4], [-21, 1], [0.5]]),
						GRID([[-5,1,-6,2,-2,1,-2,1], [-22, 1], [0.5]]),
						GRID([[-6,1,-6,1,-2,1,-1,1,-2,4], [-23, 1], [0.5]]),
						GRID([[-7,1,-5,1,-2,2,-1,1,-5,3], [-24, 1], [0.5]]),
						GRID([[-8,1,-4,1,-2,1,-2,3,-6,2], [-25, 1], [0.5]]),
						GRID([[-7,3,-2,1,-3,1,-1,4,-8,1], [-26, 1], [0.5]]),
						GRID([[-6,1,-1,1,-1,2,-4,1,-5,1,-7,1], [-27, 1], [0.5]]),
						GRID([[-6,1,-1,1,-6,1,-6,1,-8,1], [-28, 1], [0.5]]),
						GRID([[-6,1,-2,3,-10,4,-5,1], [-29, 1], [0.5]]),
						GRID([[-7,1,-18,1,-2,3], [-30, 1], [0.5]]),
						GRID([[-8,3,-15,1,-1,1,-2,1], [-31, 1], [0.5]]),
						GRID([[-11,1,-8,1,-6,1,-3,1], [-32, 1], [0.5]]),
						GRID([[-27,1,-1,3], [-33, 1], [0.5]]),
						GRID([[-27,2,-3,1], [-34, 1], [0.5]]),
						GRID([[-27,1,-5,1], [-35, 1], [0.5]]),
						GRID([[-26,1,-4,1,-1,1], [-36, 1], [0.5]]),
						GRID([[-26,1,-6,1], [-37, 1], [0.5]]),
						GRID([[-25,1,-7,1], [-38, 1], [0.5]]),
						GRID([[-24,1,-7,1], [-39, 1], [0.5]]),
						GRID([[-23,1,-2,2,-2,2], [-40, 1], [0.5]]),
						GRID([[-24,2,-2,2], [-41, 1], [0.5]])
						]));

var dark_red_dots = COLOR(dark_red)(STRUCT([
						GRID([[-14,2], [-15, 1], [0.5]]),
						GRID([[-14,3], [-16, 1], [0.5]]),
						GRID([[-16,2,-5,1], [-17, 1], [0.5]]),
						GRID([[-14,2,-1,1], [-18, 1], [0.5]]),			
						GRID([[-11,6,-5,1], [-19, 1], [0.5]]),
						GRID([[-13,4,-5,1], [-20, 1], [0.5]]),
						GRID([[-14,3], [-21, 1], [0.5]]),
						GRID([[-14,2], [-22, 1], [0.5]]),
						GRID([[-14,1], [-23, 1], [0.5]]),
						GRID([[-15,1], [-24, 1], [0.5]]),			
						GRID([[-9,1,-3,1], [-27, 1], [0.5]]),
						GRID([[-12,1], [-28, 1], [0.5]])
						]));

var light_red_dots = COLOR(light_red)(STRUCT([
						GRID([[-13,1], [-16, 1], [0.5]]),
						GRID([[-13,3], [-17, 1], [0.5]]),
						GRID([[-12,2,-2,1,-6,1], [-18, 1], [0.5]]),
						GRID([[-15,1], [-23, 1], [0.5]]),
						GRID([[-14,1], [-24, 1], [0.5]]),
						GRID([[-14,1], [-25, 1], [0.5]]),
						GRID([[-13,1], [-26, 1], [0.5]]),
						GRID([[-12,1], [-27, 1], [0.5]]),
						GRID([[-9,3], [-28, 1], [0.5]])
						]));


var orange_dots = COLOR(orange)(STRUCT([
						GRID([[-13,1], [-29, 1], [0.5]]),
						GRID([[-13,1], [-30, 1], [0.5]]),
						GRID([[-13,1], [-32, 1], [0.5]]),
						GRID([[-13,2], [-33, 1], [0.5]]),
						GRID([[-14,1,-8,1], [-34, 1], [0.5]]),
						GRID([[-14,2,-6,2], [-35, 1], [0.5]]),
						GRID([[-16,2,-3,1], [-36, 1], [0.5]])
						]));

var yellow_dots = COLOR(yellow)(STRUCT([
						GRID([[-15,1], [-34, 1], [0.5]]),
						GRID([[-16,2], [-35, 1], [0.5]]),
						GRID([[-18,3,-1,1], [-36, 1], [0.5]]),
						GRID([[-21,2], [-37, 1], [0.5]])
						]));

var white_dots = COLOR(white)(STRUCT([
						GRID([[-22,1], [-15, 1], [0.5]]),
						GRID([[-20,1], [-17, 1], [0.5]]),
						GRID([[-20,2], [-18, 1], [0.5]]),
						GRID([[-21,2], [-24, 1], [0.5]]),
						GRID([[-9,1], [-25, 1], [0.5]]),
						GRID([[-20,2], [-27, 1], [0.5]]),
						GRID([[-8,1,-14,1], [-30, 1], [0.5]]),
						GRID([[-19,1], [-31, 1], [0.5]]),
						GRID([[-17,5], [-33, 1], [0.5]]),
						GRID([[-18,3], [-34, 1], [0.5]])
						]));

var dark_grey_dots = COLOR(dark_grey)(STRUCT([
						GRID([[-19,1], [-15, 1], [0.5]]),
						GRID([[-9,1], [-16, 1], [0.5]]),
						GRID([[-10,2,-9,1], [-17, 1], [0.5]]),
						GRID([[-19,2], [-20, 1], [0.5]]),
						GRID([[-18,2], [-21, 1], [0.5]]),
						GRID([[-17,2], [-22, 1], [0.5]]),
						GRID([[-17,1], [-23, 1], [0.5]]),
						GRID([[-7,1], [-27, 1], [0.5]]),
						GRID([[-11,1], [-30, 1], [0.5]]),
						GRID([[-11,1], [-31, 1], [0.5]]),
						GRID([[-28,2], [-32, 1], [0.5]]),
						GRID([[-28,1], [-33, 1], [0.5]])
						]));

var light_grey_dots = COLOR(light_grey)(STRUCT([
						GRID([[-21,1], [-15, 1], [0.5]]),
						GRID([[-19,1], [-17, 1], [0.5]]),
						GRID([[-19,1], [-18, 1], [0.5]]),
						GRID([[-18,3], [-19, 1], [0.5]]),
						GRID([[-18,1], [-20, 1], [0.5]]),						
						GRID([[-20,1], [-24, 1], [0.5]]),
						GRID([[-19,1], [-27, 1], [0.5]]),
						GRID([[-7,1], [-28, 1], [0.5]]),
						GRID([[-7,2], [-29, 1], [0.5]]),
						GRID([[-9,2], [-30, 1], [0.5]]),
						GRID([[-14,1], [-31, 1], [0.5]]),
						GRID([[-15,3,-1,1], [-32, 1], [0.5]]),
						GRID([[-16,1], [-33, 1], [0.5]])
						]));

var light_pink_dots = COLOR(light_pink)(STRUCT([
						GRID([[-8,1], [-18, 1], [0.5]]),
						GRID([[-7,2], [-19, 1], [0.5]]),
						GRID([[-5,1,-1,1], [-20, 1], [0.5]]),
						GRID([[-6,1], [-21, 1], [0.5]]),
						GRID([[-6,1,-16,1], [-22, 1], [0.5]]),
						GRID([[-8,1], [-23, 1], [0.5]]),
						GRID([[-8,3], [-24, 1], [0.5]]),
						GRID([[-10,1], [-25, 1], [0.5]]),						
						GRID([[-19,1], [-29, 1], [0.5]]),
						GRID([[-18,1,-8,1], [-30, 1], [0.5]]),
						GRID([[-22,1,-4,1], [-31, 1], [0.5]]),	
						GRID([[-30,1], [-39, 1], [0.5]]),
						GRID([[-25,1,-2,2], [-40, 1], [0.5]])
						]));

var pink_dots = COLOR(pink)(STRUCT([
						GRID([[-11,2], [-15, 1], [0.5]]),
						GRID([[-7,2], [-17, 1], [0.5]]),
						GRID([[-6,2,-1,1], [-18, 1], [0.5]]),
						GRID([[-5,2,-2,1], [-19, 1], [0.5]]),
						GRID([[-6,1], [-20, 1], [0.5]]),
						GRID([[-7,2], [-21, 1], [0.5]]),
						GRID([[-7,4,-9,3], [-22, 1], [0.5]]),
						GRID([[-7,1,-1,3,-7,1], [-23, 1], [0.5]]),
						GRID([[-11,1,-6,1], [-24, 1], [0.5]]),
						GRID([[-11,1,-6,1], [-25, 1], [0.5]]),
						GRID([[-17,1,-7,3], [-26, 1], [0.5]]),
						GRID([[-17,1,-6,3], [-27, 1], [0.5]]),
						GRID([[-17,1,-2,2,-3,1,-1,3], [-28, 1], [0.5]]),
						GRID([[-15,1,-1,2,-1,1,-6,3], [-29, 1], [0.5]]),
						GRID([[-15,1,-1,1,-2,3,-5,1], [-30, 1], [0.5]]),
						GRID([[-21,1], [-31, 1], [0.5]]),
						GRID([[-28,3], [-35, 1], [0.5]]),
						GRID([[-28,1], [-36, 1], [0.5]]),
						GRID([[-27,1,-2,1,-1,1], [-37, 1], [0.5]]),
						GRID([[-26,1,-1,1,-1,3], [-38, 1], [0.5]]),
						GRID([[-25,2,-1,1,-2,1], [-39, 1], [0.5]]),
						GRID([[-24,1], [-40, 1], [0.5]])
						]));

var dark_pink_dots = COLOR(dark_pink)(STRUCT([
						GRID([[-8,2], [-20, 1], [0.5]]),
						GRID([[-9,2], [-21, 1], [0.5]]),
						GRID([[-11,1], [-22, 1], [0.5]]),
						GRID([[-12,1,-7,1], [-23, 1], [0.5]]),
						GRID([[-12,1], [-24, 1], [0.5]]),
						GRID([[-12,1,-4,1,-6,4], [-25, 1], [0.5]]),
						GRID([[-10,2,-3,1,-7,2,-3,2], [-26, 1], [0.5]]),
						GRID([[-15,1,-7,1,-3,3], [-27, 1], [0.5]]),
						GRID([[-16,1,-1,2,-4,1,-1,1,-3,1], [-28, 1], [0.5]]),
						GRID([[-16,1,-4,1,-4,1,-3,1], [-29, 1], [0.5]]),
						GRID([[-19,1], [-30, 1], [0.5]]),					
						GRID([[-21,1], [-32, 1], [0.5]]),
						GRID([[-29,3], [-34, 1], [0.5]]),
						GRID([[-31,2], [-35, 1], [0.5]]),
						GRID([[-27,1,-4,1], [-36, 1], [0.5]]),
						GRID([[-29,1], [-37, 1], [0.5]]),
						GRID([[-29,1], [-38, 1], [0.5]]),
						GRID([[-29,1], [-39, 1], [0.5]])
						]));

var brown_dots = COLOR(brown)(STRUCT([
						GRID([[-9,1], [-15, 1], [0.5]]),
						GRID([[-10,1], [-16, 1], [0.5]]),

						GRID([[-24,1], [-22, 1], [0.5]]),

						GRID([[-23,2], [-24, 1], [0.5]]),

						GRID([[-15,1,-6,2], [-25, 1], [0.5]]),

						GRID([[-14,1,-7,1], [-26, 1], [0.5]]),

						GRID([[-14,1,-3,1], [-27, 1], [0.5]]),

						GRID([[-13,2,-8,1], [-28, 1], [0.5]]),

						GRID([[-12,1,-1,1], [-29, 1], [0.5]]),
						GRID([[-12,1,-1,1,-1,1,-7,1], [-30, 1], [0.5]]),
						GRID([[-12,2,-1,4,-1,1,-2,1,-5,2], [-31, 1], [0.5]]),

						GRID([[-12,1,-1,1,-3,1,-3,1,-7,1], [-32, 1], [0.5]]),
						
						GRID([[-12,1,-2,1,-6,2], [-33, 1], [0.5]]),
						GRID([[-13,1,-2,2,-3,2,-1,1], [-34, 1], [0.5]]),
						GRID([[-13,1,-4,4,-2,1], [-35, 1], [0.5]]),
						
						GRID([[-14,2,-7,1,-5,2], [-36, 1], [0.5]]),
						GRID([[-16,5,-2,1,-4,1,-2,1], [-37, 1], [0.5]]),
						GRID([[-21,2,-4,1], [-38, 1], [0.5]]),
						GRID([[-27,1], [-39, 1], [0.5]])
						]));

var frame3 = STRUCT([pants,black_dots,dark_red_dots,light_red_dots,orange_dots,yellow_dots,
					white_dots,dark_grey_dots,light_grey_dots,light_pink_dots,pink_dots,
					dark_pink_dots,brown_dots
	]);

DRAW(frame1);
HIDE(frame1);
DRAW(frame2);
HIDE(frame2);
DRAW(frame3);
HIDE(frame3);

function Anim1() {
	
	frame1.show();

	setTimeout(function () {
		frame1.hide();
		frame2.show();

		setTimeout(function () {
			frame2.hide();
			frame1.show();

			setTimeout(function () {
			frame1.hide();
			frame3.show();

				setTimeout(function () {
					frame3.hide();
					frame1.show();
				}, 150);
			}, 150);
		}, 150); 
	}, 150);    	 	
}

function Anim() {
	setInterval(function () {
		Anim1();
		}, 600);
}

Anim1();
Anim();