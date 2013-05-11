#-----------------use %paste to try--------------
from pyplasm import *
import scipy
from scipy import *

#---------------------------------------------------------Col Mar
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
#------------------------------------------------------------------
#Exercise 1

domain = GRID([20]);

def lat_lines():
    points1 = [[4.25, 1.56], [5.69, 1.81], [7.02, 1.71], [8.22, 1.79]];
    c1 = BEZIER(S1)(points1);
    curve1 = MAP(c1)(domain);
    #
    points2 = [[8.22, 1.79], [8.5, 1.85], [8.52, 1.84], [8.78, 1.91]];
    c2 = BEZIER(S1)(points2);
    curve2 = MAP(c2)(domain);
    #
    points3 = [[8.78, 1.91], [9.46, 1.93], [10.35, 1.88], [10.73, 1.79]];
    c3 = BEZIER(S1)(points3);
    curve3 = MAP(c3)(domain);
    #
    points4 = [[4.25, 1.46], [4.33, 1.56], [7.09, 1.5], [8.56, 1.56]];
    c4 = BEZIER(S1)(points4);
    curve4 = MAP(c4)(domain);
    #
    points5 = [[8.56, 1.56], [9.05, 1.8], [10.03, 1.62], [10.76, 1.65]];
    c5 = BEZIER(S1)(points5);
    curve5 = MAP(c5)(domain);
    #
    points6 = [[4.01, 1.6], [4.32, 1.8], [5.16, 1.81], [6.02, 1.84]];
    c6 = BEZIER(S1)(points6);
    curve6 = MAP(c6)(domain);
    #
    points7 = [[6.02, 1.84], [6.48, 2.06], [6.82, 2.21], [7.1, 2.33]];
    c7 = BEZIER(S1)(points7);
    curve7 = MAP(c7)(domain);
    #
    points8 = [[7.1, 2.33], [8.5, 2.39], [8.95, 2.44], [9.74, 1.96]];
    c8 = BEZIER(S1)(points8);
    curve8 = MAP(c8)(domain);
    #
    points9 = [[9.74, 1.96], [10.2, 1.89], [10.41, 1.93], [10.8, 1.82]];
    c9 = BEZIER(S1)(points9);
    curve9 = MAP(c9)(domain);
    #
    points10 = [[4.01, 1.59], [4.1, 1.58], [4.16, 1.57], [4.25, 1.56]];
    c10 = BEZIER(S1)(points10);
    curve10 = MAP(c10)(domain);
    #
    points11 = [[4.25, 1.56], [4.2, 1.44], [4.39, 1.25], [3.99, 1.27]];
    c11 = BEZIER(S1)(points11);
    curve11 = MAP(c11)(domain);
    #
    points12 = [[3.99, 1.27], [4.09, 0.81], [3.95, 1.06], [4.34, 0.79]];
    c12 = BEZIER(S1)(points12);
    curve12 = MAP(c12)(domain);
    #
    points13 = [[4.34, 0.79], [4.52, 0.83], [4.48, 0.82], [4.76, 0.79]];
    c13 = BEZIER(S1)(points13);
    curve13 = MAP(c13)(domain);
    #
    points14 = [[4.76, 0.79], [4.59, 1.73], [6.06, 1.7], [5.93, 0.72]];
    c14 = BEZIER(S1)(points14);
    curve14 = MAP(c14)(domain);
    #
    points15 = [[5.93, 0.72], [6.77, 0.73], [8.21, 0.73], [8.86, 0.76]];
    c15 = BEZIER(S1)(points15);
    curve15 = MAP(c15)(domain);
    #
    points16 = [[8.86, 0.76], [8.68, 1.74], [9.95, 1.71], [10.1, 0.88]];
    c16 = BEZIER(S1)(points16);
    curve16 = MAP(c16)(domain);
    #
    points17 = [[10.1, 0.87], [10.45, 0.96], [10.54, 0.97], [10.8, 1.04]];
    c17 = BEZIER(S1)(points17);
    curve17 = MAP(c17)(domain);
    #
    points18 = [[10.8, 1.04], [10.79, 1.06], [10.88, 1.2], [10.93, 1.43]];
    c18 = BEZIER(S1)(points18);
    curve18 = MAP(c18)(domain);
    #
    points19 = [[10.73, 1.79], [10.81, 1.56], [10.67, 1.53], [10.93, 1.43]];
    c19 = BEZIER(S1)(points19);
    curve19 = MAP(c19)(domain);
    #
    points20 = [[10.73, 1.79], [10.8, 1.82]];
    c20 = BEZIER(S1)(points20);
    curve20 = MAP(c20)(domain);
    #
    points21 = [[6.34, 1.79], [6.76, 2.11], [7.22, 2.21], [6.95, 2.26]];
    c21 = BEZIER(S1)(points21);
    curve21 = MAP(c21)(domain);
    #
    points22 = [[6.28, 0.93], [6.22, 1.4], [6.18, 1.47], [6.34, 1.79]];
    c22 = BEZIER(S1)(points22);
    curve22 = MAP(c22)(domain);
    #
    points23 = [[8.13, 0.93], [8.22, 1.37], [8.33, 1.42], [8.12, 2.21]];
    c23 = BEZIER(S1)(points23);
    curve23 = MAP(c23)(domain);
    #
    points24 = [[6.28, 0.93],[8.13, 0.93]];
    c24 = BEZIER(S1)(points24);
    curve24 = MAP(c24)(domain);
    #
    points25 = [[6.02, 1.84], [6.32, 1.79], [8.45, 1.73], [8.74, 1.95]];
    c25 = BEZIER(S1)(points25);
    curve25 = MAP(c25)(domain);
    #
    points26 = [[6.54, 1.80], [7.3, 2.48], [8.64, 2.25], [8.74, 1.95]];
    c26 = BEZIER(S1)(points26);
    curve26 = MAP(c26)(domain);
    #
    points27 = [[9.11, 2.26], [9.08, 2.19], [9.51, 2.05], [9.71, 1.95]];
    c27 = BEZIER(S1)(points27);
    curve27 = MAP(c27)(domain);
    #
    points28 = [[4.16, 1.67], [4.51, 1.69], [4.47, 0.89], [4.75, 1]];
    c28 = BEZIER(S1)(points28);
    curve28 = MAP(c28)(domain);
    #
    curves = STRUCT([curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10,curve11,
        curve12,curve13,curve14,curve15,curve16,curve17,curve18,curve19,curve20,curve21,
        curve22, curve23, curve24, curve25,curve26,curve27,curve28]);
    return curves;

