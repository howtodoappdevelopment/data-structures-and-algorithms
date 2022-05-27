const { expect } = require('chai');
const {fibonacci} = require("../data structures/fibonacci");


describe('Fibonacci', function () {
    it('should calc values', function () {
       expect(fibonacci(2)).equal(1)
       expect(fibonacci(0)).equal(0)
       expect(fibonacci(1)).equal(1)
       expect(fibonacci(5)).equal(5)
    });
})