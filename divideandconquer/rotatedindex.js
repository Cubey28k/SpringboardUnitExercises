function findRotatedIndex(arr, num) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === num) {
            return mid;  // Found the target, return the index
        }

        // Check which half is sorted
        if (arr[low] <= arr[mid]) {
            // Left half is sorted

            // Check if the target is in the left half
            if (arr[low] <= num && num < arr[mid]) {
                high = mid - 1;  // Search in the left half
            } else {
                low = mid + 1;   // Search in the right half
            }
        } else {
            // Right half is sorted

            // Check if the target is in the right half
            if (arr[mid] < num && num <= arr[high]) {
                low = mid + 1;   // Search in the right half
            } else {
                high = mid - 1;  // Search in the left half
            }
        }
    }

    return -1;  // Target not found
}

// Test cases
console.log(findRotatedIndex([3, 4, 1, 2], 4));                 // Output: 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));     // Output: 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));     // Output: 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14));    // Output: -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));    // Output: -1
