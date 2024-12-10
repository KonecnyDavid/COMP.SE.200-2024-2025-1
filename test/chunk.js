import chunk from '../src/chunk.js';
import { expect } from 'chai';

describe('Chunk Function', () => {
    it('should split an array into chunks of a specified size', () => {
        const array = ['a', 'b', 'c', 'd'];
        const result = chunk(array, 2);
        expect(result).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });

    it('should include the remaining elements in the last chunk if the array cannot be split evenly', () => {
        const array = ['a', 'b', 'c', 'd', 'e'];
        const result = chunk(array, 2);
        expect(result).to.deep.equal([ [ 'a', 'b' ], [ 'c', 'd' ] , [ 'e' ]]);
    });

    it('should return individual elements if size is 1', () => {
        const array = ['a', 'b', 'c'];
        const result = chunk(array, 1);
        expect(result).to.deep.equal([['a'], ['b'], ['c']]);
    });

    it('should return an empty array if input array is empty', () => {
        const result = chunk([], 2);
        expect(result).to.deep.equal([]);
    });
});
