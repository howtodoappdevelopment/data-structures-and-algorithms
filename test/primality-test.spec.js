const {expect} = require("chai");
const {primalityTest} = require("../data structures/primality-test");
describe.only('Primality test', function () {
    it('should find primal', function () {
        expect(primalityTest(2)).equal(true)
        expect(primalityTest(3)).equal(true)
        expect(primalityTest(7)).equal(true)
        expect(primalityTest(13)).equal(true)
    });
    it('shouldn\'t find primal', function () {
        expect(primalityTest(1.2)).equal(false)
        expect(primalityTest(1)).equal(false)
        expect(primalityTest(-1)).equal(false)
        expect(primalityTest(10)).equal(false)
        expect(primalityTest(15)).equal(false)
    });
})