import capitalize from '../src/capitalize.js';
import { expect } from 'chai';

describe('Capitalize Function', () => {
  it('should capitalize a lowercase string', () => {
    expect(capitalize('fred')).to.equal('Fred');
  });

  it('should capitalize an uppercase string', () => {
    expect(capitalize('FRED')).to.equal('Fred');
  });

  it('should handle an already capitalized string', () => {
    expect(capitalize('Fred')).to.equal('Fred');
  });

  it('should handle single character strings', () => {
    expect(capitalize('f')).to.equal('F');
  });

  it('should return an empty string unchanged', () => {
    expect(capitalize('')).to.equal('');
  });
});
