const {expect} = require("chai");
const {LIS} = require("../data structures/longest-increasing-sequence");

describe.only("LIS", function () {
    it("should find LIS", function () {
        expect(LIS([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])).to.eql([0, 4, 6, 9, 11, 15])
    })
})