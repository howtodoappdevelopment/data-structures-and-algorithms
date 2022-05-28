exports.LCS = function (source, comparable) {
    const matrix = Array(comparable.length).fill(Array(source.length).fill(0));
    comparable.split("").forEach((rowChar, rowIndex) => {
        source.split("").forEach((colChar, colIndex) => {
            matrix[rowIndex][colIndex] = +(rowChar === colChar)
        });
    });
    return matrix
        .map((col, index) => col.find(positive => positive) ? index : undefined)
        .filter(index => index !== undefined)
        .map((index) => comparable.charAt(index))
        .join("");
}