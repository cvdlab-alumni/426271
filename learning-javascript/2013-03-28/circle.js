var domain = DOMAIN([[0, 2*PI]])([36]);

var x = function(v) {
	return [COS(v[0])];
};

var y = function(v)	{
	return [SIN(v[0])];	
};

var mappings = [x, y];

var circle = MAP(mappings)(domain);

DRAW(circle);