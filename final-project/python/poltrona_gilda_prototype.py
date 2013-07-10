#---------------use %paste to see the model-------------------- 
from pyplasm import *
import scipy
from scipy import *

#---------------------------------------------------------
def VERTEXTRUDE((V,coords)):
    """
        Utility function to generate the output model vertices in a 
        multiple extrusion of a LAR model.
        V is a list of d-vertices (each given as a list of d coordinates).
        coords is a list of absolute translation parameters to be applied to 
        V in order to generate the output vertices.
        
        Return a new list of (d+1)-vertices.
    """
    return CAT(AA(COMP([AA(AR),DISTR]))(DISTL([V,coords])))

def cumsum(iterable):
    # cumulative addition: list(cumsum(range(4))) => [0, 1, 3, 6]
    iterable = iter(iterable)
    s = iterable.next()
    yield s
    for c in iterable:
        s = s + c
        yield s

def larExtrude(model,pattern):
    V,FV = model
    d = len(FV[0])
    offset = len(V)
    m = len(pattern)
    outcells = []
    for cell in FV:
        # create the indices of vertices in the cell "tube"
        tube = [v + k*offset for k in range(m+1) for v in cell]
        # take groups of d+1 elements, via shifting by one
        rangelimit = len(tube)-d
        cellTube = [tube[k:k+d+1] for k in range(rangelimit)]
        outcells += [scipy.reshape(cellTube,newshape=(m,d,d+1)).tolist()]
    outcells = AA(CAT)(TRANS(outcells))
    outcells = [group for k,group in enumerate(outcells) if pattern[k]>0 ]
    coords = list(cumsum([0]+(AA(ABS)(pattern))))
    outVerts = VERTEXTRUDE((V,coords))
    newModel = outVerts, CAT(outcells)
    return newModel

def GRID(args):
    model = ([[]],[[0]])
    for k,steps in enumerate(args):
        model = larExtrude(model,steps*[1])
    V,cells = model
    verts = AA(list)(scipy.array(V) / AA(float)(args))
    return MKPOL([verts, AA(AA(lambda h:h+1))(cells), None])
#---------------------------------------------------------

#Modello la parte superiore della poltrona
domain=GRID([36]);
domain2D=GRID([16,16]);

fatt = 3;

distance = 2.5;

