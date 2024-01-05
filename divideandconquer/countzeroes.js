function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the mid element is 1
        if (arr[mid] === 1) {
            // Move to the right half
            left = mid + 1;
        } else {
            // Move to the left half
            right = mid - 1;
        }
    }

    // The index of the first occurrence of 0 is 'left'
    // The count of zeroes is the length of the array minus the index
    return arr.length - left;
}

// Test cases
console.log(countZeroes([1, 1, 1, 1, 0, 0])); // Output: 2
console.log(countZeroes([1, 0, 0, 0, 0]));     // Output: 4
console.log(countZeroes([0, 0, 0]));            // Output: 3
console.log(countZeroes([1, 1, 1, 1]));         // Output: 0
