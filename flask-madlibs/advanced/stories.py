"""Madlibs Stories."""


class Story:
    """Madlibs story.

    To  make a story, pass a code, a title, a list of prompts,
    and the text of the template.

        >>> s = Story(
        ...     "simple",
        ...     "A Simple Tale",
        ...     ["noun", "verb"],
        ...     "I love to {verb} a good {noun}.")

    To generate text from a story, pass in a dictionary-like thing
    of {prompt: answer, promp:answer):

        >>> ans = {"verb": "eat", "noun": "mango"}
        >>> s.generate(ans)
        'I love to eat a good mango.'
    """

    def __init__(self, code, title, words, text):
        """Create story with words and template text."""

        self.code = code
        self.title = title
        self.prompts = words
        self.template = text

    def generate(self, answers):
        """Substitute answers into text."""

        text = self.template

        for (key, val) in answers.items():
            text = text.replace("{" + key + "}", val)

        return text


# Here's a story to get you started


story1 = Story(
    "history",
    "A TALE OF TWO DJs",
    ["VENUE","PLACE", "NOUN", "NOUN2", "VERB", "DJ", "VERB2", "ADJECTIVE", "PLURAL_NOUN"],
    """At the bustling {VENUE} in {PLACE}, two DJs, {DJ} and DJ Donkoz, locked {NOUN2} across the electrified {PLURAL_NOUN}. 
    In a spontaneous collaboration, they seamlessly {VERB2} their unique {NOUN}, creating a sonic journey that transcended {NOUN2}.
      From that night on, the dynamic duo {VERB} the music scene, proving that true harmony arises when {ADJECTIVE} passion meets a 
      shared rhythm."""
)

story2 = Story(
    "omg",
    "A GOOD TIME!",
    ["PLACE", "NOUN", "NOUN2", "VERB", "PROTAGONIST", "VERB2", "ADJECTIVE", "PLURAL_NOUN"],
    """In the heart of the vibrant {PLACE}, a spontaneous adventure unfolded as {PROTAGONIST} received an unexpected {NOUN} 
    at a secret rooftop party. Surrounded by neon lights and pulsating {NOUN2}, they {VERB} the night away, {VERB2} in the thrill 
    of the {ADJECTIVE} unknown. As dawn broke, they realized that life's most exciting {PLURAL_NOUN} often come when you embrace {NOUN2} with an open
      heart."""
)

# Make dict of {code:story, code:story, ...}
stories = {s.code: s for s in [story1, story2]}