def upper_chair() :
	#
	point1 = [[fatt*3.79, 0, fatt*2.53], [fatt*3.87, 0, fatt*2.51], [fatt*3.9, 0, fatt*2.44], [fatt*3.96, 0, fatt*2.24]];
	c1 = BEZIER(S1)(point1);
	curve1 = MAP(c1)(domain);
	#
	point2 = [[fatt*3.79, 0, fatt*2.53], [fatt*3.69, 0, fatt*2.5], [fatt*3.8, 0, fatt*2.37], [fatt*3.78, 0, fatt*2.26]];
	c2 = BEZIER(S1)(point2);
	curve2 = MAP(c2)(domain);
	#
	point3 = [[fatt*3.78, 0, fatt*2.26],[fatt*3.78, 0, fatt*2.14],[fatt*4.03, 0, fatt*1.73],[fatt*4.11, 0, fatt*1.48]];
	c3 = BEZIER(S1)(point3);
	curve3 = MAP(c3)(domain);
	#
	point4 = [[fatt*3.96, 0, fatt*2.24], [fatt*4.02, 0, fatt*2.07], [fatt*4.2, 0, fatt*1.94], [fatt*4.25, 0, fatt*1.71]];
	c4 = BEZIER(S1)(point4);
	curve4 = MAP(c4)(domain);
	#
	point5 = [[fatt*4.11, 0, fatt*1.48], [fatt*4.3, 0, fatt*1.53], [fatt*4.09, 0, fatt*1.58], [fatt*4.25, 0, fatt*1.71]];
	c5 = BEZIER(S1)(point5);
	curve5 = MAP(c5)(domain);
	#
	point6 = [[fatt*4.11, 0, fatt*1.48], [fatt*4.09, 0, fatt*1.54], [fatt*4.07, 0, fatt*1.6], [fatt*3.98, 0, fatt*1.79]];
	#
	c6 = BEZIER(S1)(point6);
	#
	curve6 = MAP(c6)(domain);
	#
	surface1 = MAP(BEZIER(S2)([c1,c2]))(domain2D);
	#
	surface2 = MAP(BEZIER(S2)([c3,c4]))(domain2D);
	#
	surface3 = MAP(BEZIER(S2)([c5,c6]))(domain2D);
	#
	faces = STRUCT([surface1, surface2, surface3]);
	#
	faces_t = T([2])([distance])(faces);
	#
	point1_t = [[fatt*3.79, distance, fatt*2.53], [fatt*3.87, distance, fatt*2.51],
				 [fatt*3.9, distance, fatt*2.44], [fatt*3.96, distance, fatt*2.24]];
	#
	c1_t = BEZIER(S1)(point1_t);
	#
	surface4 = MAP(BEZIER(S2)([c1,c1_t]))(domain2D);
	#
	point2_t = [[fatt*3.79, distance, fatt*2.53], [fatt*3.69, distance, fatt*2.5], 
				[fatt*3.8, distance, fatt*2.37], [fatt*3.78, distance, fatt*2.26]];
	#
	c2_t = BEZIER(S1)(point2_t);
	#
	surface5 = MAP(BEZIER(S2)([c2,c2_t]))(domain2D);
	#
	point3_t = [[fatt*3.78, distance, fatt*2.26],[fatt*3.78, distance, fatt*2.14],
					[fatt*4.03, distance, fatt*1.73],[fatt*4.11, distance, fatt*1.48]];
	c3_t = BEZIER(S1)(point3_t);
	surface6 = MAP(BEZIER(S2)([c3,c3_t]))(domain2D);
	#
	point4_t = [[fatt*3.96, distance, fatt*2.24], [fatt*4.02, distance, fatt*2.07],
				[fatt*4.2, distance, fatt*1.94], [fatt*4.25, distance, fatt*1.71]];
	#
	c4_t = BEZIER(S1)(point4_t);
	#
	surface7 = MAP(BEZIER(S2)([c4,c4_t]))(domain2D);
	#
	point5_t = [[fatt*4.11, distance, fatt*1.48], [fatt*4.3, distance, fatt*1.53],
					[fatt*4.09, distance, fatt*1.58], [fatt*4.25, distance, fatt*1.71]];
	#
	c5_t = BEZIER(S1)(point5_t);
	surface8 = MAP(BEZIER(S2)([c5,c5_t]))(domain2D);
	#
	surfaces = STRUCT([faces, faces_t, surface4, 
		surface5, surface6, surface7, surface8]);
	#
	return surfaces;


#Modello la parte inferiore della poltrone
def lower_chair() :
	#
	point1 = [[fatt*4.19, 0, fatt*1.56], [fatt*4.19, 0, fatt*1.8],
					[fatt*4.97, 0, fatt*2], [fatt*5.03, 0, fatt*1.84]];
	#
	c1 = BEZIER(S1)(point1);
	#
	curve1 = MAP(c1)(domain);
	#
	point2 = [[fatt*4.19, 0, fatt*1.56], [fatt*4.49, 0, fatt*1.42],
					[fatt*5.09, 0, fatt*1.7], [fatt*5.03, 0, fatt*1.84]];
	#
	c2 = BEZIER(S1)(point2);
	#
	curve2 = MAP(c2)(domain);
	#
	surface1 = MAP(BEZIER(S2)([c1,c2]))(domain2D);
	#
	faces = STRUCT([surface1]);
	#
	faces_t = T([2])([distance])(faces);
	#
	point1_t = [[fatt*4.19, distance, fatt*1.56], [fatt*4.19, distance, fatt*1.8],
					[fatt*4.97, distance, fatt*2], [fatt*5.03, distance, fatt*1.84]];
	#
	c1_t = BEZIER(S1)(point1_t);
	#
	surface4 = MAP(BEZIER(S2)([c1,c1_t]))(domain2D);
	#
	point2_t = [[fatt*4.19, distance, fatt*1.56], [fatt*4.49, distance, fatt*1.42],
					[fatt*5.09, distance, fatt*1.7], [fatt*5.03, distance, fatt*1.84]];
	#
	c2_t = BEZIER(S1)(point2_t);
	#
	surface5 = MAP(BEZIER(S2)([c2,c2_t]))(domain2D);
	#
	surfaces = STRUCT([faces, faces_t, surface4, surface5]);
	#	
	return surfaces;


d = 0.2;

chair = T([2])([d])(STRUCT([upper_chair(), lower_chair()]));

