#realize stairs

step2D = MKPOL([[[0,0],[0, 0.56],[0.6, 0.5],[0.6, 0.28]], [[1,2,3,4]], None])

step3D = PROD([step2D, Q(2)])

scamb = MAP([S1, S3, S2])(step3D)

ramp = STRUCT(NN(10)([scamb, T([1,3])([0.6, 0.56])])) 

ramp1 = T([1,2])([6,11])(ramp)




step2D_1 = MKPOL([[[0,0],[0, 0.5],[0.6, 0.5],[0.6, 0.25]], [[1,2,3,4]], None])

step3D_1 = PROD([step2D_1, Q(2)])

scamb_1 = MAP([S1, S3, S2])(step3D_1)

ramp_1 = STRUCT(NN(10)([scamb_1, T([1,3])([0.6, 0.5])])) 

ramp_2 = T([1,2])([6,11])(ramp_1)

ramp2 = T([1,3])([-2.5,5.6])(ramp_2)

ramp3 = T([1,3])([8.5,5])(ramp2)

building = STRUCT([pillars, floors, faces, windows, ramp1, ramp2, ramp3])

VIEW(building)