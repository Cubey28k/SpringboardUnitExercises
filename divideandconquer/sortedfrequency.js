function sortedFrequency(arr, target) {
    function binarySearch(findFirst) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            const mid = low + Math.floor((high - low) / 2);

            if (arr[mid] === target) {
                result = mid;

                if (findFirst) {
                    high = mid - 1; // Search in the left half
                } else {
                    low = mid + 1;  // Search in the right half
                }
            } else if (arr[mid] < target) {
                low = mid + 1;  // Search in the right half
            } else {
                high = mid - 1;  // Search in the left half
            }
        }

        return result;
    }

    const firstOccurrence = binarySearch(true);

    if (firstOccurrence === -1) {
        return -1;  // Target not found
    }

    const lastOccurrence = binarySearch(false);

    // Count of occurrences is the difference between last and first occurrences, plus 1
    return lastOccurrence - firstOccurrence + 1;
}

// Test cases
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));  // Output: 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));  // Output: 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));  // Output: 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));  // Output: -1
