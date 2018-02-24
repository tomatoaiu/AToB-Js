const chai = require(`chai`);
const assert = chai.assert;

import numberToString from '../src/numberToString';

describe(`Number To String `, () => {
    describe(`test num 3`, () => {
        it(`num is '3'`, () => {
            assert.equal(numberToString(3), `3`);
        });
    });

    describe(`test num 0`, () => {
        it(`num is '0'`, () => {
            assert.equal(numberToString(0), `0`);
        });
    });

    describe(`test num ３`, () => {
        it(`num is '３'`, () => {
            assert.equal(numberToString(`３`), `３`);
        });
    });

    describe(`test num 0.2`, () => {
        it(`num is '0.2'`, () => {
            assert.equal(numberToString(0.2), `0.2`);
        });
    });

    describe(`test num `, () => {
        it(`num is ''`, () => {
            assert.equal(numberToString(), ``);
        });
    });

    describe(`test num 0x11`, () => {
        it(`num is '17'`, () => {
            assert.equal(numberToString(0x11), `17`);
        });
    });

    describe(`test num Infinity`, () => {
        it(`num is 'Infinity'`, () => {
            assert.equal(numberToString(Infinity), `Infinity`);
        });
    });
});