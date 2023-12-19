import random

class WordFinder:
    def __init__(self, file_path):
        """Initialize WordFinder with a file path and read the dictionary."""
        try:
            with open(file_path, 'r') as dict_file:
                self.words = self.parse(dict_file)
        except FileNotFoundError:
            print(f"Error: File '{file_path}' not found.")
            self.words = []
        except Exception as e:
            print(f"An error occurred: {e}")
            self.words = []

        print(f"{len(self.words)} words read")

    def parse(self, dict_file):
        """Parse dict_file, returning a list of words."""
        return [w.strip() for w in dict_file]

    def random(self):
        """Return a random word from the list."""
        return random.choice(self.words)

class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines and comments.

    This class inherits from WordFinder and overrides the parse method.

    >>> swf = SpecialWordFinder("complex.txt")
    3 words read

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    """

    def parse(self, dict_file):
        """Parse dict_file, skipping blanks and comments."""
        return [w.strip() for w in dict_file if w.strip() and not w.startswith("#")]
