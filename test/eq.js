import { expect } from 'chai';
import eq from '../src/eq.js';

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

