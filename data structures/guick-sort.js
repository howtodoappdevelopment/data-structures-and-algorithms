function _swap(array, sourceIndex, destinationIndex) {
    const tmp = array[destinationIndex];
    array[destinationIndex] = array[sourceIndex];
    array[sourceIndex] = tmp;
}

function _partitionArray(array, lowIndex, highIndex) {
    const pivot = array[highIndex];
    let partitionIndex = lowIndex;
    for (let index = lowIndex; index < highIndex; index++) {
        if (array[index] <  pivot) {
            _swap(array, index, partitionIndex);
            partitionIndex++;
        }
    }
    _swap(array, partitionIndex, highIndex)

    return partitionIndex
}

function _sort(array, lowIndex = 0, highIndex = array.length - 1) {
    if (lowIndex >= highIndex) {
        return array;
    }

    const partitionIndex = _partitionArray(array, lowIndex, highIndex);
    _sort(array, lowIndex, partitionIndex - 1)
    _sort(array, partitionIndex + 1, highIndex)
    return array
}

exports.quickSort = function(array) {
    return _sort(array);
}