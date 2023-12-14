def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """

    # Convert the string to a list of characters for easy modification
    s_list = list(s)

    # Define a set of vowels
    vowels = set("aeiouAEIOU")

    # Initialize two pointers, one at the beginning and one at the end of the string
    left, right = 0, len(s_list) - 1

    while left < right:
        # Move the left pointer to the next vowel
        while left < right and s_list[left].lower() not in vowels:
            left += 1

        # Move the right pointer to the previous vowel
        while left < right and s_list[right].lower() not in vowels:
            right -= 1

        # Swap the vowels at the left and right pointers
        s_list[left], s_list[right] = s_list[right], s_list[left]

        # Move the pointers towards each other
        left += 1
        right -= 1

    # Convert the list back to a string
    result = ''.join(s_list)

    return result