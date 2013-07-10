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

#Modello le gambe della scrivania
domain=GRID([36]);
domain2D=GRID([16,16]);

def leg() :
	#
	point1 = [[1.94, 0, 4.78], [2.89, 0, 5.86], [1.73, 0, 5.34], [6.71, 0, 5.46]];
	#
	c1 = BEZIER(S1)(point1);
	#
	curve1 = MAP(c1)(domain);
	#
	point2 = [[2.48, 0, 5.08], [2.35, 0, 5.55], [4.13, 0, 5.34], [5.01, 0, 5.39]];
	#
	c2 = BEZIER(S1)(point2);
	#
	curve2 = MAP(c2)(domain);
	#
	point3 = [[2.48, 0, 5.11], [2.57, 0, 5.04], [5.27, 0, 5.3], [5.01, 0, 5.39]];
	#
	c3 = BEZIER(S1)(point3);
	#
	curve3 = MAP(c3)(domain);
	#
	point4 = [[2.44, 0, 4.78], [3.39, 0, 5.24], [6.67, 0, 5.25], [6.71, 0, 5.46]];
	#
	c4 = BEZIER(S1)(point4);
	#
	curve4 = MAP(c4)(domain);
	#
	point5 = [[0.73, 0, 3.14], [0.63, 0, 3.23], [1.88, 0, 4.72], [2.35, 0, 5.28]];
	#
	c5 = BEZIER(S1)(point5);
	#
	curve5 = MAP(c5)(domain);
	#
	point6 = [[0.73, 0, 3.14], [0.89, 0, 3.11], [2, 0, 4.65], [2.69, 0, 4.9]];
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
	distance = 0.2;
	#
	faces = STRUCT([surface1, surface2, surface3]);
	#
	faces_t = T([2])([distance])(faces);
	#
	point1_t = [[1.94, distance, 4.78], [2.89, distance, 5.86], [1.73, distance, 5.34], [6.71, distance, 5.46]];
	#
	c1_t = BEZIER(S1)(point1_t);
	#
	surface4 = MAP(BEZIER(S2)([c1,c1_t]))(domain2D);
	#
	point2_t = [[2.48, distance, 5.08], [2.35, distance, 5.55], [4.13, distance, 5.34], [5.01, distance, 5.39]];
	#
	c2_t = BEZIER(S1)(point2_t);
	#
	surface5 = MAP(BEZIER(S2)([c2,c2_t]))(domain2D);
	#
	point3_t = [[2.48, distance, 5.11], [2.57, distance, 5.04], [5.27, distance, 5.3], [5.01, distance, 5.39]];
	#
	c3_t = BEZIER(S1)(point3_t);
	#
	surface6 = MAP(BEZIER(S2)([c3,c3_t]))(domain2D);
	#
	point4_t = [[2.44, distance, 4.78], [3.39, distance, 5.24], [6.67, distance, 5.25], [6.71, distance, 5.46]];
	#
	c4_t = BEZIER(S1)(point4_t);
	#
	surface7 = MAP(BEZIER(S2)([c4,c4_t]))(domain2D);
	#
	point5_t = [[0.73, distance, 3.14], [0.63, distance, 3.23], [1.88, distance, 4.72], [2.35, distance, 5.28]];
	#
	c5_t = BEZIER(S1)(point5_t);
	#
	surface8 = MAP(BEZIER(S2)([c5,c5_t]))(domain2D);
	#
	point6_t = [[0.73, distance, 3.14], [0.89, distance, 3.11], [2, distance, 4.65], [2.69, distance, 4.9]];
	#
	c6_t = BEZIER(S1)(point6_t);
	#
	surface9 = MAP(BEZIER(S2)([c6,c6_t]))(domain2D);
	#
	surfaces = T([1,3])([-7.21,-3.14])(STRUCT([faces, faces_t, surface4, 
		surface5, surface6, surface7, surface8, surface9]));
	#
	return surfaces;


legs = T([1,2])([6.71,1.7])(STRUCT([R([1,2])(PI/15)(leg()), R([1,2])(-PI/15)(leg())]));

#Modello il tavolo
GRIDN = COMP([INSR(PROD),AA(QUOTE)])

def glass_table() :
	table = GRIDN([[-0.6, 7],[-0.3, 3],[-2.4, 0.05]]);
	return table;


#Modello la cassettiera grande
def big_drawers() :
	drawer = STRUCT([GRIDN([[-5.5, 1.2], [-0.5, 2.3], [2]]),
					GRIDN([[-5.5, 1.2],[-0.4, 0.1],[-0.2, 0.5, -0.1, 0.5, -0.1, 0.5]])]);
	return drawer;

#Modello la cassettiera piccola
def little_drawers() :
	drawer = STRUCT([GRIDN([[-0.05, 1.3], [-0.4, 2.7], [-1.3, 0.1]]),
					GRIDN([[0.05, -1.3, 0.05], [-0.4, 2.8], [-1.3, 0.7]]),
					GRIDN([[-0.05, 1.3], [-3.1, 0.1], [-1.3, 0.7]]),
					GRIDN([[-0.05, 0.1, -1.1, 0.1], [-0.5, 2.7], [-1.4, 0.2]]),
					GRIDN([[-0.05, 1.3], [-0.4, 0.1, -2.5, 0.1], [-1.4, 0.2]])
					]);
	#
	glass_cover = GRIDN([[1.4], [-0.4, 2.5], [-2, 0.1]]);
	#
	model = STRUCT([drawer, glass_cover]);
	#
	return model;

desk = STRUCT([legs, big_drawers(), little_drawers(), glass_table()]);

VIEW(desk);