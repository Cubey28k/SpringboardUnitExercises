def print_upper_words(word1, word2, word3, word4):
    """print words on separate lines in uppercase, there are 4"""
    print(word1.upper())
    print(word2.upper())
    print(word3.upper())
    print(word4.upper())

    #test
print_upper_words('eradicate', 'beer', 'serpent','kitty')

def print_upper_words_starting_with_e(word1, word2, word3, word4):
    """print uppercase words that start with e, there are 4"""
    for word in [word1, word2, word3, word4]:
        if word.lower().startswith('e'):
            print(word.upper())
    #test
print_upper_words_starting_with_e('eradicate', 'beer', 'serpent','kitty')

def print_words_starting_with_letters(word1, word2, word3, word4, start_letters):
    """print words that start with letters, start_letters allows you to choose which letters it can start with, so you could do eE to cover case sensitivity as well, uses tuple"""
    for word in [word1, word2, word3, word4]:
        if word.lower().startswith(tuple(start_letters)):
            print(word.upper())

print_words_starting_with_letters('eradicate', 'beer', 'serpent','kitty', 'eE')