lateral = R([2,3])(PI/2)(lat_lines());

def roof_lines():
    points1 = [[4.2, 5.63], [3.87, 4.22], [3.86, 4.56], [4.19, 3.19]];
    c1 = BEZIER(S1)(points1);
    curve1 = MAP(c1)(domain);
    #
    points2 = [[4.2, 5.63], [4.75, 5.88], [9.94, 5.88], [10.79, 5.68]];
    c2 = BEZIER(S1)(points2);
    curve2 = MAP(c2)(domain);
    #
    points3 = [[4.19, 3.19], [4.77, 2.93], [9.97, 2.92], [10.79, 3.14]];
    c3 = BEZIER(S1)(points3);
    curve3 = MAP(c3)(domain);
    #
    points4 = [[10.79, 5.69], [10.98, 5.29], [10.95, 3.49], [10.79, 3.14]];
    c4 = BEZIER(S1)(points4);
    curve4 = MAP(c4)(domain);
    #
    points5 = [[4.37, 5.68], [4.07, 4.58], [4.09, 4.09], [4.39, 3.11]];
    c5 = BEZIER(S1)(points5);
    curve5 = MAP(c5)(domain);
    #
    points6 = [[4.22, 5.58], [5.33, 5.63], [9.25, 5.79], [10.84, 5.51]];
    c6 = BEZIER(S1)(points6);
    curve6 = MAP(c6)(domain);
    #
    points7 = [[4.18, 3.24], [5.93, 3.18], [9.19, 3.05], [10.83, 3.3]];
    c7 = BEZIER(S1)(points7);
    curve7 = MAP(c7)(domain);
    #
    points8 = [[6.48, 5.65], [5.75, 5.54], [5.76, 3.23], [6.48, 3.18]];
    c8 = BEZIER(S1)(points8);
    curve8 = MAP(c8)(domain);
    #
    points9 = [[9.32, 5.64], [9.94, 5.61], [9.97, 3.21], [9.32, 3.2]];
    c9 = BEZIER(S1)(points9);
    curve9 = MAP(c9)(domain);
    #
    points10 = [[6.49, 5.66], [7.14, 5.37], [8.43, 5.26], [8.81, 5.64]];
    c10 = BEZIER(S1)(points10);
    curve10 = MAP(c10)(domain);
    #
    points11 = [[6.49, 3.18], [7.1, 3.42], [8.35, 3.58], [8.81, 3.19]];
    c11 = BEZIER(S1)(points11);
    curve11 = MAP(c11)(domain);
    #
    points12 = [[8.24, 5.8], [8.19, 5.5], [8.24, 5.67], [8.13, 5.42]];
    c12 = BEZIER(S1)(points12);
    curve12 = MAP(c12)(domain);
    #
    points13 = [[8.12, 3.4], [8.23, 3.12], [8.18, 3.3], [8.23, 3.01]];
    c13 = BEZIER(S1)(points13);
    curve13 = MAP(c13)(domain);
    #
    points14 = [[9.53, 5.49], [9.36, 5.46], [9.16, 5.39], [8.96, 5.25]];
    c14 = BEZIER(S1)(points14);
    curve14 = MAP(c14)(domain);
    #
    points15 = [[9.53, 3.35], [9.3, 3.41], [9.12, 3.47], [8.96, 3.59]];
    c15 = BEZIER(S1)(points15);
    curve15 = MAP(c15)(domain);
    #
    points16 = [[8.96, 5.25], [8.96, 3.59]];
    c16 = BEZIER(S1)(points16);
    curve16 = MAP(c16)(domain);
    #
    points17 = [[6.35, 3.24], [6.65, 3.29], [6.86, 3.37], [7.05, 3.48]];
    c17 = BEZIER(S1)(points17);
    curve17 = MAP(c17)(domain);
    #
    points18 = [[6.35, 5.61], [6.52, 5.5], [6.91, 5.49], [7.05, 5.32]];
    c18 = BEZIER(S1)(points18);
    curve18 = MAP(c18)(domain);
    #
    points19 = [[7.05, 3.48], [6.89, 4.07], [6.9, 4.72], [7.05, 5.32]];
    c19 = BEZIER(S1)(points19);
    curve19 = MAP(c19)(domain);
    #
    points20 = [[5.21, 5.32], [6.51, 5.45], [5.63, 5.46], [6.32, 5.65]];
    c20 = BEZIER(S1)(points20);
    curve20 = MAP(c20)(domain);
    #
    points21 = [[5.21, 3.5], [6.4, 3.41], [5.74, 3.35], [6.32, 3.17]];
    c21 = BEZIER(S1)(points21);
    curve21 = MAP(c21)(domain);
    #
    pol22 = POLYLINE([[5.21, 5.32],[4.94, 4.92],[4.29, 4.88],[4.37, 5.53],[4.23, 4.77],
        [5.1, 4.83], [5.32, 5.17], [6.06, 5.26]]);
    #
    pol23 = POLYLINE([[5.21, 3.5],[4.94, 3.9],[4.29, 3.92],[4.37, 3.3],[4.23, 4.04],
        [5.1, 3.98], [5.32, 3.63], [6.06, 3.55]]);
    #
    curves = STRUCT([curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10,
        curve11,curve12,curve13,curve14,curve15,curve16,curve17,curve18,curve19,curve20,
        curve21,pol22,pol23]);
    return curves;

