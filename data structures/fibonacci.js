function _fibonacci(n) {
    if (n <= 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return _fibonacci(n - 1) + _fibonacci(n - 2);
}

exports.fibonacci = (n) => _fibonacci(n);