function Edge (v1, v2) {
	this.v1 = v1;
	this.v2 = v2;
}

Edge.prototype.length = function() {
	return Math.sqrt(Math.pow(this.v2.x - this.v1.x, 2) + Math.pow(this.v2.y - this.v1.y, 2));
}