roof = roof_lines();

def front_lines():
    points1 = [[0.49, 0.84], [0.11, 1.27], [0.16, 1.77], [0.4, 1.91]];
    c1 = BEZIER(S1)(points1);
    curve1 = MAP(c1)(domain);
    #
    points2 = [[2.74, 0.84], [3.02, 1.1], [3.15, 1.67], [2.87, 1.91]];
    c2 = BEZIER(S1)(points2);
    curve2 = MAP(c2)(domain);
    #
    points3 = [[0.61, 2.22], [0.75, 2.42], [2.58, 2.38], [2.64, 2.22]];
    c3 = BEZIER(S1)(points3);
    curve3 = MAP(c3)(domain);
    #
    pol4 = POLYLINE([[0.61, 2.22], [0.4, 1.91]]);
    #
    pol5 = POLYLINE([[2.64, 2.22], [2.87, 1.91]]);
    #
    pol6 = POLYLINE([[0.49, 0.84], [2.74, 0.84]]);
    #
    pol7 = POLYLINE([[0.27, 1.2], [2.96, 1.2]]);
    #
    points8 = [[0.87, 1.2], [0.85, 1.02], [2.39, 1.02], [2.36, 1.2]];
    c8 = BEZIER(S1)(points8);
    curve8 = MAP(c8)(domain);
    #
    points9 = [[0.38, 1.41], [0.32, 1.7], [0.36, 1.65], [0.5, 1.78]];
    c9 = BEZIER(S1)(points9);
    curve9 = MAP(c9)(domain);
    #
    points10 = [[2.9, 1.41], [2.87, 1.7], [2.89, 1.61], [2.76, 1.78]];
    c10 = BEZIER(S1)(points10);
    curve10 = MAP(c10)(domain);
    #
    pol11 = POLYLINE([[0.38, 1.41], [2.9, 1.41]]);
    #
    pol12 = POLYLINE([[0.5, 1.78], [2.76, 1.78]]);
    #
    pol13 = POLYLINE([[2.73, 1.91], [0.52,1.91], [0.72, 2.22], [2.52, 2.22], [2.73, 1.91]]);
    #
    points14 = [[0.39, 1.51], [0.43, 1.38], [0.86, 1.42], [0.66, 1.74]];
    c14 = BEZIER(S1)(points14);
    curve14 = MAP(c14)(domain);
    #
    points15 = [[1.16, 1.75], [1.2, 1.3], [0.7, 1.39], [0.78, 1.74]];
    c15 = BEZIER(S1)(points15);
    curve15 = MAP(c15)(domain);
    #
    points16 = [[2.86, 1.56], [2.83, 1.36], [2.43, 1.42], [2.59, 1.75]];
    c16 = BEZIER(S1)(points16);
    curve16 = MAP(c16)(domain);
    #
    points17 = [[2.47, 1.74], [2.57, 1.37], [1.99, 1.36], [2.08, 1.75]];
    c17 = BEZIER(S1)(points17);
    curve17 = MAP(c17)(domain);
    #
    curves = STRUCT([curve1,curve2,curve3,pol4,pol5,pol6,pol7,curve8,curve9,curve10,
        pol11,pol12,pol13,curve14,curve15,curve16,curve17]);
    return curves;

