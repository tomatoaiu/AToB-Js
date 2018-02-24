const chai = require(`chai`);
const assert = chai.assert;

import stringToNumber from '../src/stringToNumber';

describe(`String To Number `, () => {
    describe(`test str 1`, () => {
        it(`str is 1`, () => {
            assert.equal(stringToNumber(`1`), 1);
        });
    });
    
    describe(`test str 0`, () => {
        it(`str is 0`, () => {
            assert.equal(stringToNumber(`0`), 0);
        });
    });

    describe(`test str １１`, () => {
        it(`str is ''`, () => {
            assert.equal(stringToNumber(`１１`), ``);
        });
    });

    describe(`test str `, () => {
        it(`str is ''`, () => {
            assert.equal(stringToNumber(), ``);
        });
    });

    describe(`test str []`, () => {
        it(`str is ''`, () => {
            assert.equal(stringToNumber([]), ``);
        });
    });

    describe(`test str {a:1}`, () => {
        it(`str is ''`, () => {
            assert.equal(stringToNumber({a:1}), ``);
        });
    });
});
