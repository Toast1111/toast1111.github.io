// verbal-questions.js
const verbalQuestions = [
    {
        text: "Choose the word that best completes the sentence: The scientist's _____ approach to the experiment ensured that all variables were carefully controlled.",
        options: ["haphazard", "methodical", "frivolous", "ambiguous"],
        correctAnswer: "methodical"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'benevolent':",
        options: ["malevolent", "beneficent", "munificent", "magnanimous"],
        correctAnswer: "malevolent"
    },
    {
        text: "Choose the best synonym for 'enigmatic':",
        options: ["mysterious", "transparent", "obvious", "simple"],
        correctAnswer: "mysterious"
    },
    {
        text: "In the context of the sentence 'The politician's speech was full of empty rhetoric', what does 'rhetoric' most likely mean?",
        options: ["persuasive language", "truthful statements", "scientific facts", "mathematical proofs"],
        correctAnswer: "persuasive language"
    },
    {
        text: "Select the word that best fits the analogy: Book is to Reader as Painting is to _____",
        options: ["Artist", "Viewer", "Gallery", "Brush"],
        correctAnswer: "Viewer"
    },
    {
        text: "Choose the word that best completes the sentence: Despite his _____ manner, the detective was actually quite observant and astute.",
        options: ["perceptive", "obtuse", "nonchalant", "vigilant"],
        correctAnswer: "nonchalant"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'frugal':",
        options: ["extravagant", "thrifty", "economical", "prudent"],
        correctAnswer: "extravagant"
    },
    {
        text: "Choose the best synonym for 'ubiquitous':",
        options: ["omnipresent", "rare", "unique", "sporadic"],
        correctAnswer: "omnipresent"
    },
    {
        text: "In the context of the sentence 'The author's prose was known for its lucidity', what does 'lucidity' most likely mean?",
        options: ["clarity", "complexity", "verbosity", "ambiguity"],
        correctAnswer: "clarity"
    },
    {
        text: "Select the word that best fits the analogy: Oasis is to Desert as _____ is to Ocean",
        options: ["Wave", "Ship", "Island", "Fish"],
        correctAnswer: "Island"
    },
    {
        text: "Choose the word that best completes the sentence: The company's _____ approach to innovation led to groundbreaking products that revolutionized the industry.",
        options: ["conventional", "orthodox", "traditional", "avant-garde"],
        correctAnswer: "avant-garde"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'candid':",
        options: ["guarded", "forthright", "sincere", "frank"],
        correctAnswer: "guarded"
    },
    {
        text: "Choose the best synonym for 'ephemeral':",
        options: ["transient", "enduring", "permanent", "everlasting"],
        correctAnswer: "transient"
    },
    {
        text: "In the context of the sentence 'The diplomat's tacit approval was enough to proceed with negotiations', what does 'tacit' most likely mean?",
        options: ["implied", "explicit", "vocal", "written"],
        correctAnswer: "implied"
    },
    {
        text: "Select the word that best fits the analogy: Flame is to Fire as _____ is to Ocean",
        options: ["Shore", "Wave", "Fish", "Boat"],
        correctAnswer: "Wave"
    },
    {
        text: "Choose the word that best completes the sentence: The professor's _____ lecture style often left students confused and struggling to grasp key concepts.",
        options: ["lucid", "abstruse", "transparent", "coherent"],
        correctAnswer: "abstruse"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'altruistic':",
        options: ["selfish", "benevolent", "philanthropic", "charitable"],
        correctAnswer: "selfish"
    },
    {
        text: "Choose the best synonym for 'surreptitious':",
        options: ["clandestine", "obvious", "overt", "apparent"],
        correctAnswer: "clandestine"
    },
    {
        text: "In the context of the sentence 'The CEO's perfunctory apology did little to assuage public anger', what does 'perfunctory' most likely mean?",
        options: ["insincere", "heartfelt", "genuine", "profound"],
        correctAnswer: "insincere"
    },
    {
        text: "Select the word that best fits the analogy: Light is to Dark as Sound is to _____",
        options: ["Loud", "Music", "Silence", "Noise"],
        correctAnswer: "Silence"
    },
    {
        text: "Choose the word that best completes the sentence: The critic's _____ review of the film was filled with lavish praise and superlatives.",
        options: ["scathing", "neutral", "ambivalent", "laudatory"],
        correctAnswer: "laudatory"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'verbose':",
        options: ["concise", "loquacious", "garrulous", "prolix"],
        correctAnswer: "concise"
    },
    {
        text: "Choose the best synonym for 'amalgamate':",
        options: ["separate", "divide", "merge", "isolate"],
        correctAnswer: "merge"
    },
    {
        text: "In the context of the sentence 'The pandemic had a deleterious effect on small businesses', what does 'deleterious' most likely mean?",
        options: ["harmful", "beneficial", "neutral", "insignificant"],
        correctAnswer: "harmful"
    },
    {
        text: "Select the word that best fits the analogy: Pen is to Writer as Brush is to _____",
        options: ["Paint", "Canvas", "Artist", "Easel"],
        correctAnswer: "Artist"
    },
    {
        text: "Choose the word that best completes the sentence: The politician's _____ remarks offended many voters and damaged his campaign.",
        options: ["diplomatic", "tactful", "innocuous", "inflammatory"],
        correctAnswer: "inflammatory"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'exacerbate':",
        options: ["ameliorate", "aggravate", "worsen", "intensify"],
        correctAnswer: "ameliorate"
    },
    {
        text: "Choose the best synonym for 'perfidious':",
        options: ["loyal", "faithful", "treacherous", "honest"],
        correctAnswer: "treacherous"
    },
    {
        text: "In the context of the sentence 'The lawyer's specious argument failed to convince the jury', what does 'specious' most likely mean?",
        options: ["valid", "sound", "misleading", "truthful"],
        correctAnswer: "misleading"
    },
    {
        text: "Select the word that best fits the analogy: Tree is to Forest as Star is to _____",
        options: ["Sky", "Night", "Galaxy", "Moon"],
        correctAnswer: "Galaxy"
    },
    {
        text: "Choose the word that best completes the sentence: The documentary provided a(n) _____ look at the life of the reclusive artist, revealing many previously unknown details.",
        options: ["superficial", "cursory", "comprehensive", "brief"],
        correctAnswer: "comprehensive"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'magnanimous':",
        options: ["generous", "petty", "benevolent", "noble"],
        correctAnswer: "petty"
    },
    {
        text: "Choose the best synonym for 'equivocate':",
        options: ["clarify", "elucidate", "prevaricate", "explain"],
        correctAnswer: "prevaricate"
    },
    {
        text: "In the context of the sentence 'The company's inexorable decline led to its eventual bankruptcy', what does 'inexorable' most likely mean?",
        options: ["reversible", "stoppable", "preventable", "unstoppable"],
        correctAnswer: "unstoppable"
    },
    {
        text: "Select the word that best fits the analogy: Leaf is to Tree as Page is to _____",
        options: ["Paper", "Book", "Pen", "Writer"],
        correctAnswer: "Book"
    },
    {
        text: "Choose the word that best completes the sentence: The scientist's _____ research methodology ensured that even minor details were not overlooked.",
        options: ["careless", "meticulous", "haphazard", "cursory"],
        correctAnswer: "meticulous"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'pragmatic':",
        options: ["practical", "realistic", "idealistic", "sensible"],
        correctAnswer: "idealistic"
    },
    {
        text: "Choose the best synonym for 'obfuscate':",
        options: ["clarify", "elucidate", "obscure", "illuminate"],
        correctAnswer: "obscure"
    },
    {
        text: "In the context of the sentence 'The novel's denouement left many readers unsatisfied', what does 'denouement' most likely mean?",
        options: ["beginning", "climax", "conclusion", "setting"],
        correctAnswer: "conclusion"
    },
    {
        text: "Select the word that best fits the analogy: Carpenter is to Wood as Sculptor is to _____",
        options: ["Paint", "Clay", "Brush", "Canvas"],
        correctAnswer: "Clay"
    },
    {
        text: "Choose the word that best completes the sentence: The CEO's _____ leadership style fostered creativity and innovation within the company.",
        options: ["authoritarian", "laissez-faire", "autocratic", "dictatorial"],
        correctAnswer: "laissez-faire"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'avarice':",
        options: ["greed", "generosity", "covetousness", "acquisitiveness"],
        correctAnswer: "generosity"
    },
    {
        text: "Choose the best synonym for 'mellifluous':",
        options: ["harsh", "discordant", "cacophonous", "melodious"],
        correctAnswer: "melodious"
    },
    {
        text: "In the context of the sentence 'The politician's equivocal stance on the issue frustrated voters', what does 'equivocal' most likely mean?",
        options: ["clear", "ambiguous", "definite", "straightforward"],
        correctAnswer: "ambiguous"
    },
    {
        text: "Select the word that best fits the analogy: Symptom is to Disease as Clue is to _____",
        options: ["Detective", "Mystery", "Crime", "Evidence"],
        correctAnswer: "Mystery"
    },
    {
        text: "Choose the word that best completes the sentence: The journalist's _____ reporting on the scandal earned her both praise and criticism.",
        options: ["biased", "impartial", "prejudiced", "subjective"],
        correctAnswer: "impartial"
    },
    {
        text: "Select the word that is most nearly opposite in meaning to 'euphemism':",
        options: ["understatement", "exaggeration", "dysphemism", "metaphor"],
        correctAnswer: "dysphemism"
    },
    {
        text: "Choose the best synonym for 'quintessential':",
        options: ["atypical", "unusual", "exemplary", "unconventional"],
        correctAnswer: "exemplary"
    },
    {
        text: "In the context of the sentence 'The old building was a vestige of the city's industrial past', what does 'vestige' most likely mean?",
        options: ["remnant", "centerpiece", "foundation", "pinnacle"],
        correctAnswer: "remnant"
    },
    {
        text: "Select the word that best fits the analogy: Hesitation is to Confidence as Drought is to _____",
        options: ["Rain", "Abundance", "Scarcity", "Flood"],
        correctAnswer: "Abundance"
    }
