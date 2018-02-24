const chai = require(`chai`);
const assert = chai.assert;

import stringToArray from '../src/stringToArray';

describe(`String To Array `, () => {
    describe(`test str 'abc' : separate ''`, () => {
        it(`str is [ 'a', 'b', 'c' ], separate is ''`, () => {
            assert.sameOrderedMembers(stringToArray(`abc`, ""), [ 'a', 'b', 'c' ]);
        });
    });
    
    describe(`test str 'sss'`, () => {
        it(`str is [ 's', 's', 's' ]`, () => {
            assert.sameOrderedMembers(stringToArray(`sss`), [ 's', 's', 's' ]);
        });
    });
});
