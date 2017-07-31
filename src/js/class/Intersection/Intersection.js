export default class Intersection {

    constructor (options) {

        options = typeof options !== 'undefined' ? options : {};

    }

}

Intersection.prototype.type = Insersection.TYPE_ENDPOINT;

// intersection type enum
Intersection.TYPE_4WAY      = 1; // + shaped (4 roads)
Intersection.TYPE_3WAY      = 2; // y shaped (3 roads)
Intersection.TYPE_JOINT     = 3; // just a point on a line (two roads)
Intersection.TYPE_ENDPOINT  = 4; // end of the line (one road)
