import compact from '../src/compact.js';
import { expect } from 'chai';

describe('Compact Function', () => {

    it('should return an empty array when provided with an array of falsey values', () => {
        const array = [false, null, 0, '', undefined, NaN];
        const result = compact(array);
        expect(result).to.deep.equal([]);
    });

    it('should return an array when provided with an array of not falsey values', () => {
        const array = [false, null, 0, '', undefined, NaN, "hello", 123];
        const result = compact(array);
        expect(result).to.deep.equal(["hello", 123]);
    });


    it('should handle an empty input array', () => {
        const result = compact([]);
        expect(result).to.deep.equal([]);
    });
});

