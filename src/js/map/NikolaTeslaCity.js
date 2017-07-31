import Intersection from '../class/Intersection/Intersection.js';
import Road from '../class/Road/Road.js';

// I drew map by hand and then wrote this up manually (an exercise in frustration)
export default nikolaTeslaCity = {

    name: 'Nikola Tesla City',

    width: 1800,
    height: 1500,

    intersections: {
        a: {
            x: 1000,
            y: 200,
            type: Intersection.TYPE_4WAY_NOSTOP,
            roads: [
                'interstate-4',
                'interstate-1',
                'second-1',
                'second-2'
            ]
        },
        b: {
            x: 1700,
            y: 800,
            type: Intersection.TYPE_4WAY_NOSTOP,
            roads: [
                'interstate-1',
                'interstate-2',
                'g-1',
                'g-2'
            ]
        },
        c: {
            x: 1000,
            y: 1300,
            type: Intersection.TYPE_4WAY_NOSTOP,
            roads: [
                'interstate-2',
                'interstate-3',
                'second-10',
                'second-11'
            ]
        },
        d: {
            x: 700,
            y: 700,
            type: Intersection.TYPE_4WAY_NOSTOP,
            roads: [
                'interstate-3',
                'interstate-4',
                'main-3',
                'main-4'
            ]
        },
        e: {
            x: 1000,
            y: 100,
            type: Intersection.TYPE_3WAY,
            roads: [
                'a-1',
                'a-2',
                'second-1'
            ]
        },
        f: {
            x: 1000,
            y: 300,
            type: Intersection.TYPE_4WAY,
            roads: [
                'b-1',
                'b-2',
                'second-2',
                'second-3'
            ]
        },
        g: {
            x: 1000,
            y: 1400,
            type: Intersection.TYPE_ENDPOINT,
            roads: [
                'second-11'
            ]
        },
        h: {
            x: 1000,
            y: 1100,
            type: Intersection.TYPE_4WAY,
            roads: [
                'second-9',
                'second-10',
                'i-1',
                'i-2'
            ]
        },
        i: {
            x: 4500,
            y: 700,
            type: Intersection.TYPE_3WAY,
            roads: [
                'main-2',
                'main-3',
                'scan-1'
            ]
        },
        j: {
            x: 800,
            y: 700,
            type: Intersection.TYPE_4WAY,
            roads: [
                'main-4',
                'main-5',
                'first-3',
                'first-4'
            ]
        },
        k: {},
        l: {},
        m: {},
        n: {},
        o: {},
        p: {},
        q: {},
        r: {},
        s: {},
        t: {},
        u: {},
        v: {},
        w: {},
        x: {},
        y: {},
        z: {},
        aa: {},
        ab: {},
        ac: {},
        ad: {},
        ae: {},
        af: {},
        ag: {},
        ah: {},
        ai: {},
        aj: {},
        ak: {},
        al: {},
        am: {},
        an: {},
        ao: {},
        ap: {},
        aq: {},
        ar: {},
        as: {},
        at: {},
        au: {},
        av: {},
        aw: {},
        ax: {},
        ay: {},
        az: {},
        ba: {},
        bb: {},
        bc: {},
        bd: {},
        be: {},
        bf: {},
        bg: {},
        bh: {},
        bi: {},
        bj: {},
        bk: {},
        bl: {},
        bm: {},
        bn: {},
        bo: {},
        bp: {},
        bq: {},
        br: {},
        bs: {},
        bt: {},
        bu: {},
        bv: {},
        bw: {},
        bx: {},
        by: {}
    },

    roads: {
        'interstate-1': {
            start: 'a',
            end: 'b',
            path: [
                {
                    x: 1500,
                    y: 200,
                },
                {
                    x: 1700,
                    y: 400
                }
            ],
            pattern: Road.PATTERN_CATMULL_ROM,
            type: Road.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'interstate-2': {
            start: 'b',
            end: 'c',
            path: [
                {
                    x: 1700,
                    y: 1100
                },
                {
                    x: 1500,
                    y: 1300
                }
            ],
            pattern: Road.PATTERN_CATMULL_ROM,
            type: Road.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'interstate-3': {
            start: 'c',
            end: 'd',
            path: [
                {
                    x: 900,
                    y: 1300
                },
                {
                    x: 700,
                    y: 1100
                }
            ],
            pattern: Road.PATTERN_CATMULL_ROM,
            type: Road.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'interstate-4': {
            start: 'd',
            end: 'a',
            path: [
                {
                    x: 700,
                    y: 400
                },
                {
                    x: 900,
                    y: 200
                }
            ],
            pattern: Road.PATTERN_CATMULL_ROM,
            type: Road.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'main-1': {},
        'main-2': {},
        'main-3': {
            start: 'i',
            end: 'd',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 2
        },
        'main-4': {
            start: 'd',
            end: 'j',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 3
        },
        'main-5': {},
        'main-6': {},
        'main-7': {},
        'main-8': {},
        'a-1': {},
        'a-2': {},
        'a-3': {},
        'b-1': {},
        'b-2': {},
        'b-3': {},
        'c-1': {},
        'c-2': {},
        'c-3': {},
        'd-1': {},
        'd-2': {},
        'e-1': {},
        'e-2': {},
        'g-1': {},
        'g-2': {},
        'g-3': {},
        'g-4': {},
        'h-1': {},
        'h-2': {},
        'h-3': {},
        'h-4': {},
        'h-5': {},
        'i-1': {},
        'i-2': {},
        'i-3': {},
        'i-4': {},
        'i-5': {},
        'first-1': {},
        'first-2': {},
        'first-3': {},
        'first-4': {},
        'first-5': {},
        'first-6': {},
        'first-7': {},
        'second-1': {
            start: 'e',
            end: 'a',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-2': {
            start: 'a',
            end: 'f',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1.5
        },
        'second-3': {},
        'second-4': {},
        'second-5': {},
        'second-6': {},
        'second-7': {},
        'second-8': {},
        'second-9': {},
        'second-10': {
            start: 'h',
            end: 'c',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1.5
        },
        'second-11': {
            start: 'c',
            end: 'g',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-1': {},
        'third-2': {},
        'third-3': {},
        'third-4': {},
        'third-5': {},
        'third-6': {},
        'third-7': {},
        'third-8': {},
        'third-9': {},
        'fourth-1': {},
        'fourth-2': {},
        'fourth-3': {},
        'fourth-4': {},
        'fourth-5': {},
        'fourth-6': {},
        'fourth-7': {},
        'fourth-8': {},
        'fourth-9': {},
        'fourth-10': {},
        'fourth-11': {},
        'fourth-12': {},
        'fourth-13': {},
        'fifth-1': {},
        'fifth-2': {},
        'sixth-1': {},
        'sixth-2': {},
        'aga-1': {},
        'aga-2': {},
        'agb-1': {},
        'agb-2': {},
        'diag': {},
        'scan-1': {},
        'scan-2': {},
        'scan-3': {},
        'scan-a': {},
        'scan-b': {},
        'scan-c-1': {},
        'scan-c-2': {},
        'scan-d': {},
        'scan-e-1': {},
        'scan-e-2': {},
        'scan-f-1': {},
        'scan-g-1': {},
        'scan-g-2': {},
        'scan-h': {},
        'ncan-1': {},
        'ncan-2': {},
        'ncan-3': {},
        'ncan-a': {},
        'ncan-b': {},
        'ncan-c': {},
        'ncan-d': {}
    }

};