front = T(2)(2.6)(R([1,2])(PI/2)(R([2,3])(PI/2)(front_lines())));

ex_1 = STRUCT([lateral, roof, front]);

#VIEW(ex_1);

#Exercise 3

domain2D = GRID([20,20]);

def circle_full(r):
        def ball(p):
                a,r = p
                return [r*COS(a), r*SIN(a)]
        dom2D = PROD([INTERVALS(2*PI)(50), INTERVALS(1)(1)])
        return S([1,2])([r,r])(MAP(ball)(dom2D))


def rim():
    points1 = [[0.3, 0.21, -0.3],  [0.3, 2, 0]];
    c1 = BEZIER(S1)(points1);
    curve1 = MAP(c1)(domain);
    #
    points2 = [[-0.3, 0.21, -0.3], [-0.3, 2, 0]];
    c2 = BEZIER(S1)(points2);
    curve2 = MAP(c2)(domain);
    #
    points3 = [[0, 0.25, -0.3], [0, 0.70, 0.5], [0, 1.22, 1.24], [0, 2.1, 0]];
    c3 = BEZIER(S1)(points3);
    curve3 = MAP(c3)(domain);
    #
    points4 = [[0, 0.25, -0.3], [0, 0.70, -0.5], [0, 1.22, -1.24], [0, 2.1, 0]];
    c4 = BEZIER(S1)(points4);
    curve4 = MAP(c4)(domain);
    #
    ray_est = MAP(BEZIER(S2)([c1,c3,c2]))(domain2D);
    #
    ray_int = MAP(BEZIER(S2)([c1,c4,c2]))(domain2D);
    #
    ray = STRUCT([ray_est, ray_int]);
    #
    rays = STRUCT([ray, R([1,2])(PI/2)(ray), R([1,2])(PI)(ray), R([1,2])(-PI/2)(ray)]);
    #
    little_circle = PROD([circle_full(0.3), Q(0.3)]);
    #
    extruded_l_circle = COLOR(BLACK)(T(3)(-0.45)(little_circle));
    #
    extruded_b_circle = PROD([RING([2.05, 2.07])([40,40]), Q(1.3)]);
    #
    extr_b_circle = T(3)(-1.3)(extruded_b_circle)
    #
    curves = STRUCT([rays,extruded_l_circle, extr_b_circle]);
    return curves;

rim = rim();

def pneumatic():
    extruded_b_circle = PROD([RING([2.07,2.5])([40,40]), Q(1.3)]);
    #
    extr_b_circle = COLOR(BLACK)(T(3)(-1.3)(extruded_b_circle));
    #
    return extr_b_circle;

pneumatic = pneumatic();

wheel = STRUCT([rim, pneumatic]);

left_wheel = T(1)(5)(R([2,3])(PI/2)(wheel));

left_wheels = T(1)(5)(STRUCT([left_wheel, T(1)(16)(left_wheel)]))

right_wheels = T([1,2])([36,14])(R([1,2])(PI)(left_wheels));

wheels = T([1,2,3])([4,3,1.5])(S([1,2,3])([0.2,0.2,0.2])(STRUCT([left_wheels, right_wheels])));

VIEW(STRUCT([ex_1,wheels]));