def pieces1() :
	#
	point1 = [[fatt*4.74, 0, fatt*1.23], [fatt*4.72, 0, fatt*1.15],
				[fatt*4.63, 0, fatt*1.57], [fatt*4.54, 0, fatt*2.05]];
	#
	c1 = BEZIER(S1)(point1);
	#
	curve1 = MAP(c1)(domain);
	#
	point2 = [[fatt*4.74, 0, fatt*1.23], [fatt*4.78, 0, fatt*1.25],
					[fatt*4.67, 0, fatt*1.63], [fatt*4.63, 0, fatt*2.07]];
	#
	c2 = BEZIER(S1)(point2);
	#
	curve2 = MAP(c2)(domain);
	#
	point3 = [[fatt*4.54, 0, fatt*2.05], [fatt*4.63, 0, fatt*2.07]];
	#
	c3 = BEZIER(S1)(point3);
	#
	curve3 = MAP(c3)(domain);
	#
	surface1 = MAP(BEZIER(S2)([c1,c2]))(domain2D);
	#	
	faces = STRUCT([surface1]);
	#
	faces_t = T([2])([d])(faces);
	#
	point1_t = [[fatt*4.74, d, fatt*1.23], [fatt*4.72, d, fatt*1.15],
				[fatt*4.63, d, fatt*1.57], [fatt*4.54, d, fatt*2.05]];
	#
	c1_t = BEZIER(S1)(point1_t);
	#
	surface4 = MAP(BEZIER(S2)([c1,c1_t]))(domain2D);
	#
	point2_t = [[fatt*4.74, d, fatt*1.23], [fatt*4.78, d, fatt*1.25],
					[fatt*4.67, d, fatt*1.63], [fatt*4.63, d, fatt*2.07]];
	#
	c2_t = BEZIER(S1)(point2_t);
	#
	surface5 = MAP(BEZIER(S2)([c2,c2_t]))(domain2D);
	#
	point3_t = [[fatt*4.54, d, fatt*2.05], [fatt*4.63, d, fatt*2.07]];
	#
	c3_t = BEZIER(S1)(point3_t);
	#
	surface6 = MAP(BEZIER(S2)([c3,c3_t]))(domain2D);
	#
	surfaces1 = STRUCT([faces, faces_t, surface4, surface5, surface6]);
	#
	legs = STRUCT([surfaces1, T([2])([distance+d])(surfaces1)]);
	#
	return legs;


def pieces2() :
	#
	point1 = [[fatt*3.68, 0, fatt*1.25], [fatt*4.21, 0, fatt*1.61],
					[fatt*4.23, 0, fatt*1.57], [fatt*4.54, 0, fatt*2.05]];
	#
	c1 = BEZIER(S1)(point1);
	#
	curve1 = MAP(c1)(domain);
	#
	point2 = [[fatt*3.71, 0, fatt*1.22], [fatt*4.46, 0, fatt*1.69],
					[fatt*4.26, 0, fatt*1.43], [fatt*4.54, 0, fatt*2.02]];
	#
	c2 = BEZIER(S1)(point2);
	#
	curve2 = MAP(c2)(domain);
	#
	point3 = [[fatt*3.62, 0, fatt*1.2],[fatt*3.68, 0, fatt*1.25]];
	#
	c3 = BEZIER(S1)(point3);
	#
	curve3 = MAP(c3)(domain);
	#
	point4 = [[fatt*3.62, 0, fatt*1.2],[fatt*3.71, 0, fatt*1.22]];
	#
	c4 = BEZIER(S1)(point4);
	#
	curve4 = MAP(c4)(domain);
	#
	surface1 = MAP(BEZIER(S2)([c1,c2]))(domain2D);	
	#
	surface2 = MAP(BEZIER(S2)([c3,c4]))(domain2D);
	#
	faces = STRUCT([surface1,surface2]);
	#
	faces_t = T([2])([d])(faces);
	#
	point1_t = [[fatt*3.68, d, fatt*1.25], [fatt*4.21, d, fatt*1.61],
					[fatt*4.23, d, fatt*1.57], [fatt*4.54, d, fatt*2.05]];
	#
	c1_t = BEZIER(S1)(point1_t);
	#
	surface4 = MAP(BEZIER(S2)([c1,c1_t]))(domain2D);
	#
	point2_t = [[fatt*3.71, d, fatt*1.22], [fatt*4.46, d, fatt*1.69],
					[fatt*4.26, d, fatt*1.43], [fatt*4.54, d, fatt*2.02]];
	#
	c2_t = BEZIER(S1)(point2_t);
	#
	surface5 = MAP(BEZIER(S2)([c2,c2_t]))(domain2D);
	#
	point3_t = [[fatt*3.62, d, fatt*1.2],[fatt*3.68, d, fatt*1.25]];
	#
	c3_t = BEZIER(S1)(point3_t);
	#
	surface6 = MAP(BEZIER(S2)([c3,c3_t]))(domain2D);
	#
	point4_t = [[fatt*3.62, d, fatt*1.2],[fatt*3.71, d, fatt*1.22]];
	#
	c4_t = BEZIER(S1)(point4_t);
	#
	surface7 = MAP(BEZIER(S2)([c4,c4_t]))(domain2D);
	#
	surfaces1 = STRUCT([faces, faces_t, surface4, surface5,
				surface6, surface7]);
	#
	legs = STRUCT([surfaces1, T([2])([distance+d])(surfaces1)]);
	#
	return legs;


