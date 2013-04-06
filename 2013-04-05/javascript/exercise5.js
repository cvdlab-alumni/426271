//realize stairs
step2D = SIMPLICIAL_COMPLEX([[0,0],[0, 0.56],[0.6, 0.5],[0.6, 0.28]])([[0,1,2,3]])

step3D = EXTRUDE([2])(step2D)

scamb = MAP([S1, S3, S2])(step3D)

ramp = STRUCT(REPLICA(10)([scamb, T([0,2])([0.6, 0.56])])) 

ramp1 = T([0,1])([6,11])(ramp)



step2D_1 = SIMPLICIAL_COMPLEX([[0,0],[0, 0.5],[0.6, 0.5],[0.6, 0.25]])([[0,1,2,3]])

step3D_1 = EXTRUDE([2])(step2D_1)

scamb_1 = MAP([S1, S3, S2])(step3D_1)

ramp_1 = STRUCT(NN(10)([scamb_1, T([0,2])([0.6, 0.5])])) 

ramp_2 = T([0,1])([6,11])(ramp_1)

ramp2 = T([0,2])([-2.5,5.6])(ramp_2)

ramp3 = T([0,2])([8.5,5])(ramp2)

building = STRUCT([pillars, floors, faces, windows, ramp1, ramp2, ramp3])

DRAW(building)