export default class City {

    constructor (options) {

        options = typeof options !== 'undefined' ? options : {};

    }

}

City.prototype.m_name                   = 'Unnamed City';
City.prototype.m_districts              = null;
City.prototype.m_intersections          = null;
City.prototype.m_pathfindingGraph       = null;
City.prototype.m_controlIntersection    = null;
City.prototype.m_powerplants            = null;
