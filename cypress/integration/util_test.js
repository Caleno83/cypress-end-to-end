import { sum, square, greet, mul } from '../../src/util';

describe('testing math util functions', () => {
    it('sum return correct value', () => {
        expect(sum(1,2)).to.equal(3)
    })

    it('square return correct value', () => {
        expect(square(2)).to.equal(4)
    })

    it('greet functions return hello', () => {
        expect(greet("hi")).to.equal("Hello")
    })

    it('multiplication return correct value', ()=> {
        expect(mul(5,5)).to.equal(25)
    })
})