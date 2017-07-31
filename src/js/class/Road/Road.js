export default class Road {

    constructor (options) {

        options = typeof options !== 'undefined' ? options : {};

    }

}

Road.prototype.speed = 1; // multiplier of "normal speed" whatever that may mean
Road.prototype.traffic = 1; // multiplier of "normal traffic" (also whatever that may mean)
Road.prototype.startPoint = null; //this should be an "Intersection" id
Road.prototype.pathPoints = null; // this should be an array of 2-element arrays of coordinates
Road.prototype.endPoint = null; // this should be an "Intersection" id
Road.prototype.pattern = Road.PATTERN_LINEAR;
Road.prototype.type = Road.TYPE_CITY;

// road pattern enum
Road.PATTERN_LINEAR         = 1;
Road.PATTERN_BEZIER         = 2;
Road.PATTERN_CATMULL_ROM    = 3;

// road type enum
Road.TYPE_INTERSTATE        = 1; // multi-lane, high-speed, no full-stop intersections, usually bezier or catmull-rom
Road.TYPE_HIGHWAY           = 2; // high-speed, no full-stop intersections, usually bezier or catmull-rom
Road.TYPE_CITY              = 3; // normal-speed, frequent 3 or 4-way intersections, usually linear
Road.TYPE_COUNTRY           = 4; // normal-speed, occasional 3 or 4-way intersections, always bezier or catmull-rom
Road.TYPE_DIRT              = 5; // low-speed, occasional 3 or 4 way intersections, always bezier or catmull-rom
