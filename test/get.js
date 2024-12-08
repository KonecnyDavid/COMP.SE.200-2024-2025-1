import { expect } from 'chai';
import get from '../src/get.js';


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