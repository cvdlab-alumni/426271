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

domain=GRID([36]);
domain2D=GRID([32,32]);

#Modello il paralume
def lamp() :
	#
	point1 = [[5.4, 5.12, 0], [4.36, 5.12, 0], [4.36, 4.04, 0], [5.4, 4.04, 0]];
	#
	c1 = BEZIER(S1)(point1);
	#
	curve1 = MAP(c1)(domain);
	#
	point2 = [[5.4, 5.12, 3], [4.36, 5.12, 3], [4.36, 4.04, 3], [5.4, 4.04, 3]];
	#
	c2 = BEZIER(S1)(point2);
	#
	curve2 = MAP(c2)(domain);
	#
	point3 = [[5.4, 5.12, 3], [6.62, 5.06, 3], [5.92, 2.95, 3], [5.71, 2.56, 3]];
	#
	c3 = BEZIER(S1)(point3);
	#
	curve3 = MAP(c3)(domain);
	#
	point4 = [[5.4, 5.12, 0], [6.62, 5.06, 0.3], [5.92, 2.95, 1.5], [5.71, 2.56, 2.8]];
	#
	c4 = BEZIER(S1)(point4);
	#
	curve4 = MAP(c4)(domain);
	#
	surface1 = MAP(BEZIER(S2)([c1,c2]))(domain2D);
	#
	surface2 = MAP(BEZIER(S2)([c3,c4]))(domain2D);
	#
	point5 = [[5.4, 5.12, 0], [6.44, 5.12, 0], [6.44, 4.04, 0], [5.4, 4.04, 0]];
	#
	c5 = BEZIER(S1)(point5);
	#
	curve5 = MAP(c5)(domain);
	#
	point6 = [[5.4, 5.12, 3], [6.44, 5.12, 3], [6.44, 4.04, 3], [5.4, 4.04, 3]];
	#
	c6 = BEZIER(S1)(point6);
	#
	curve6 = MAP(c6)(domain);
	#
	point7 = [[5.4, 5.12, 3], [4.18, 5.06, 3], [5.5, 2.95, 3], [5.71, 2.56, 3]];
	#
	c7 = BEZIER(S1)(point7);
	#
	curve7 = MAP(c7)(domain);
	#
	point8 = [[5.4, 5.12, 0], [4.18, 5.06, 0.3], [5.5, 2.95, 1.5], [5.71, 2.56, 2.8]];
	#
	c8 = BEZIER(S1)(point8);
	#
	curve8 = MAP(c8)(domain);
	#
	surface3 = MAP(BEZIER(S2)([c5,c6]))(domain2D);
	#
	surface4 = MAP(BEZIER(S2)([c7,c8]))(domain2D);
	#
	fhl = STRUCT([surface1,surface2]);
	#
	n_surface4 = T([2,3])([9.16,3])(R([2,3])(PI)(surface4));
	#
	shl = T([1,2,3])([-0.5,-0.3, 0.7])(STRUCT([surface3,n_surface4]));
	#
	l = T([1,2,3])([1.7,-3.4,1])(R([1,3])(PI/4)(STRUCT([fhl, shl])));
	#
	return l;


#Modello il piedistallo
def pedestal() :
	#
	point1 = [[0.7, 0, 0], [1, 1, 0]];
	#
	c1 = BEZIER(S1)(point1);
	#
	curve1 = MAP(c1)(domain);
	#
	point2 = [[0, 0.7, 0], [1, 1, 0]];
	#
	c2 = BEZIER(S1)(point2);
	#
	curve2 = MAP(c2)(domain);
	#
	point3 = [[0, -0.7, 0], [-1, -1, 0]];
	#
	c3 = BEZIER(S1)(point3);
	#
	curve3 = MAP(c3)(domain);
	#
	point4 = [[-0.7, 0, 0], [-1, -1, 0]];
	#
	c4 = BEZIER(S1)(point4);
	#
	curve4 = MAP(c4)(domain);
	#	
	surface1 = MAP(BEZIER(S2)([c1,c3]))(domain2D);
	#
	surface2 = MAP(BEZIER(S2)([c2,c4]))(domain2D);
	#
	surface3 = STRUCT([surface1,surface2]);
	#
	surfaces = STRUCT([surface3, R([1,2])(PI/2)(surface3)]);
	#
	point1_t = [[0.7, 0, 0.2], [1, 1, 0.2]];
	#
	c1_t = BEZIER(S1)(point1_t);
	#
	curve1_t = MAP(c1_t)(domain);
	#
	point2_t = [[0, 0.7, 0.2], [1, 1, 0.2]];
	#
	c2_t = BEZIER(S1)(point2_t);
	#
	curve2_t = MAP(c2_t)(domain);
	#
	surface4 = MAP(BEZIER(S2)([c1,c1_t]))(domain2D);
	#
	surface5 = MAP(BEZIER(S2)([c2,c2_t]))(domain2D);
	#
	s = STRUCT([surface4,surface5]);
	#
	vertical_surfaces = STRUCT([s,
								R([1,2])(PI/2)(s),
								R([1,2])(PI)(s),
								R([1,2])(-PI/2)(s)]);
	#
	ped = T([1,2])([1,1])(STRUCT([surfaces, T([3])([0.2])(surfaces), vertical_surfaces]));
	#
	return ped;

model = STRUCT([lamp(), pedestal()]);

VIEW(model);