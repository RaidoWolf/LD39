export default class City {

    constructor (options) {

        options = typeof options !== 'undefined' ? options : {};

    }

}

City.prototype.name             = 'Unnamed City';
City.prototype.districts        = null;
City.prototype.intersections    = null;
City.prototype.pathfindingGraph = null;
