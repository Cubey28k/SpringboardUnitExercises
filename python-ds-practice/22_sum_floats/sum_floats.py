def sum_floats(nums):
    """Return sum of floating point numbers in nums.
    
        >>> sum_floats([1.5, 2.4, 'awesome', [], 1])
        3.9
        
        >>> sum_floats([1, 2, 3])
        0
    """

    # hint: to find out if something is a float, you should use the
    # "isinstance" function --- research how to use this to find out
    # if something is a float!
    # Initialize sum to 0
    total = 0

    # Iterate through each element in the list
    for num in nums:
        # Check if the element is a float using isinstance
        if isinstance(num, float):
            total += num  # Add the float to the sum

    return total
