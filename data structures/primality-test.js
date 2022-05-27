exports.primalityTest = function(n) {
    const isInteger = n % 1 === 0;
    if (!isInteger) {
        return false;
    }

    if (n <= 1) {
        return false;
    }

    if (n <= 3) {
        return true;
    }

    if (n % 2 === 0) {
        return false;
    }

    for (let x = 3; x < Math.sqrt(n); x++) {
        if (n % x === 0) {
            return false;
        }
    }

    return true;
}