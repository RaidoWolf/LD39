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
        k: {
            x: 800,
            y: 100,
            type: Intersection.TYPE_JOINT,
            roads: [
                'first-1',
                'a-1'
            ]
        },
        l: {
            x: 800,
            y: 300,
            type: Intersection.TYPE_3WAY,
            roads: [
                'first-1',
                'first-2',
                'b-1'
            ]
        },
        m: {
            x: 1200,
            y: 300,
            type: Intersection.TYPE_4WAY,
            roads: [
                'third-1',
                'third-2',
                'b-2',
                'b-3'
            ]
        },
        n: {
            x: 1400,
            y: 300,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fourth-2',
                'fourth-3',
                'b-3'
            ]
        },
        o: {
            x: 1400,
            y: 250,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fourth-1',
                'fourth-2',
                'aga-1'
            ]
        },
        p: {
            x: 800,
            y: 400,
            type: Intersection.TYPE_3WAY,
            roads: [
                'first-2',
                'first-3',
                'c-1'
            ]
        },
        q: {
            x: 1000,
            y: 400,
            type: Intersection.TYPE_4WAY,
            roads: [
                'second-3',
                'second-4',
                'c-1',
                'c-2'
            ]
        },
        r: {
            x: 1200,
            y: 400,
            type: Intersection.TYPE_4WAY,
            roads: [
                'third-2',
                'third-3',
                'c-2',
                'c-3'
            ]
        },
        s: {
            x: 1400,
            y: 400,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fourth-3',
                'fourth-4',
                'c-3'
            ]
        },
        t: {
            x: 1000,
            y: 500,
            type: Intersection.TYPE_3WAY,
            roads: [
                'second-4',
                'second-5',
                'd-1'
            ]
        },
        u: {
            x: 1200,
            y: 500,
            type: Intersection.TYPE_4WAY,
            roads: [
                'd-1',
                'd-2',
                'third-3',
                'third-4'
            ]
        },
        v: {
            x: 1400,
            y: 500,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fourth-4',
                'fourth-5',
                'd-2'
            ]
        },
        w: {
            x: 1000,
            y: 600,
            type: Intersection.TYPE_3WAY,
            roads: [
                'second-5',
                'second-6',
                'e-1'
            ]
        },
        x: {
            x: 1200,
            y: 600,
            type: Intersection.TYPE_4WAY,
            roads: [
                'third-4',
                'third-5',
                'e-1',
                'e-2'
            ]
        },
        y: {
            x: 1400,
            y: 600,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fourth-5',
                'fourth-6',
                'e-2'
            ]
        },
        z: {
            x: 900,
            y: 700,
            type: Intersection.TYPE_3WAY,
            roads: [
                'main-5',
                'main-6',
                'diag'
            ]
        },
        aa: {
            x: 1000,
            y: 700,
            type: Intersection.TYPE_4WAY,
            roads: [
                'second-6',
                'second-7',
                'main-6',
                'main-7'
            ]
        },
        ab: {
            x: 1200,
            y: 700,
            type: Intersection.TYPE_4WAY,
            roads: [
                'third-5',
                'third-6',
                'main-7',
                'main-8'
            ]
        },
        ac: {
            x: 1400,
            y: 700,
            type: Intersection.TYPE_4WAY,
            roads: [
                'fourth-6',
                'fourth-7',
                'main-8',
                'main-9'
            ]
        },
        ad: {
            x: 1500,
            y: 750,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fourth-7',
                'fourth-8',
                'aga-2'
            ]
        },
        ae: {
            x: 800,
            y: 800,
            type: Intersection.TYPE_3WAY,
            roads: [
                'first-5',
                'first-6',
                'diag'
            ]
        },
        af: {
            x: 1000,
            y: 800,
            type: Intersection.TYPE_3WAY,
            roads: [
                'second-7',
                'second-8',
                'g-1'
            ]
        },
        ag: {
            x: 1100,
            y: 800,
            type: Intersection.TYPE_3WAY,
            roads: [
                'g-1',
                'g-2',
                'fifth-1'
            ]
        },
        ah: {
            x: 1200,
            y: 800,
            type: Intersection.TYPE_4WAY,
            roads: [
                'third-6',
                'third-7',
                'g-2',
                'g-3'
            ]
        },
        ai: {
            x: 1300,
            y: 800,
            type: Intersection.TYPE_3WAY,
            roads: [
                'g-3',
                'g-4',
                'sixth-1'
            ]
        },
        aj: {
            x: 1500,
            y: 800,
            type: Intersection.TYPE_4WAY,
            roads: [
                'fourth-8',
                'fourth-9',
                'g-4',
                'g-5'
            ]
        },
        ak: {
            x: 800,
            y: 950,
            type: Intersection.TYPE_3WAY,
            roads: [
                'first-6',
                'first-7',
                'h-1'
            ]
        },
        al: {
            x: 1000,
            y: 950,
            type: Intersection.TYPE_4WAY,
            roads: [
                'second-8',
                'second-9',
                'h-1',
                'h-2'
            ]
        },
        am: {
            x: 1100,
            y: 950,
            type: Intersection.TYPE_4WAY,
            roads: [
                'h-2',
                'h-3',
                'fifth-1',
                'fifth-2'
            ]
        },
        an: {
            x: 1200,
            y: 950,
            type: Intersection.TYPE_4WAY,
            roads: [
                'h-3',
                'h-4',
                'third-7',
                'third-8'
            ]
        },
        ao: {
            x: 1300,
            y: 950,
            type: Intersection.TYPE_4WAY,
            roads: [
                'h-4',
                'h-5',
                'sixth-1',
                'sixth-2'
            ]
        },
        ap: {
            x: 1750,
            y: 800,
            type: Intersection.TYPE_ENDPOINT,
            roads: [
                'g-6'
            ]
        },
        aq: {
            x: 800,
            y: 1100,
            type: Intersection.TYPE_3WAY,
            roads: [
                'first-7',
                'first-8',
                'i-1'
            ]
        },
        ar: {
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
        as: {
            x: 1100,
            y: 1100,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fifth-2',
                'i-2',
                'i-3'
            ]
        },
        at: {
            x: 1200,
            y: 1100,
            type: Intersection.TYPE_4WAY,
            roads: [
                'third-8',
                'third-9',
                'i-3',
                'i-4'
            ]
        },
        au: {
            x: 1300,
            y: 1100,
            type: Intersection.TYPE_3WAY,
            roads: [
                'sixth-2',
                'i-4',
                'i-5'
            ]
        },
        av: {
            x: 1500,
            y: 1100,
            type: Intersection.TYPE_3WAY,
            roads: [
                'fourth-11',
                'fourth-12',
                'i-5'
            ]
        },
        aw: {
            x: 800,
            y: 1400,
            type: Intersection.TYPE_ENDPOINT,
            roads: [
                'first-7'
            ]
        },
        ax: {
            x: 1000,
            y: 1400,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        ay: {
            x: 1200,
            y: 1400,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        az: {
            x: 1500,
            y: 1400,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        ba: {
            x: 375,
            y: 450,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bb: {
            x: 210,
            y: 380,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bc: {
            x: 225,
            y: 275,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bd: {
            x: 250,
            y: 600,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        be: {
            x: 80,
            y: 250,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bf: {
            x: 500,
            y: 250,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bg: {
            x: 550,
            y: 125,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bh: {
            x: 375,
            y: 700,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bi: {
            x: 450,
            y: 925,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bj: {
            x: 400,
            y: 1000,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bk: {
            x: 375,
            y: 1025,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bl: {
            x: 400,
            y: 1200,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bm: {
            x: 300,
            y: 1300,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bn: {
            x: 275,
            y: 1225,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bo: {
            x: 275,
            y: 1050,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bp: {
            x: 100,
            y: 950,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bq: {
            x: 175,
            y: 1000,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        br: {
            x: 160,
            y: 1150,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bs: {
            x: 100,
            y: 1300,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bt: {
            x: 130,
            y: 1400,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bu: {
            x: 250,
            y: 1150,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bv: {
            x: 425,
            y: 1380,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bw: {
            x: 650,
            y: 1240,
            type: Intersection.TYPE_ENDPOINT,
            roads: [

            ]
        },
        bx: {
            x: 1500,
            y: 900,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        by: {
            x: 1500,
            y: 1200,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        },
        bz: {
            x: 1550,
            y: 425,
            type: Intersection.TYPE_JOINT,
            roads: [

            ]
        },
        ca: {
            x: 1600,
            y: 1000,
            type: Intersection.TYPE_JOINT,
            roads: [

            ]
        },
        cb: {
            x: 1500,
            y: 950,
            type: Intersection.TYPE_3WAY,
            roads: [

            ]
        }
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
        'main-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
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
        'main-5': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-6': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-7': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-8': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'a-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'a-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'a-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'b-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'b-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'b-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'c-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'c-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'c-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'd-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'd-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'e-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'e-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-4': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-4': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-5': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-4': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-5': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-4': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-5': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-6': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-7': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
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
        'second-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-4': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-5': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-6': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-7': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-8': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-9': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
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
        'third-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-4': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-5': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-6': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-7': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-8': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-9': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-4': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-5': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-6': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-7': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-8': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-9': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-10': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-11': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-12': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-13': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fifth-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fifth-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'sixth-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'sixth-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'aga-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'aga-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'agb-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'agb-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'diag': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-a': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-b': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-c-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-c-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-d': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-e-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-e-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-f-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-g-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-g-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-h': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-1': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-2': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-3': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-a': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-b': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-c': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-d': {
            start: '',
            end: '',
            pattern: Road.PATTERN_LINEAR,
            type: Road.TYPE_CITY,
            speed: 2,
            traffic: 1
        }
    }

};
