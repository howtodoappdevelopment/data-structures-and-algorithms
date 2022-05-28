const {expect} = require("chai");
const {LCS} = require("../data structures/longest-common-subsequence");

describe('Longest common subsequence', function() {
   it('should find sequence', function() {
      expect(LCS("ABCDGH", "AEDFHR")).equal("ADH")
      expect(LCS("AGGTAB", "GXTXAYB")).equal("GTAB")
   })
   it('shouldn\'t find sequence', function () {
      expect(LCS("ABCD", "EFGH")).equal("");
   })
});