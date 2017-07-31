import District from '../District/District.js';
import Intersection from '../Intersection/Intersection.js';
import Road from '../Road/Road.js';

export default class City {

    constructor (options) {

        options = typeof options !== 'undefined' ? options : {};

    }

    get name                () { return this.m_name;                }
    get districts           () { return this.m_districts;           }
    get intersections       () { return this.m_intersections;       }
    get roads               () { return this.m_roads;               }
    get pathfindingGraph    () { return this.m_pathfindingGraph;    }
    get controlIntersection () { return this.m_controlIntersection; }
    get powerPlants         () { return this.m_powerplants;         }

    set name (value) {
        this.m_name = String(value);
    }

    set districts (value) {

        if (typeof value === 'object' && value !== null) {

            for (let i in value) {
                if (!(value[i] instanceof District)) {
                    console.warn('REJECTED: All elements of districts must be instances of the District class.');
                    return false;
                }
            }

            this.m_districts = value;

        } else {
            console.warn('REJECTED: districts must be an object (ids as keys for quick lookup).');
            return false;
        }

    }

    set intersections (value) {

        if (typeof value === 'object' && value !== null) {

            for (let i in value) {
                if (!(value[i] instanceof Intersection)) {
                    console.warn('REJECTED: All elements of intersections must be instances of the Intersection class.');
                    return false;
                }
            }

            this.m_intersections = value;

        } else {
            console.warn('REJECTED: intersections must be an object (ids as keys for quick lookup).');
            return false;
        }

    }

    set roads (value) {

        if (typeof value !== 'object' && value !== null) {

            for (let i in value) {
                if (!(value[i] instanceof Road)) {
                    console.warn('REJECTED: All elements of roads must be instances of the Road class.');
                    return false;
                }
            }

            this.m_roads = value;

        } else {
            console.warn('REJECTED: roads must be an object (ids as keys for quick lookup).');
            return false;
        }

    }

}

City.prototype.m_name                   = 'Unnamed City';
City.prototype.m_districts              = null;
City.prototype.m_intersections          = null;
City.prototype.m_roads                  = null;
City.prototype.m_pathfindingGraph       = null;
City.prototype.m_controlIntersection    = null;
City.prototype.m_powerplants            = null;
