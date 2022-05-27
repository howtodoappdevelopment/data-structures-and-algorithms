const { expect } = require('chai')
const {quickSort} = require("../data structures/guick-sort");

describe('Quick sort', function () {
    it('should sort array', function () {
        expect(quickSort([9, 0, 1, 4, 20, -3])).to.eql([-3, 0, 1, 4, 9, 20])
        expect(quickSort([9, 8, 7, 20, 6])).to.eql([6, 7, 8, 9, 20])
    });
});
