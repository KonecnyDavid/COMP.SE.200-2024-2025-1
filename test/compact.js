import compact from '../src/compact.js';
import { expect } from 'chai';

describe('Compact Function', () => {

    it('should return an empty array when provided with an array of falsey values', () => {
        const array = [false, null, 0, '', undefined, NaN];
        const result = compact(array);
        expect(result).to.deep.equal([]);
    });

    it('should handle an empty input array', () => {
        const result = compact([]);
        expect(result).to.deep.equal([]);
    });
});

