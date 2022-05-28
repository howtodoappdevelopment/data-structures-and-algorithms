exports.LIS = function(ns) {
    const longestSequence = [ns[0]];
    for(let n of ns.slice(1)) {
        // extend
        const lastInSequence = longestSequence.slice(-1)[0]
        if (n >= lastInSequence) {
            longestSequence.push(n);
            continue;
        }

        // replace with smaller
        if (lastInSequence < n && longestSequence.length === 1) {
            longestSequence[0] = n;
            continue;
        }

        // replace with smaller
        if (longestSequence.length > 1) {
            const [preLast, last] = longestSequence.slice(-2);
            if (preLast < n && last > n) {
                longestSequence[longestSequence.length - 1] = n;
            }
        }
    }

    return longestSequence;
}