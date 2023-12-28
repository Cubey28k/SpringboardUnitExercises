class Question:
    """Question on a questionnaire."""

    def __init__(self, question, choices=None, allow_text=False):
        """Create question (assume Yes/No for choices."""

        if not choices:
            choices = ["Yes", "No"]

        self.question = question
        self.choices = choices
        self.allow_text = allow_text


class Survey:
    """Questionnaire."""

    def __init__(self, title, instructions, questions):
        """Create questionnaire."""

        self.title = title
        self.instructions = instructions
        self.questions = questions


fighting_survey = Survey(
    "Fighting Survey",
    "Please tell us how much you want to fight.",
    [
        Question("Are you trying to fight us today?"),
        Question("Did you want to bring a friend for the fight?"),
        Question("When is the last time you were in a fight?",
                 ["Over a year ago", "Last Month"]),
        Question("Will you be seeking a rematch?"),
    ])

personality_quiz = Survey(
    "Personality Test",
    "Learn more about yourself with our personality quiz!",
    [
        Question("Do you ever dream about paint blobs"),
        Question("Do you ever have nightmares about gremlins?"),
        Question("Do you prefer flying or falling?",
                 ["Flying", "Falling"]),
        Question("Which is the worst way to lose a job, and why?",
                 ["Forgot Pants", "Fork in Microwave", "Punch Boss"],
                 allow_text=True),
    ]
)

leisure_time = Survey(
    "Leisure Time Test",
    "What do you like to do for leisure time?",
    [
        Question("Do you ever dream about taking time off?"),
        Question("Do you think you can't afford it?"),
        Question("Do you dance salsa or the waltz?",
                 ["Salsa", "Waltz"]),
        Question("Does everyone deserve luxury?",
                 allow_text=True),
    ]
)


surveys = {
    "fighting": fighting_survey,
    "personality": personality_quiz,
    "leisure": leisure_time,
}