import { expect } from 'chai';
import add from '../src/add.js';
import eq from '../src/eq.js';

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