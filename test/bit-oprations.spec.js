const {BitManipulations} = require("../data structures/bit-manipulations");
const {expect} = require("chai");

const bitManipulations = new BitManipulations();
describe('Bit operations', function () {
    it('should get bit', function () {
        expect(bitManipulations.getBit(5, 0)).equal(1)
        expect(bitManipulations.getBit(5, 1)).equal(0)
        expect(bitManipulations.getBit(5, 2)).equal(1)
    });
    it('should set bit', function () {
        expect(bitManipulations.setBit(0, 2)).equal(4)
    })
    it('should clear bit', function () {
        expect(bitManipulations.clearBit(5, 2)).equal(1)
    })
    it('should update bit', function () {
        expect(bitManipulations.updateBit(5, 2, 0)).equal(1)
        expect(bitManipulations.updateBit(1, 2, 1)).equal(5)
    });
    it('should check if is even', function () {
        expect(bitManipulations.isEven(5)).equal(false)
        expect(bitManipulations.isEven(4)).equal(true)
    });
    it('should check if is positive', function () {
        expect(bitManipulations.isPositive(5)).equal(true)
        expect(bitManipulations.isPositive(-5)).equal(false)
    });
    it('should multiply by 2', function () {
        expect(bitManipulations.multiplyByTwo(5)).equal(10)
    });
    it('should divide by two', function () {
        expect(bitManipulations.divideByTwo(4)).equal(2)
    });
    it('should switch sign', function () {
        expect(bitManipulations.switchSign(5)).equal(-5)
        expect(bitManipulations.switchSign(-5)).equal(5)
    });
    it('should check if is power of two', function () {
        expect(bitManipulations.isPowerOfTwo(4)).equal(true)
        expect(bitManipulations.isPowerOfTwo(5)).equal(false)
    });
})