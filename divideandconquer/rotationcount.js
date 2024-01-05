function findRotationCount(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // If the array is already sorted, the rotation count is 0
        if (arr[low] <= arr[high]) {
            return low;
        }

        const mid = Math.floor((low + high) / 2);
        const next = (mid + 1) % arr.length;
        const prev = (mid + arr.length - 1) % arr.length;

        // Check if mid is the rotation point
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        // Determine which half is unsorted and adjust search space
        if (arr[mid] <= arr[high]) {
            // Right half is sorted, search in the left half
            high = mid - 1;
        } else {
            // Left half is sorted, search in the right half
            low = mid + 1;
        }
    }

    return -1;  // Invalid input or not rotated
}

// Test cases
console.log(findRotationCount([15, 18, 2, 3, 6, 12]));  // Output: 2
console.log(findRotationCount([7, 9, 11, 12, 5]));      // Output: 4
console.log(findRotationCount([7, 9, 11, 12, 15]));     // Output: 0