def pieces3() :
	#
	point1 = [[fatt*3.71, 0, fatt*1.33], [fatt*3.99, 0, fatt*2.02],
					[fatt*3.85, 0, fatt*2.08], [fatt*4.85, 0, fatt*2.14]];
	#
	c1 = BEZIER(S1)(point1);
	#
	curve1 = MAP(c1)(domain);
	#
	point2 = [[fatt*3.73, 0, fatt*1.29], [fatt*4.22, 0, fatt*2.24],
					[fatt*3.8, 0, fatt*1.86], [fatt*4.85, 0, fatt*2.14]];
	#
	c2 = BEZIER(S1)(point2);
	#
	curve2 = MAP(c2)(domain);
	#
	point3 = [[fatt*3.62, 0, fatt*1.21],[fatt*3.71, 0, fatt*1.33]];
	#
	c3 = BEZIER(S1)(point3);
	#
	curve3 = MAP(c3)(domain);
	#
	point4 = [[fatt*3.62, 0, fatt*1.21],[fatt*3.73, 0, fatt*1.29]];
	#
	c4 = BEZIER(S1)(point4);
	#
	curve4 = MAP(c4)(domain); 
	#
	surface1 = MAP(BEZIER(S2)([c1,c2]))(domain2D);
	#
	surface2 = MAP(BEZIER(S2)([c3,c4]))(domain2D);
	#
	faces = STRUCT([surface1,surface2]);
	#
	faces_t = T([2])([d])(faces);
	#
	point1_t = [[fatt*3.71, d, fatt*1.33], [fatt*3.99, d, fatt*2.02],
					[fatt*3.85, d, fatt*2.08], [fatt*4.85, d, fatt*2.14]];
	#
	c1_t = BEZIER(S1)(point1_t);
	#
	surface4 = MAP(BEZIER(S2)([c1,c1_t]))(domain2D);
	#
	point2_t = [[fatt*3.73, d, fatt*1.29], [fatt*4.22, d, fatt*2.24],
					[fatt*3.8, d, fatt*1.86], [fatt*4.85, d, fatt*2.14]];
	#
	c2_t = BEZIER(S1)(point2_t);
	#
	surface5 = MAP(BEZIER(S2)([c2,c2_t]))(domain2D);
	#
	point3_t = [[fatt*3.62, d, fatt*1.21],[fatt*3.71, d, fatt*1.33]];
	#
	c3_t = BEZIER(S1)(point3_t);
	#
	surface6 = MAP(BEZIER(S2)([c3,c3_t]))(domain2D);
	#
	point4_t = [[fatt*3.62, d, fatt*1.21],[fatt*3.73, d, fatt*1.29]];
	#
	c4_t = BEZIER(S1)(point4_t);
	#
	surface7 = MAP(BEZIER(S2)([c4,c4_t]))(domain2D); 
	#
	surfaces1 = STRUCT([faces, faces_t, surface4, surface5,
					surface6, surface7]);
	#
	legs = STRUCT([surfaces1, T([2])([distance+d])(surfaces1)]);
	#
	return legs;

model = T([1,3])([-10, -3])(STRUCT([chair, pieces1(), pieces2(), pieces3()]));

VIEW(model);