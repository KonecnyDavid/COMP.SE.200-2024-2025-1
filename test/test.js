import { expect } from 'chai';
import add from '../src/add.js';

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
