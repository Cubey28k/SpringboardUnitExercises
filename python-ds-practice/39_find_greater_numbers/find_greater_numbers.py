def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        4

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
    """
     # Initialize a counter for the number of times a greater number is found
    count = 0

    # Iterate through the list of numbers
    for i in range(len(nums)):
        # Check for each number how many greater numbers are present in the remaining part of the list
        count += sum(1 for num in nums[i+1:] if num > nums[i])

    # Return the total count
    return count

#explanation, because task is a little misleading
# #find_greater_numbers([6, 1, 2, 7])
# For 6, there are three greater numbers (1, 2, and 7).
# For 1, there are two greater numbers (2 and 7).
# For 2, there is one greater number (7).
# For 7, there are no greater numbers.
# The total count is 3 + 2 + 1 + 0 = 6, and that's the output of the function.
