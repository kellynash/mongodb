exports.Shape = function(name, color){
	this.name = name;
	this.color = color;
	this.getColor = function(){
		return color;
	}
};

//square is Shape2d
exports.Shape2d = function(name, color){
	exports.Shape.call(this, name, color);
};

exports.Shape2d.prototype = Object.create(exports.Shape.prototype);
exports.Shape2d.prototype.constructor = exports.Shape2d;
//Voodoo Magic to make Shape2d inherit from Shape



exports.Circle = function(name, color, radius){
	exports.Shape2d.call(this, name, color);
	this.radius = radius;
	this.getRadius = function(){
		return radius;
	}
	this.getDiameter = function() {
		return radius * 2;
	}
	this.getArea = function(){
		return Math.PI * radius * radius;
	}
};

exports.Circle.prototype = Object.create(exports.Shape2d.prototype);
exports.Circle.prototype.constructor = exports.Circle;
//Voodoo Magic to make Circle inherit from Shape2d

exports.Shape3d = function(name, color){
	exports.Shape.call(this, name, color);
}

exports.Shape3d.prototype = Object.create(exports.Shape.prototype);
exports.Shape3d.prototype.constructor = exports.Shape3d;
//Voodoo Magic to make Shape3d inherit from Shape

exports.Cube = function(name, color, radius){
	exports.Shape3d.call(this, name, color);
	this.radius = radius;
	this.getVolume = function() {
		return radius * radius * radius;
	}
}

exports.Cube.prototype = Object.create(exports.Shape3d.prototype);
exports.Cube.prototype.constructor = exports.Cube;
//Voodoo Magic to make Cube inherit from Shape3d
