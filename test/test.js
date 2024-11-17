import { expect } from 'chai';
import add from '../src/add.js';


describe('test case', function () {
    it('test case', function () {
        expect(add(1, 2)).to.equal(3)
    });
});