import { expect } from 'chai';
import add from '../src/add.js';
import eq from '../src/eq.js';
import filter from '../src/filter.js';
import get from '../src/get.js';

describe('Add Function', () => {
    it('should add two positive numbers correctly', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should add positive and negative numbers correctly', () => {
        expect(add(5, -3)).to.equal(2);
    });

    it('should add two negative numbers correctly', () => {
        expect(add(-2, -3)).to.equal(-5);
    });

    it('should add zero correctly', () => {
        expect(add(0, 5)).to.equal(5);
        expect(add(0, 0)).to.equal(0);
    });

    it('should handle floating point numbers', () => {
        expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
    });
});

describe('Equals Function', () => {
    it('should return true for equivalent numbers', () => {
        expect(eq(1, 1)).to.be.true;
    });

    it('should return false for different numbers', () => {
        expect(eq(1, 2)).to.be.false;
    });

    it('should return true for NaN compared to NaN', () => {
        expect(eq(NaN, NaN)).to.be.true;
    });

    it('should return true for equivalent strings', () => {
        expect(eq('abc', 'abc')).to.be.true;
    });

    it('should return false for different objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };
        expect(eq(obj1, obj2)).to.be.false;
    });

    it('should return true for the same object', () => {
        const obj = { a: 1 };
        expect(eq(obj, obj)).to.be.true;
    });
});

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

describe('Get Function', () => {
    it('should return the value at the specified path of the object', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a[0].b.c')).to.equal(3);
    });

    it('should return the default value for undefined paths', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a[1].b.c', 'default')).to.equal('default');
    });

    it('should work with array paths', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
    });

    it('should return undefined for non-existent paths without default value', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a[1].b.c')).to.equal(undefined);
    });
});