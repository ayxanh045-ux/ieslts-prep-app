// Top 30 Essential IELTS Linking Words & Cohesive Devices
// Categorized by essay placement, grammatical formula, and Band 8.5-9.0 models

export interface LinkingWordItem {
  id: number;
  phrase: string;
  partNumber: number;
  category: string;
  targetRole: "Intro" | "Body Topic" | "Explanation" | "Evidence" | "Cause & Result" | "Concession & Contrast" | "Task 1 Data" | "Conclusion" | "Speaking";
  whereToUse: string;
  grammarFormula: string;
  example: string;
  clozeQuestion: {
    sentenceWithBlank: string;
    correctAnswer: string;
    distractors: string[];
    explanation: string;
  };
}

export const LINKING_WORDS_PARTS = [
  { id: 1, title: "Introductions & Thesis Roadmaps", range: "1–4", icon: "Flag" },
  { id: 2, title: "Body Paragraph Topic Openers", range: "5–8", icon: "BookOpen" },
  { id: 3, title: "Explaining & Adding Layers", range: "9–12", icon: "Layers" },
  { id: 4, title: "Introducing Evidence & Examples", range: "13–16", icon: "Search" },
  { id: 5, title: "Causes, Results & Participles", range: "17–20", icon: "Zap" },
  { id: 6, title: "Concessions, Nuances & Contrasts", range: "21–24", icon: "Scale" },
  { id: 7, title: "Academic Task 1 Data Signposts", range: "25–26", icon: "BarChart3" },
  { id: 8, title: "Conclusions & Final Recommendations", range: "27–28", icon: "CheckCircle2" },
  { id: 9, title: "Speaking Fluency Signposts", range: "29–30", icon: "Mic" },
] as const;

export interface EssayZone {
  zone: string;
  badge: string;
  description: string;
  deviceIds: number[];
}

export const ESSAY_ARCHITECTURE_ZONES: EssayZone[] = [
  {
    zone: "Introduction",
    badge: "Intro (Paragraph 1)",
    description: "Hook sentence, contrasting thesis statement, and essay outline roadmap.",
    deviceIds: [1, 2, 3, 4]
  },
  {
    zone: "Body Paragraph 1",
    badge: "Body 1 (Paragraph 2)",
    description: "Opening topic sentence, deepening elaboration, and empirical evidence.",
    deviceIds: [5, 6, 9, 10, 13, 14, 17, 18]
  },
  {
    zone: "Body Paragraph 2",
    badge: "Body 2 (Paragraph 3)",
    description: "Counter-argument pivot or supporting factor, concessive nuance, and cause/result.",
    deviceIds: [7, 8, 11, 12, 15, 16, 19, 20, 21, 22, 23, 24]
  },
  {
    zone: "Conclusion",
    badge: "Conclusion (Paragraph 4)",
    description: "Definitive synthesis of both perspectives and decisive final recommendation.",
    deviceIds: [27, 28]
  },
  {
    zone: "Academic Task 1",
    badge: "Task 1 Reports",
    description: "Overview general trend signpost and time-series inflection point descriptors.",
    deviceIds: [25, 26]
  },
  {
    zone: "Speaking Fluency",
    badge: "Speaking Exam",
    description: "Natural conversational transitions and idiomatic stance framing.",
    deviceIds: [29, 30]
  }
];

