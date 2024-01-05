function findFloor(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let floor = -1;  // Default value if floor doesn't exist

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] <= x) {
            // Update the floor and search in the right half
            floor = arr[mid];
            low = mid + 1;
        } else {
            // Search in the left half
            high = mid - 1;
        }
    }

    return floor;
}

// Test cases
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9));   // Output: 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20));  // Output: 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));   // Output: -1
