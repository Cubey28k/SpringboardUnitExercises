def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
     # Convert numbers to strings to easily count digit frequencies
    str_num1 = str(num1)
    str_num2 = str(num2)

    # Count the frequency of each digit in both numbers
    freq_num1 = {digit: str_num1.count(digit) for digit in str_num1}
    freq_num2 = {digit: str_num2.count(digit) for digit in str_num2}

    # Check if the frequencies of digits are the same
    return freq_num1 == freq_num2
