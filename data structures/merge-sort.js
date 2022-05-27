function _sortAndMerge(leftArray, rightArray) {
    const sortedArray = [];
    const indexes = [0, 0];
    const LEFT_INDEX = 0;
    const RIGHT_INDEX = 1;
    while (indexes[LEFT_INDEX] < leftArray.length && indexes[RIGHT_INDEX] < rightArray.length) {
        const isLarger = leftArray[indexes[LEFT_INDEX]] > rightArray[indexes[RIGHT_INDEX]];
        sortedArray.push(isLarger ? rightArray[indexes[RIGHT_INDEX]] : leftArray[indexes[LEFT_INDEX]])
        indexes[isLarger ? RIGHT_INDEX : LEFT_INDEX]++;
    }

    return [...sortedArray, ...leftArray.slice(indexes[0]), ...rightArray.slice(indexes[1])];
}

function _sort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, array.length);
    return _sortAndMerge(_sort(leftArray), _sort(rightArray));
}



exports.mergeSort = function(array) {
    return _sort(array);
}