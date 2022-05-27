const BitManipulations = function() {
    this.getBit = function(n, pos) {
        return (n >> pos) & 1;
    }
    this.setBit = function(n, pos) {
        return (1 << pos) | n;
    }
    this.clearBit = function(n, pos) {
        return ~(1 << pos) & n;
    }
    this.updateBit = function(n, pos, val) {
        return val ? this.setBit(n, pos) : this.clearBit(n, pos);
    }
    this.isEven = function(n) {
        return (n & 1) === 0;
    }
    this.isPositive = function(n) {
        return n === 0 ? false : ((n >> 31) & 1) === 0;
    }
    this.multiplyByTwo = function(n) {
        return n << 1;
    }
    this.divideByTwo = function(n) {
        return n >> 1;
    }
    this.switchSign = function(n) {
        return ~n + 1;
    }
    this.isPowerOfTwo = function(n) {
        return (n & (n - 1)) === 0
    }
}

exports.BitManipulations = BitManipulations;