def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    letter_count = {} #creates a dictionary
    
    for letter in phrase.lower():
        if letter.isalpha():  # Check if the character is a letter, built in method 
            letter_count[letter] = letter_count.get(letter, 0) + 1
    #dictionary method and followed by a step up if letter is found.
    return letter_count