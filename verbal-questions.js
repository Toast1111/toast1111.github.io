import random

class VerbalQuestion:
    def __init__(self, text, options, correct_answer, explanation):
        self.text = text
        self.options = options
        self.correct_answer = correct_answer
        self.explanation = explanation

class VerbalPractice:
    def __init__(self):
        self.questions = [
            VerbalQuestion(
                "Choose the word that best completes the sentence: The scientist's _____ approach to the experiment ensured that all variables were carefully controlled.",
                ["haphazard", "methodical", "frivolous", "ambiguous"],
                "methodical",
                "'Methodical' means done in a careful, systematic way, which fits the context of a scientist controlling variables in an experiment."
            ),
            VerbalQuestion(
                "Select the sentence that contains a grammar error:",
                [
                    "The team celebrated its victory with enthusiasm.",
                    "Neither of the candidates were prepared for the debate.",
                    "The museum's new exhibit features works by local artists.",
                    "She speaks three languages fluently: English, Spanish, and French."
                ],
                "Neither of the candidates were prepared for the debate.",
                "The correct form should be 'Neither of the candidates was prepared for the debate.' 'Neither' is singular and requires a singular verb."
            ),
            VerbalQuestion(
                "Choose the word that is most nearly opposite in meaning to 'verbose':",
                ["concise", "loquacious", "eloquent", "articulate"],
                "concise",
                "'Verbose' means using more words than necessary. 'Concise' means expressing much in few words, which is the opposite of verbose."
            ),
            VerbalQuestion(
                "Select the word or phrase that best completes the sentence: Despite his reputation for being _____, the professor's lecture was surprisingly clear and easy to follow.",
                ["lucid", "abstruse", "transparent", "perspicuous"],
                "abstruse",
                "'Abstruse' means difficult to understand, which contrasts with the surprising clarity of the lecture, creating the intended irony in the sentence."
            ),
            VerbalQuestion(
                "Choose the word that best completes the sentence: The diplomat's _____ remarks offended many of the conference attendees, leading to a tense atmosphere during subsequent negotiations.",
                ["tactful", "prudent", "injudicious", "discreet"],
                "injudicious",
                "'Injudicious' means showing poor judgment, which fits the context of remarks that caused offense and tension."
            ),
            VerbalQuestion(
                "Identify the sentence with correct punctuation:",
                [
                    "The company's new policy affects not only employees, but also their families.",
                    "The company's new policy affects not only employees but also their families.",
                    "The company's new policy affects not only employees but, also their families.",
                    "The company's new policy affects not only employees but also, their families."
                ],
                "The company's new policy affects not only employees but also their families.",
                "In the 'not only... but also' construction, no comma is needed before 'but also' when it's followed by a phrase rather than an independent clause."
            ),
            VerbalQuestion(
                "Choose the word that best completes the sentence: The politician's _____ stance on environmental issues made it difficult for voters to understand his true position.",
                ["unequivocal", "ambivalent", "steadfast", "resolute"],
                "ambivalent",
                "'Ambivalent' means having mixed feelings or contradictory ideas, which fits the context of a stance that is difficult to understand."
            ),
            VerbalQuestion(
                "Select the sentence that uses parallel structure correctly:",
                [
                    "The CEO likes to start his day by checking emails, a quick jog, and having breakfast.",
                    "The CEO likes to start his day by checking emails, jogging, and eating breakfast.",
                    "The CEO likes to start his day by checking emails, to jog quickly, and has breakfast.",
                    "The CEO likes to start his day by checking emails, jogs, and eats breakfast."
                ],
                "The CEO likes to start his day by checking emails, jogging, and eating breakfast.",
                "This sentence maintains parallel structure by using gerunds (checking, jogging, eating) for all three activities."
            ),
            VerbalQuestion(
                "Choose the word that is most nearly similar in meaning to 'ephemeral':",
                ["eternal", "transient", "enduring", "permanent"],
                "transient",
                "'Ephemeral' means lasting for a very short time. 'Transient' also means lasting for a short time or impermanent, making it the closest in meaning."
            ),
            VerbalQuestion(
                "Identify the sentence with the correct use of a semicolon:",
                [
                    "The museum houses artifacts from ancient civilizations; including Greek, Roman, and Egyptian.",
                    "The museum houses artifacts from ancient civilizations, including Greek, Roman, and Egyptian.",
                    "The museum houses artifacts from ancient civilizations; it includes Greek, Roman, and Egyptian pieces.",
                    "The museum houses artifacts from ancient civilizations; including Greek, Roman, and Egyptian pieces."
                ],
                "The museum houses artifacts from ancient civilizations; it includes Greek, Roman, and Egyptian pieces.",
                "A semicolon is correctly used to join two independent clauses without a coordinating conjunction."
            ),
            VerbalQuestion(
                "Choose the word that best completes the sentence: The critic's _____ review of the novel was so harsh that the author considered abandoning his writing career.",
                ["laudatory", "scathing", "impartial", "objective"],
                "scathing",
                "'Scathing' means severely critical or harsh, which fits the context of a review that deeply discouraged the author."
            ),
            VerbalQuestion(
                "Select the sentence with the correct use of the word 'whom':",
                [
                    "Whom should I contact regarding the job application?",
                    "Whom is responsible for this project?",
                    "The manager, whom is very experienced, will lead the team.",
                    "I don't know whom to trust in this situation."
                ],
                "Whom should I contact regarding the job application?",
                "'Whom' is correctly used as the object of the verb 'contact' in this sentence. It's the objective case of 'who'."
            ),
            VerbalQuestion(
                "Choose the word that is most nearly opposite in meaning to 'altruistic':",
                ["selfless", "benevolent", "philanthropic", "egocentric"],
                "egocentric",
                "'Altruistic' means showing selfless concern for the well-being of others. 'Egocentric', meaning self-centered, is the opposite."
            ),
            VerbalQuestion(
                "Identify the sentence with correct subject-verb agreement:",
                [
                    "The flock of birds were flying south for the winter.",
                    "The flock of birds was flying south for the winter.",
                    "The flock of birds are flying south for the winter.",
                    "The flock of birds fly south for the winter."
                ],
                "The flock of birds was flying south for the winter.",
                "The subject is 'flock' (singular), not 'birds', so it requires a singular verb 'was'."
            ),
            VerbalQuestion(
                "Choose the word that best completes the sentence: Despite the teacher's _____ explanation, many students still struggled to grasp the complex concept.",
                ["abstruse", "lucid", "opaque", "ambiguous"],
                "lucid",
                "'Lucid' means clear and easy to understand, which contrasts with the students' difficulty, emphasizing the complexity of the concept rather than the quality of the explanation."
            ),
            VerbalQuestion(
                "Select the sentence with the correct use of the possessive form:",
                [
                    "The children's toys were scattered across the room.",
                    "The childrens' toys were scattered across the room.",
                    "The childrens toys were scattered across the room.",
                    "The children toys were scattered across the room."
                ],
                "The children's toys were scattered across the room.",
                "For irregular plural nouns like 'children' that don't end in 's', add 's to form the possessive."
            ),
            VerbalQuestion(
                "Choose the word that is most nearly similar in meaning to 'cacophony':",
                ["harmony", "melody", "dissonance", "symphony"],
                "dissonance",
                "'Cacophony' refers to a harsh, discordant mixture of sounds. 'Dissonance' also refers to a lack of harmony or harsh sound, making it the closest in meaning."
            ),
            VerbalQuestion(
                "Identify the sentence with the correct use of the word 'fewer':",
                [
                    "There are fewer people at the concert than I expected.",
                    "There is fewer traffic on the roads today.",
                    "I have fewer money in my account than I thought.",
                    "The recipe calls for fewer sugar than usual."
                ],
                "There are fewer people at the concert than I expected.",
                "'Fewer' is used with countable nouns like 'people'. The other sentences should use 'less' for uncountable nouns."
            ),
            VerbalQuestion(
                "Choose the word that best completes the sentence: The politician's speech was filled with _____ statements, making it difficult for fact-checkers to verify his claims.",
                ["verifiable", "ambiguous", "precise", "unequivocal"],
                "ambiguous",
                "'Ambiguous' means open to more than one interpretation, which fits the context of statements that are difficult to verify."
            ),
            VerbalQuestion(
                "Select the sentence with the correct use of the subjunctive mood:",
                [
                    "I wish I was taller.",
                    "I wish I were taller.",
                    "I wish I am taller.",
                    "I wish I will be taller."
                ],
                "I wish I were taller.",
                "The subjunctive mood is used to express wishes or hypothetical situations. 'Were' is the correct subjunctive form for all persons in this context."
            )
        ]

    def get_question(self):
        return random.choice(self.questions)

    def check_answer(self, question, user_answer):
        is_correct = question.correct_answer == user_answer
        return is_correct, question.explanation

# You can add more methods here as needed, such as:
# - get_all_questions()
# - add_question(text, options, correct_answer, explanation)
# - remove_question(question)