export const LINKING_WORDS_DATA: LinkingWordItem[] = [
  {
    "id": 1,
    "phrase": "In the contemporary era,",
    "partNumber": 1,
    "category": "Introductions & Thesis Roadmaps",
    "targetRole": "Intro",
    "whereToUse": "Very first sentence of your Introduction (Sentence 1 Hook).",
    "grammarFormula": "In the contemporary era, + [Subject] + [Present Verb] + ...",
    "example": "In the contemporary era, the rapid proliferation of automated technologies has fundamentally altered global employment patterns.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, the rapid proliferation of automated technologies has fundamentally altered global employment patterns.",
      "correctAnswer": "In the contemporary era,",
      "distractors": [
        "In the past days,",
        "At current time,",
        "Nowadays people say,"
      ],
      "explanation": "Use 'In the contemporary era,' as a formal Band 8.5+ hook to establish present-day relevance instead of the overused 'Nowadays'."
    }
  },
  {
    "id": 2,
    "phrase": "While [View A], [View B]...",
    "partNumber": 1,
    "category": "Introductions & Thesis Roadmaps",
    "targetRole": "Intro",
    "whereToUse": "Sentence 2 of Introduction (to contrast both sides of the prompt in one complex sentence).",
    "grammarFormula": "While some argue that + [Clause A], others maintain that + [Clause B].",
    "example": "While some argue that university education should be completely state-funded, others maintain that students ought to bear partial financial responsibility.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ some argue that university education should be completely free, others maintain that students ought to pay tuition fees.",
      "correctAnswer": "While",
      "distractors": [
        "Despite",
        "Because",
        "However"
      ],
      "explanation": "'While' acts as a subordinate conjunction pairing two contrasting clauses into a single Band 9 complex sentence."
    }
  },
  {
    "id": 3,
    "phrase": "... on the grounds that...",
    "partNumber": 1,
    "category": "Introductions & Thesis Roadmaps",
    "targetRole": "Intro",
    "whereToUse": "In your Thesis Statement (Intro sentence 3) to state why you hold your opinion without saying 'because'.",
    "grammarFormula": "[I hold View X] + on the grounds that + [Reason Clause].",
    "example": "I firmly support state-subsidised tuition on the grounds that an educated populace underpins national economic prosperity.",
    "clozeQuestion": {
      "sentenceWithBlank": "I firmly support state-subsidised tuition _____ an educated populace underpins national economic prosperity.",
      "correctAnswer": "on the grounds that",
      "distractors": [
        "due to why",
        "in light with",
        "so as"
      ],
      "explanation": "'... on the grounds that...' is an academic replacement for 'because', followed by a complete grammatical clause."
    }
  },
  {
    "id": 4,
    "phrase": "... before outlining why...",
    "partNumber": 1,
    "category": "Introductions & Thesis Roadmaps",
    "targetRole": "Intro",
    "whereToUse": "In the Essay Outline sentence at the end of the Introduction.",
    "grammarFormula": "This essay will examine both facets of the debate before outlining why + [Your Stance].",
    "example": "This essay will analyse both perspectives before outlining why government intervention remains indispensable.",
    "clozeQuestion": {
      "sentenceWithBlank": "This essay will analyse both perspectives _____ government intervention remains indispensable.",
      "correctAnswer": "before outlining why",
      "distractors": [
        "and later tell that",
        "prior to say",
        "until explaining how"
      ],
      "explanation": "'... before outlining why...' elegantly connects the overview of the debate to your personal thesis without sounding repetitive."
    }
  },
  {
    "id": 5,
    "phrase": "The primary rationale supporting [X] revolves around...",
    "partNumber": 2,
    "category": "Body Paragraph Topic Openers",
    "targetRole": "Body Topic",
    "whereToUse": "Sentence 1 of Body Paragraph 1 (Topic Sentence).",
    "grammarFormula": "The primary rationale supporting + [Noun Phrase / Gerund] + revolves around + [Noun / the fact that + Clause].",
    "example": "The primary rationale supporting renewable energy subsidies revolves around the urgent necessity to decarbonise national power grids.",
    "clozeQuestion": {
      "sentenceWithBlank": "The primary rationale supporting renewable energy subsidies _____ the urgent necessity to decarbonise national power grids.",
      "correctAnswer": "revolves around",
      "distractors": [
        "is based of",
        "depends from",
        "originates to"
      ],
      "explanation": "'The primary rationale supporting [X] revolves around [Y]' forms a sophisticated, lexical-rich topic sentence."
    }
  },
  {
    "id": 6,
    "phrase": "Central to this perspective is the notion that...",
    "partNumber": 2,
    "category": "Body Paragraph Topic Openers",
    "targetRole": "Body Topic",
    "whereToUse": "Sentence 1 of Body Paragraph 1 (Alternative topic sentence opener).",
    "grammarFormula": "Central to this perspective is the notion that + [Complete Clause].",
    "example": "Central to this perspective is the notion that excessive screen exposure impairs cognitive development in early childhood.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ is the notion that excessive screen exposure impairs cognitive development in early childhood.",
      "correctAnswer": "Central to this perspective",
      "distractors": [
        "Main of this thought",
        "Center about this view",
        "Foremost to this belief"
      ],
      "explanation": "Inversion with 'Central to this perspective is...' provides stylistic variety and strong cohesive pull."
    }
  },
  {
    "id": 7,
    "phrase": "Conversely, an opposing school of thought contends that...",
    "partNumber": 2,
    "category": "Body Paragraph Topic Openers",
    "targetRole": "Body Topic",
    "whereToUse": "Sentence 1 of Body Paragraph 2 (to pivot to the opposing view).",
    "grammarFormula": "Conversely, an opposing school of thought contends that + [Complete Clause].",
    "example": "Conversely, an opposing school of thought contends that unchecked automation threatens to displace vulnerable blue-collar workers.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, an opposing school of thought contends that unchecked automation threatens to displace vulnerable blue-collar workers.",
      "correctAnswer": "Conversely",
      "distractors": [
        "In another hand",
        "On contrary",
        "Directly opposite"
      ],
      "explanation": "'Conversely, an opposing school of thought contends that...' is an elite transition to open your second body paragraph."
    }
  },
  {
    "id": 8,
    "phrase": "Equally pivotal is the role of...",
    "partNumber": 2,
    "category": "Body Paragraph Topic Openers",
    "targetRole": "Body Topic",
    "whereToUse": "Sentence 1 of Body Paragraph 2 (when adding a second supporting argument instead of contrasting).",
    "grammarFormula": "Equally pivotal is the role of + [Noun Phrase] + in + [Gerund / Noun].",
    "example": "Equally pivotal is the role of parental guidance in shaping children's digital literacy habits.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ the role of parental guidance in shaping children's digital literacy habits.",
      "correctAnswer": "Equally pivotal is",
      "distractors": [
        "Same important is",
        "Likewise critical are",
        "Equal essential has"
      ],
      "explanation": "'Equally pivotal is...' uses fronted adjective inversion for emphasis when introducing a second decisive factor."
    }
  },
  {
    "id": 9,
    "phrase": "To elaborate on this concept,",
    "partNumber": 3,
    "category": "Explaining & Adding Layers",
    "targetRole": "Explanation",
    "whereToUse": "Sentence 2 of any Body Paragraph (immediately after the topic sentence to deepen it).",
    "grammarFormula": "To elaborate on this concept, + [Detailed explanation clause].",
    "example": "To elaborate on this concept, clean energy infrastructure not only curbs carbon emissions but also insulates the domestic economy from international oil shocks.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, clean energy infrastructure not only curbs carbon emissions but also insulates the domestic economy from international oil shocks.",
      "correctAnswer": "To elaborate on this concept,",
      "distractors": [
        "To make it wider,",
        "For giving details,",
        "In explanation to this,"
      ],
      "explanation": "'To elaborate on this concept,' signals that you are unpacking the core mechanism behind your topic sentence."
    }
  },
  {
    "id": 10,
    "phrase": "In other words,",
    "partNumber": 3,
    "category": "Explaining & Adding Layers",
    "targetRole": "Explanation",
    "whereToUse": "Mid-paragraph to clarify or rephrase a complex abstract point.",
    "grammarFormula": "In other words, + [Simplified / Sharpened Clause].",
    "example": "In other words, academic pedigree alone is no longer sufficient to guarantee long-term career advancement.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, academic pedigree alone is no longer sufficient to guarantee long-term career advancement.",
      "correctAnswer": "In other words,",
      "distractors": [
        "With other speech,",
        "By different sentences,",
        "In another saying,"
      ],
      "explanation": "'In other words,' rephrases an academic point to bring crystalline clarity to the examiner."
    }
  },
  {
    "id": 11,
    "phrase": "Coupled with this,",
    "partNumber": 3,
    "category": "Explaining & Adding Layers",
    "targetRole": "Explanation",
    "whereToUse": "Sentence 3 or 4 of a Body Paragraph to add an extra supporting point without using 'Moreover'.",
    "grammarFormula": "Coupled with this, + [Additional supporting clause].",
    "example": "Coupled with this, investments in vocational training programs foster economic resilience across regional areas.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, investments in vocational training programs foster economic resilience across regional areas.",
      "correctAnswer": "Coupled with this,",
      "distractors": [
        "Joined to this,",
        "Coupling by this,",
        "In pair with that,"
      ],
      "explanation": "'Coupled with this,' adds a reinforcing argument smoothly, avoiding repetitive 'Moreover' or 'Furthermore'."
    }
  },
  {
    "id": 12,
    "phrase": "In tandem with this development,",
    "partNumber": 3,
    "category": "Explaining & Adding Layers",
    "targetRole": "Explanation",
    "whereToUse": "Mid-paragraph when showing two things progressing simultaneously.",
    "grammarFormula": "In tandem with this development, + [Clause].",
    "example": "In tandem with this development, consumer appetite for sustainable packaging has surged exponentially.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, consumer appetite for sustainable packaging has surged exponentially.",
      "correctAnswer": "In tandem with this development,",
      "distractors": [
        "In parallel speed,",
        "At the same side,",
        "In unison step,"
      ],
      "explanation": "'In tandem with [X],' shows simultaneous and interconnected progression of two trends."
    }
  },
  {
    "id": 13,
    "phrase": "A pertinent exemplar of this is...",
    "partNumber": 4,
    "category": "Introducing Evidence & Examples",
    "targetRole": "Evidence",
    "whereToUse": "Sentence 3 or 4 of a Body Paragraph to introduce a formal real-world example.",
    "grammarFormula": "A pertinent exemplar of this is + [Country / Entity], where + [What happened].",
    "example": "A pertinent exemplar of this is Singapore, where heavy investment in automated mass transit drastically diminished vehicular gridlock.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ Singapore, where heavy investment in automated mass transit drastically diminished vehicular gridlock.",
      "correctAnswer": "A pertinent exemplar of this is",
      "distractors": [
        "An obvious sample of this is",
        "A matching model shows",
        "A fit proof is"
      ],
      "explanation": "'A pertinent exemplar of this is...' is the ultimate Band 9 replacement for 'For example'."
    }
  },
  {
    "id": 14,
    "phrase": "This is clearly evidenced by...",
    "partNumber": 4,
    "category": "Introducing Evidence & Examples",
    "targetRole": "Evidence",
    "whereToUse": "Mid-paragraph to connect a theoretical claim to factual data or research.",
    "grammarFormula": "This is clearly evidenced by + [Noun phrase / recent studies showing that...].",
    "example": "This is clearly evidenced by recent OECD reports showing a direct correlation between early childhood education and adult wage growth.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ recent OECD reports showing a direct correlation between early childhood education and adult wage growth.",
      "correctAnswer": "This is clearly evidenced by",
      "distractors": [
        "This is proven from",
        "This gives evidence to",
        "This is verified through of"
      ],
      "explanation": "'This is clearly evidenced by [noun/report]' links empirical data directly to your preceding claim."
    }
  },
  {
    "id": 15,
    "phrase": "..., as demonstrated by...",
    "partNumber": 4,
    "category": "Introducing Evidence & Examples",
    "targetRole": "Evidence",
    "whereToUse": "At the very end of an argument sentence (after a comma) for natural embedded flow.",
    "grammarFormula": "[Main Argument Clause], + as demonstrated by + [Noun / Example].",
    "example": "Stringent municipal recycling policies yield tangible environmental dividends, as demonstrated by recent zero-waste initiatives across Scandinavia.",
    "clozeQuestion": {
      "sentenceWithBlank": "Stringent municipal recycling policies yield tangible environmental dividends, _____ recent zero-waste initiatives across Scandinavia.",
      "correctAnswer": "as demonstrated by",
      "distractors": [
        "like show by",
        "so illustrated with",
        "such proved from"
      ],
      "explanation": "', as demonstrated by...' seamlessly appends supporting evidence to an existing claim without starting a new sentence."
    }
  },
  {
    "id": 16,
    "phrase": "Consider, for instance, a scenario in which...",
    "partNumber": 4,
    "category": "Introducing Evidence & Examples",
    "targetRole": "Evidence",
    "whereToUse": "When you do not have a specific country/statistic and want to paint a clear hypothetical illustration.",
    "grammarFormula": "Consider, for instance, a scenario in which + [Condition]; [Result].",
    "example": "Consider, for instance, a scenario in which public libraries receive no state subsidies; low-income demographics would instantly lose access to digital resources.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, a scenario in which public libraries receive no state subsidies; low-income demographics would instantly lose access to digital resources.",
      "correctAnswer": "Consider, for instance,",
      "distractors": [
        "Think, for example,",
        "Imagine, in case,",
        "Look, to illustrate,"
      ],
      "explanation": "'Consider, for instance, a scenario in which...' invites the reader to test your hypothesis in an illustrative real-world case."
    }
  },
  {
    "id": 17,
    "phrase": "..., thereby [verb-ing]...",
    "partNumber": 5,
    "category": "Causes, Results & Participles",
    "targetRole": "Cause & Result",
    "whereToUse": "End of a sentence, attached to the main action via a comma.",
    "grammarFormula": "[Main Cause Clause], + thereby + [Verb-ing] + [Direct Object].",
    "example": "Many individuals rely heavily on ultra-processed convenience foods, thereby precipitating a surge in chronic cardiovascular ailments.",
    "clozeQuestion": {
      "sentenceWithBlank": "Many individuals rely heavily on ultra-processed convenience foods, _____ a surge in chronic cardiovascular ailments.",
      "correctAnswer": "thereby precipitating",
      "distractors": [
        "thereby precipitate",
        "which thereby precipitate",
        "thereby to precipitate"
      ],
      "explanation": "'..., thereby + present participle (-ing)...' condenses a result clause into a sophisticated participial modifier."
    }
  },
  {
    "id": 18,
    "phrase": "..., which in turn [verb-s]...",
    "partNumber": 5,
    "category": "Causes, Results & Participles",
    "targetRole": "Cause & Result",
    "whereToUse": "End of a sentence (non-defining relative clause) to show a chain reaction.",
    "grammarFormula": "[First Event], + which in turn + [Verb in present/past] + [Second Event].",
    "example": "Higher carbon taxes incentivize manufacturers to innovate, which in turn reduces aggregate industrial pollution.",
    "clozeQuestion": {
      "sentenceWithBlank": "Higher carbon taxes incentivize manufacturers to innovate, _____ aggregate industrial pollution.",
      "correctAnswer": "which in turn reduces",
      "distractors": [
        "what in turn reduces",
        "which by turn reducing",
        "that in turn reduce"
      ],
      "explanation": "', which in turn [verb-s]...' describes a knock-on effect or domino reaction with grammatical precision."
    }
  },
  {
    "id": 19,
    "phrase": "As a direct corollary,",
    "partNumber": 5,
    "category": "Causes, Results & Participles",
    "targetRole": "Cause & Result",
    "whereToUse": "At the beginning of a sentence following a major action.",
    "grammarFormula": "As a direct corollary, + [Consequence Clause].",
    "example": "The municipality failed to maintain public transit infrastructure; as a direct corollary, private vehicle dependency escalated.",
    "clozeQuestion": {
      "sentenceWithBlank": "The municipality failed to maintain public transit infrastructure; _____, private vehicle dependency escalated.",
      "correctAnswer": "as a direct corollary,",
      "distractors": [
        "in a direct consequence,",
        "for a direct effect,",
        "with a direct result,"
      ],
      "explanation": "'As a direct corollary,' replaces 'As a result' with higher-tier academic precision."
    }
  },
  {
    "id": 20,
    "phrase": "... can be ascribed to...",
    "partNumber": 5,
    "category": "Causes, Results & Participles",
    "targetRole": "Cause & Result",
    "whereToUse": "Mid-sentence (as the main verb) to explain the root origin of a problem.",
    "grammarFormula": "[Problem / Phenomenon] + can be largely ascribed to + [Root Cause Noun / Gerund].",
    "example": "The recent decline in youth mental health can be largely ascribed to compulsive social media consumption.",
    "clozeQuestion": {
      "sentenceWithBlank": "The recent decline in youth mental health can be largely _____ compulsive social media consumption.",
      "correctAnswer": "ascribed to",
      "distractors": [
        "ascribed into",
        "described to",
        "subscribed of"
      ],
      "explanation": "'can be ascribed to' means 'can be attributed to' or 'is caused by', demonstrating high lexical control."
    }
  },
  {
    "id": 21,
    "phrase": "Admittedly, [A]; nevertheless, [B].",
    "partNumber": 6,
    "category": "Concessions, Nuances & Contrasts",
    "targetRole": "Concession & Contrast",
    "whereToUse": "Mid-body paragraph to acknowledge the opponent's valid point before crushing it with your rebuttal.",
    "grammarFormula": "Admittedly, + [Concession]; nevertheless, + [Strong counter-point].",
    "example": "Admittedly, space exploration necessitates massive fiscal allocations; nevertheless, the resultant satellite technology is indispensable for climate tracking.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, space exploration necessitates massive fiscal allocations; nevertheless, the resultant satellite technology is indispensable.",
      "correctAnswer": "Admittedly",
      "distractors": [
        "Acceptably",
        "Confirmedly",
        "Agreed"
      ],
      "explanation": "'Admittedly, ...; nevertheless, ...' demonstrates concession and counter-argument in a single balanced structure."
    }
  },
  {
    "id": 22,
    "phrase": "Notwithstanding the fact that...",
    "partNumber": 6,
    "category": "Concessions, Nuances & Contrasts",
    "targetRole": "Concession & Contrast",
    "whereToUse": "Sentence starter to replace the basic 'Even though'.",
    "grammarFormula": "Notwithstanding the fact that + [Clause A], [Main Clause B].",
    "example": "Notwithstanding the fact that electric vehicles carry a higher upfront purchase price, their operational cost-efficiency is indisputable.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ electric vehicles carry a higher upfront purchase price, their operational cost-efficiency is indisputable.",
      "correctAnswer": "Notwithstanding the fact that",
      "distractors": [
        "Despite of the fact",
        "In spite that",
        "Regardless the truth that"
      ],
      "explanation": "'Notwithstanding the fact that...' is a premier formal concession device to introduce an opposing reality."
    }
  },
  {
    "id": 23,
    "phrase": "In marked contrast to [X], [Y]...",
    "partNumber": 6,
    "category": "Concessions, Nuances & Contrasts",
    "targetRole": "Concession & Contrast",
    "whereToUse": "Starting a comparative sentence between two groups, policies, or Task 1 trends.",
    "grammarFormula": "In marked contrast to + [Noun X], [Noun Y] + [Verb]...",
    "example": "In marked contrast to private automobile transit, electrified railways produce negligible urban greenhouse emissions.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ private automobile transit, electrified railways produce negligible urban greenhouse emissions.",
      "correctAnswer": "In marked contrast to",
      "distractors": [
        "In noticeable compare with",
        "With marked difference of",
        "Under striking contrast at"
      ],
      "explanation": "'In marked contrast to [X],' highlights a stark distinction between two entities or trends."
    }
  },
  {
    "id": 24,
    "phrase": "By the same token,",
    "partNumber": 6,
    "category": "Concessions, Nuances & Contrasts",
    "targetRole": "Concession & Contrast",
    "whereToUse": "Between two sentences to show that an equal principle applies to another party.",
    "grammarFormula": "[Sentence 1]. By the same token, + [Sentence 2 with parallel principle].",
    "example": "Schools must cultivate academic discipline among learners; by the same token, parents bear the duty of instilling ethical values at home.",
    "clozeQuestion": {
      "sentenceWithBlank": "Schools must cultivate academic discipline among learners; _____, parents bear the duty of instilling ethical values at home.",
      "correctAnswer": "by the same token,",
      "distractors": [
        "with the equal coin,",
        "in the similar symbol,",
        "under the same sign,"
      ],
      "explanation": "'By the same token,' means 'for the same reason' or 'in the same way', establishing symmetry between two obligations."
    }
  },
  {
    "id": 25,
    "phrase": "Overall, it is readily apparent that...",
    "partNumber": 7,
    "category": "Academic Task 1 Data Signposts",
    "targetRole": "Task 1 Data",
    "whereToUse": "First sentence of your Task 1 Overview paragraph.",
    "grammarFormula": "Overall, it is readily apparent that + [General trend 1], whereas + [General trend 2].",
    "example": "Overall, it is readily apparent that solar and wind power generation experienced an exponential surge, whereas coal reliance followed a steep downward trajectory.",
    "clozeQuestion": {
      "sentenceWithBlank": "Overall, _____ solar and wind power generation experienced an exponential surge, whereas coal reliance followed a steep downward trajectory.",
      "correctAnswer": "it is readily apparent that",
      "distractors": [
        "it is easily seen how",
        "it obviously looks that",
        "it stays clear that"
      ],
      "explanation": "'Overall, it is readily apparent that...' is the quintessential Band 9 opener for an IELTS Task 1 Overview."
    }
  },
  {
    "id": 26,
    "phrase": "Following a period of stagnation between [Year] and [Year],",
    "partNumber": 7,
    "category": "Academic Task 1 Data Signposts",
    "targetRole": "Task 1 Data",
    "whereToUse": "Starting a detail sentence in Task 1 when describing trend shifts over time.",
    "grammarFormula": "Following a period of stagnation between [Dates], + [Subject] + [surged / plummeted]...",
    "example": "Following a period of stagnation between 2010 and 2015, car exports climbed sharply to attain a historic peak of 120,000 units.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ between 2010 and 2015, car exports climbed sharply to attain a historic peak of 120,000 units.",
      "correctAnswer": "Following a period of stagnation",
      "distractors": [
        "After a time of no movement",
        "Subsequent to a pause phase",
        "Pursuing an era of standstill"
      ],
      "explanation": "'Following a period of stagnation' describes an unchanging trend before a subsequent movement with precision."
    }
  },
  {
    "id": 27,
    "phrase": "In the final analysis,",
    "partNumber": 8,
    "category": "Conclusions & Final Recommendations",
    "targetRole": "Conclusion",
    "whereToUse": "Very first words of your Conclusion paragraph (Sentence 1).",
    "grammarFormula": "In the final analysis, while + [Counterview], [Core Opinion].",
    "example": "In the final analysis, while private corporate initiatives are laudable, the responsibility for enforcing environmental sustainability must ultimately reside with the state.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, while private corporate initiatives are laudable, the responsibility for enforcing environmental sustainability must ultimately reside with the state.",
      "correctAnswer": "In the final analysis,",
      "distractors": [
        "In the last conclusion,",
        "To finalize the thinking,",
        "At the end summary,"
      ],
      "explanation": "'In the final analysis,' signals the definitive synthesis of arguments in the opening line of your conclusion."
    }
  },
  {
    "id": 28,
    "phrase": "It is therefore imperative that...",
    "partNumber": 8,
    "category": "Conclusions & Final Recommendations",
    "targetRole": "Conclusion",
    "whereToUse": "The final closing sentence of your entire essay (Action / Recommendation).",
    "grammarFormula": "It is therefore imperative that + [Policymakers / Society] + [base verb: enact / prioritize / adopt]...",
    "example": "It is therefore imperative that governing bodies enact stringent statutory regulations to protect endangered ecosystems for prospective generations.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____ governing bodies enact stringent statutory regulations to protect endangered ecosystems for prospective generations.",
      "correctAnswer": "It is therefore imperative that",
      "distractors": [
        "It is hence necessary why",
        "So it is demanding that",
        "Consequently it must be that"
      ],
      "explanation": "'It is therefore imperative that + [subject] + [base verb]...' creates a commanding call-to-action for the final essay sentence."
    }
  },
  {
    "id": 29,
    "phrase": "Having said that,",
    "partNumber": 9,
    "category": "Speaking Fluency Signposts",
    "targetRole": "Speaking",
    "whereToUse": "Speaking Part 1, 2, or 3 to naturally add a counter-point or balance your opinion without sounding like an essay robot.",
    "grammarFormula": "[Positive statement]. Having said that, + [Negative or contrasting reality].",
    "example": "I really enjoy working remotely because it saves commuting time. Having said that, you do miss out on spontaneous conversations with colleagues.",
    "clozeQuestion": {
      "sentenceWithBlank": "I really enjoy working remotely because it saves commuting time. _____, you do miss out on spontaneous conversations with colleagues.",
      "correctAnswer": "Having said that,",
      "distractors": [
        "Saying this before,",
        "After telling this,",
        "Told having that,"
      ],
      "explanation": "'Having said that,' is the gold standard conversational contrast signpost in IELTS Speaking."
    }
  },
  {
    "id": 30,
    "phrase": "As far as I'm concerned,",
    "partNumber": 9,
    "category": "Speaking Fluency Signposts",
    "targetRole": "Speaking",
    "whereToUse": "Speaking Part 3 when asked for an abstract opinion.",
    "grammarFormula": "As far as I'm concerned, + [Spoken Opinion].",
    "example": "As far as I'm concerned, artificial intelligence will definitely create more jobs than it destroys, especially in tech and creative industries.",
    "clozeQuestion": {
      "sentenceWithBlank": "_____, artificial intelligence will definitely create more jobs than it destroys, especially in tech and creative industries.",
      "correctAnswer": "As far as I'm concerned,",
      "distractors": [
        "As long as I concern,",
        "In my point of relation,",
        "So far as I am worried,"
      ],
      "explanation": "'As far as I'm concerned,' naturally frames a strong personal opinion in IELTS Speaking Parts 1-3."
    }
  }
];
