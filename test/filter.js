
import { expect } from 'chai';
import filter from '../src/filter.js';

describe('Filter Function', () => {
    it('should filter an array based on a truthy predicate', () => {
        const users = [{ user: 'Ali', active: true }, { user: 'David', active: false }];
        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([{ user: 'Ali', active: true }]);
    });

    it('should return a nested empty array if no elements match', () => {
        const numbers = [1, 2, 3];
        const result = filter(numbers, num => num > 3);
        expect(result).to.deep.equal([[]]);
    });

    it('should return the original array if all elements match', () => {
        const numbers = [1, 2, 3];
        const result = filter(numbers, num => num > 0);
        expect(result).to.deep.equal(numbers);
    });

    it('should return a nested empty array for an empty input array', () => {
        const result = filter([], () => true);
        expect(result).to.deep.equal([[]]);
    });
});
