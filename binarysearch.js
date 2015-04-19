function binarySearch(array, value, fromIndex, toIndex) {
    var middleIndex;
    
    if (!array || !array.length) {
        return false;
    }
    if (fromIndex === undefined) {
        fromIndex = 0;
    }
    if (toIndex === undefined) {
        toIndex = array.length - 1;
    }
    if (fromIndex > toIndex) {
        return false;
    }

    middleIndex = Math.floor((toIndex + fromIndex) / 2);
    
    if (array[middleIndex] === value) {
        return true;
    }
    if (array[middleIndex] > value) {
        return binarySearch(array, value, fromIndex, middleIndex - 1);
    }
    return binarySearch(array, value, middleIndex + 1, toIndex);
}

var array = [2, 5, 6, 7, 9, 45, 76, 77];

console.log(binarySearch()); // false
console.log(binarySearch({}, 4)); // false
console.log(binarySearch(array, 4)); // false
console.log(binarySearch(array, 45)); // true
console.log(binarySearch(array, 2)); // true

