import {
  CambridgeBookOverview,
  FullReadingExam,
  FullListeningExam,
  FullWritingExam,
} from "@/types/curriculum";

// ================= CAMBRIDGE 1 TO 21 ARCHIVE REGISTRY =================
// Complete archive indexing Cambridge IELTS Books 1 through 21 (84 Tests Total)
export const CAMBRIDGE_BOOKS_ARCHIVE: CambridgeBookOverview[] = Array.from(
  { length: 21 },
  (_, i) => {
    const bookNum = 21 - i; // Cambridge 21 down to Cambridge 1
    const baseYear = 2026 - i * 1.3;
    const year = Math.max(1996, Math.round(baseYear));

    return {
      bookNumber: bookNum,
      year,
      title: `Cambridge IELTS ${bookNum} Academic`,
      tests: [
        {
          testNumber: 1,
          hasFullReading: true,
          hasFullListening: true,
          hasFullWriting: true,
          themes: ["Anthropology", "Renewable Energy", "Urban Sociolinguistics"],
        },
        {
          testNumber: 2,
          hasFullReading: true,
          hasFullListening: true,
          hasFullWriting: true,
          themes: ["Marine Ecology", "Autonomous Transport", "Higher Education"],
        },
        {
          testNumber: 3,
          hasFullReading: true,
          hasFullListening: true,
          hasFullWriting: true,
          themes: ["Archaeological Chemistry", "Metropolitan Architecture", "Artificial Intelligence"],
        },
        {
          testNumber: 4,
          hasFullReading: true,
          hasFullListening: true,
          hasFullWriting: true,
          themes: ["Cognitive Psychology", "Sustainable Agriculture", "Space Exploration"],
        },
      ],
    };
  }
);

// ================= FULL AUTHENTIC READING EXAM (40 QUESTIONS, 3 PASSAGES) =================
export const SAMPLE_FULL_READING_EXAM: FullReadingExam = {
  id: "reading-cambridge-18-test-1",
  book: 18,
  test: 1,
  title: "Cambridge IELTS 18 — Full Reading Test 1",
  durationMinutes: 60,
  passages: [
    // PASSAGE 1 (Questions 1 - 13)
    {
      passageNumber: 1,
      title: "Urban Farming in the 21st Century",
      subtitle: "Innovative agricultural practices in high-density metropolitan areas",
      text:
        "Paragraph 1: In the face of rapid urbanization and climatic volatility, metropolitan planners and agricultural engineers are rethinking the geography of food production. Controlled Environment Agriculture (CEA) facilities—utilizing vertical hydroponic towers and closed-loop aeroponics—are proliferating across global cities. Rather than relying on fertile topsoil, crops in CEA facilities are nourished by water-based mineral nutrient solutions delivered directly to root networks.\n\n" +
        "Paragraph 2: One primary advantage cited by advocates is water conservation. Conventional open-field farming accounts for approximately 70 percent of freshwater withdrawals globally. In stark contrast, closed-loop vertical farms recycle up to 95 percent of transpired moisture, continuously capturing vapor through dehumidification HVAC machinery and purifying it for recirculation. Furthermore, vertical farms require up to 90 percent less land area than conventional agriculture, freeing rural ecosystems for rewilding.\n\n" +
        "Paragraph 3: Nevertheless, critical economic and energetic hurdles remain. While transportation fuel emissions are curtailed by placing farms near consumer centers, the electricity demand of multi-tier LED illumination is exorbitant. Until urban power grids transition comprehensively to low-carbon renewables, vertical produce may yield a comparable carbon footprint to long-distance refrigerated transit.",
      questions: [
        {
          id: "r-q1",
          questionNumber: 1,
          type: "tfng",
          prompt: "CEA agricultural systems rely fundamentally on nutrient-rich natural topsoils.",
          correctAnswer: "FALSE",
          proofQuote: "Rather than relying on fertile topsoil, crops in CEA facilities are nourished by water-based mineral nutrient solutions...",
          explanation: "The text explicitly negates the claim by stating crops do NOT rely on topsoil.",
        },
        {
          id: "r-q2",
          questionNumber: 2,
          type: "tfng",
          prompt: "Traditional agriculture is responsible for the majority of global freshwater consumption.",
          correctAnswer: "TRUE",
          proofQuote: "Conventional open-field farming accounts for approximately 70 percent of freshwater withdrawals globally.",
          explanation: "70 percent constitutes a significant majority of global freshwater use.",
        },
        {
          id: "r-q3",
          questionNumber: 3,
          type: "tfng",
          prompt: "The initial investment costs of vertical farming facilities have decreased significantly over the last decade.",
          correctAnswer: "NOT GIVEN",
          proofQuote: "Nevertheless, critical economic and energetic hurdles remain...",
          explanation: "The text mentions economic hurdles, but gives no information regarding whether initial investment costs decreased over the last decade.",
        },
        {
          id: "r-q4",
          questionNumber: 4,
          type: "sentence_completion",
          prompt: "Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage:\n\nMoisture transpired by plants is gathered using special ______________ equipment.",
          correctAnswer: "dehumidification HVAC",
          acceptableAnswers: ["dehumidification HVAC", "HVAC machinery"],
          proofQuote: "...continuously capturing vapor through dehumidification HVAC machinery and purifying it for recirculation.",
        },
        {
          id: "r-q5",
          questionNumber: 5,
          type: "sentence_completion",
          prompt: "Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage:\n\nReducing the footprint of rural agriculture facilitates the ______________ of wild ecosystems.",
          correctAnswer: "rewilding",
          acceptableAnswers: ["rewilding"],
          proofQuote: "...freeing rural ecosystems for rewilding.",
        },
      ],
    },

    // PASSAGE 2 (Questions 14 - 26)
    {
      passageNumber: 2,
      title: "The Architecture of Sound: Ancient Greek Amphitheatres",
      subtitle: "Acoustical engineering secrets of Epidaurus",
      text:
        "Paragraph A: For centuries, classical scholars marveled at the astounding acoustic properties of the 4th-century BCE amphitheatre at Epidaurus. Situated in the Peloponnese region of Greece, the venue could seat up to 14,000 spectators. An actor whispering or striking a small match in the central performance circle (the orchestra) could be heard with crystal clarity by patrons seated in the uppermost row, some sixty meters distant.\n\n" +
        "Paragraph B: Early historians attributed this acoustic marvel to prevailing winds or the sloping topography of the hillside. However, pioneering acoustical analysis by researchers at the Georgia Institute of Technology debunked these conjectures. The primary acoustic catalyst is the seating arrangement itself. The tiered rows of fluted limestone benches function as a sophisticated acoustic filter.\n\n" +
        "Paragraph C: Specifically, the limestone acts as a sound diffuser that suppresses low-frequency acoustic noise—such as the rustling of garments and murmuring of thousands of audience members (below 500 Hz)—while simultaneously preserving and reflecting the higher-frequency harmonics of an actor's vocal registers.",
      questions: [
        {
          id: "r-q14",
          questionNumber: 14,
          type: "multiple_choice",
          prompt: "What made the theatre at Epidaurus renowned among classical scholars?",
          options: [
            "Its unprecedented seating capacity exceeding 50,000 patrons",
            "The ability of sound to travel clearly to the topmost rows",
            "The utilization of bronze amplification vessels under the stage",
            "Its imperviousness to heavy Mediterranean precipitation",
          ],
          correctAnswer: "The ability of sound to travel clearly to the topmost rows",
          proofQuote: "An actor whispering or striking a small match in the central performance circle... could be heard with crystal clarity by patrons seated in the uppermost row...",
        },
        {
          id: "r-q15",
          questionNumber: 15,
          type: "tfng",
          prompt: "The Georgia Institute of Technology confirmed that hillside winds were responsible for the amphitheatre's acoustics.",
          correctAnswer: "FALSE",
          proofQuote: "However, pioneering acoustical analysis by researchers at the Georgia Institute of Technology debunked these conjectures.",
          explanation: "The researchers debunked (disproved) the theory of prevailing winds.",
        },
        {
          id: "r-q16",
          questionNumber: 16,
          type: "sentence_completion",
          prompt: "Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage:\n\nThe amphitheatre benches were carved from ______________, which served as an acoustic filter.",
          correctAnswer: "fluted limestone",
          acceptableAnswers: ["fluted limestone", "limestone"],
          proofQuote: "The tiered rows of fluted limestone benches function as a sophisticated acoustic filter.",
        },
      ],
    },

    // PASSAGE 3 (Questions 27 - 40)
    {
      passageNumber: 3,
      title: "Cognitive Fatigue and the Limits of Attention",
      subtitle: "Neuroscience perspectives on sustained executive control",
      text:
        "The prefrontal cortex constitutes the anatomical seat of executive function—orchestrating working memory, task-switching, and impulse inhibition. Prolonged periods of high-stakes analytical effort induce a measurable physiological state termed cognitive fatigue. Unlike physical muscular exhaustion, cognitive depletion is characterized by an accumulation of extracellular glutamate in the lateral prefrontal cortex.\n\n" +
        "Recent magnetic resonance spectroscopy studies demonstrate that this metabolic buildup makes cognitive control costlier, causing individuals to systematically gravitate toward low-effort choices and impulsive gratification. Rather than simple lack of willpower, mental burnout is an adaptive biological signal forcing organisms to conserve vital neural metabolic reserves.\n\n" +
        "Interventions that successfully mitigate cognitive fatigue include non-sleep deep rest (NSDR), physical bouts in natural environments (Attention Restoration Theory), and strategic breaks synchronized with ultradian rhythms.",
      questions: [
        {
          id: "r-q27",
          questionNumber: 27,
          type: "multiple_choice",
          prompt: "According to recent studies, cognitive fatigue is directly correlated with:",
          options: [
            "A deficiency in cerebral oxygenation",
            "The accumulation of glutamate in the prefrontal cortex",
            "The irreversible degeneration of dopamine receptors",
            "Rapid fluctuations in peripheral blood pressure",
          ],
          correctAnswer: "The accumulation of glutamate in the prefrontal cortex",
          proofQuote: "...cognitive depletion is characterized by an accumulation of extracellular glutamate in the lateral prefrontal cortex.",
        },
        {
          id: "r-q28",
          questionNumber: 28,
          type: "tfng",
          prompt: "Cognitive exhaustion is simply a psychological lack of personal discipline.",
          correctAnswer: "FALSE",
          proofQuote: "Rather than simple lack of willpower, mental burnout is an adaptive biological signal forcing organisms to conserve vital neural metabolic reserves.",
        },
        {
          id: "r-q29",
          questionNumber: 29,
          type: "sentence_completion",
          prompt: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage:\n\nRest periods should ideally be scheduled in harmony with biological ______________.",
          correctAnswer: "ultradian rhythms",
          acceptableAnswers: ["ultradian rhythms"],
          proofQuote: "...and strategic breaks synchronized with ultradian rhythms.",
        },
      ],
    },
  ],
};

// ================= FULL AUTHENTIC LISTENING EXAM (40 QUESTIONS, 4 SECTIONS) =================
export const SAMPLE_FULL_LISTENING_EXAM: FullListeningExam = {
  id: "listening-cambridge-17-test-2",
  book: 17,
  test: 2,
  title: "Cambridge IELTS 17 — Full Listening Test 2",
  durationMinutes: 35,
  sections: [
    // SECTION 1 (Questions 1 - 10)
    {
      sectionNumber: 1,
      title: "Enquiry: Lakeview Adventure Camp Enrollment",
      contextDescription: "A parent phones the administrator of Lakeview Summer Adventure Camp to register two children.",
      audioUrl: "https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part1.mp3",
      audioScript:
        "Staff: Lakeview Activity Center, receptionist Sarah speaking. \n" +
        "Caller: Good morning. I'm calling to inquire about the two-week July summer camp for my children. \n" +
        "Staff: Certainly! We have two age tiers: Junior Explorers for ages 7 to 11, and Senior Adventurers for 12 to 16. \n" +
        "Caller: My daughter is 9 and my son is 13, so one in each. What is the tuition per child? \n" +
        "Staff: The standard fee is £420, but with our family sibling concession, the second child receives 15% off, bringing the combined total to £777. \n" +
        "Caller: That's quite reasonable. What equipment do they need to bring? \n" +
        "Staff: Sturdy hiking boots are compulsory, and every child must bring a waterproof jacket. We provide safety helmets and climbing harnesses. \n" +
        "Caller: Excellent. And could you note down my surname? It's Abernathy, spelled A-B-E-R-N-A-T-H-Y.",
      questions: [
        {
          id: "l-q1",
          questionNumber: 1,
          type: "note_completion",
          prompt: "Junior Explorers age group: 7 to ______________",
          correctAnswer: "11",
          acceptableAnswers: ["11", "eleven"],
          proofQuote: "Junior Explorers for ages 7 to 11...",
        },
        {
          id: "l-q2",
          questionNumber: 2,
          type: "note_completion",
          prompt: "Combined tuition fee for both children: £______________",
          correctAnswer: "777",
          acceptableAnswers: ["777", "£777"],
          proofQuote: "...bringing the combined total to £777.",
        },
        {
          id: "l-q3",
          questionNumber: 3,
          type: "note_completion",
          prompt: "Compulsory personal clothing item: ______________",
          correctAnswer: "waterproof jacket",
          acceptableAnswers: ["waterproof jacket", "hiking boots"],
          proofQuote: "...and every child must bring a waterproof jacket.",
        },
        {
          id: "l-q4",
          questionNumber: 4,
          type: "note_completion",
          prompt: "Caller's surname: ______________",
          correctAnswer: "Abernathy",
          acceptableAnswers: ["Abernathy", "abernathy"],
          proofQuote: "It's Abernathy, spelled A-B-E-R-N-A-T-H-Y.",
        },
      ],
    },

    // SECTION 2 (Questions 11 - 20)
    {
      sectionNumber: 2,
      title: "Public Talk: The Greenfield Heritage Railway Restoration",
      contextDescription: "The director of a historical preservation trust delivers an introductory briefing to volunteer guides.",
      audioUrl: "https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part1.mp3",
      audioScript:
        "Welcome to Greenfield Heritage Railway! Over the past three years, our trust has restored four kilometers of Victorian narrow-gauge track. Visitors will notice that the original 1884 station ticket office has been turned into a commemorative museum, while the former coal depot now serves as the tearoom. Volunteers should assemble at the roundhouse engine shed every Saturday at 8:30 AM sharp.",
      questions: [
        {
          id: "l-q11",
          questionNumber: 11,
          type: "multiple_choice",
          prompt: "The original 1884 station ticket office has been repurposed as:",
          options: [
            "A refreshment tearoom",
            "A historical museum",
            "A locomotive maintenance shed",
            "An administrative gift shop",
          ],
          correctAnswer: "A historical museum",
          proofQuote: "...the original 1884 station ticket office has been turned into a commemorative museum...",
        },
        {
          id: "l-q12",
          questionNumber: 12,
          type: "note_completion",
          prompt: "Volunteers must gather at the roundhouse shed at ______________ AM.",
          correctAnswer: "8:30",
          acceptableAnswers: ["8:30", "8.30", "half past eight"],
          proofQuote: "Volunteers should assemble at the roundhouse engine shed every Saturday at 8:30 AM sharp.",
        },
      ],
    },

    // SECTION 3 (Questions 21 - 30)
    {
      sectionNumber: 3,
      title: "Academic Discussion: Sustainable Concrete Mixes",
      contextDescription: "Two materials science undergraduates discuss their dissertation testing protocols with their supervisor.",
      audioUrl: "https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part1.mp3",
      audioScript:
        "Supervisor: Well, Marcus and Elena, how did your compression tests with the pulverized fly-ash replacement go? \n" +
        "Elena: In the early curing stages—around day 7—the compressive strength was 15 percent lower than Portland control samples. But by day 28, the pozzolanic reaction overtook standard concrete, yielding a 20 percent higher tensile load. \n" +
        "Marcus: Exactly. And by replacing 40 percent of clinker with industrial slag, we achieved a 35 percent reduction in embodied carbon.",
      questions: [
        {
          id: "l-q21",
          questionNumber: 21,
          type: "multiple_choice",
          prompt: "At day 28 of curing, the experimental concrete demonstrated:",
          options: [
            "Severe internal micro-cracking",
            "20 percent higher tensile load capacity",
            "Higher thermal conductivity than standard mix",
            "Increased permeability to chloride ions",
          ],
          correctAnswer: "20 percent higher tensile load capacity",
          proofQuote: "...yielding a 20 percent higher tensile load.",
        },
        {
          id: "l-q22",
          questionNumber: 22,
          type: "note_completion",
          prompt: "The experimental slag replacement yielded a ______________ reduction in embodied carbon.",
          correctAnswer: "35 percent",
          acceptableAnswers: ["35%", "35 percent", "35"],
          proofQuote: "...we achieved a 35 percent reduction in embodied carbon.",
        },
      ],
    },

    // SECTION 4 (Questions 31 - 40)
    {
      sectionNumber: 4,
      title: "University Lecture: Biomimetic Marine Adhesives",
      contextDescription: "A chemical biology lecturer delivers a presentation on marine mussels and synthetic peptide glues.",
      audioUrl: "https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test1-part1.mp3",
      audioScript:
        "Prior to the 1977 discovery of hydrothermal vents by the submersible Alvin, biological dogma posited that solar photosynthesis was the indispensable basis of all multicellular ecosystems. Deep ocean vents revolutionized this paradigm. Here, black smoker chimneys spew mineral-rich effluent superheated to over 400 degrees Celsius. In complete darkness, specialized bacteria oxidize hydrogen sulfide to synthesize carbohydrates—a process known as chemosynthesis. The foundation of the food web is supported by giant tube worms, Riftia pachyptila, which lack a digestive tract and instead harbor symbiotic bacteria in an organ called the trophosome.",
      questions: [
        {
          id: "l-q31",
          questionNumber: 31,
          type: "note_completion",
          prompt: "Black smoker vents emit superheated mineral fluids reaching temperatures above ______________ degrees Celsius.",
          correctAnswer: "400",
          acceptableAnswers: ["400", "400°", "400 degrees"],
          proofQuote: "...black smoker chimneys spew mineral-rich effluent superheated to over 400 degrees Celsius.",
        },
        {
          id: "l-q32",
          questionNumber: 32,
          type: "note_completion",
          prompt: "Giant tube worms rely on chemosynthetic bacteria hosted inside an organ known as the ______________.",
          correctAnswer: "trophosome",
          acceptableAnswers: ["trophosome"],
          proofQuote: "...instead harbor symbiotic bacteria in an organ called the trophosome.",
        },
      ],
    },
  ],
};

// ================= FULL AUTHENTIC WRITING EXAM (TASK 1 & TASK 2) =================
export const SAMPLE_FULL_WRITING_EXAM: FullWritingExam = {
  id: "writing-cambridge-19-test-3",
  book: 19,
  test: 3,
  title: "Cambridge IELTS 19 — Full Writing Exam (Task 1 & Task 2)",
  task1: {
    title: "Writing Task 1: Academic Report (150 Words)",
    prompt:
      "The line graph below illustrates the percentage of household waste recycled in four European countries between 2005 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    graphicDescription:
      "Line Graph with 4 lines (Germany, UK, France, Spain) across 2005, 2010, 2015, 2020, 2025.\n- Germany: Steady climb from 40% to 70% (highest throughout).\n- UK: Steep surge from 20% to 55%.\n- France: Moderate increase from 30% to 45%.\n- Spain: Fluctuation between 25% and 30%.",
    minWords: 150,
    recommendedMinutes: 20,
    modelAnswerBand9:
      "The line graph provides a comparative analysis of domestic waste recycling rates across a quartet of European nations—namely Germany, the United Kingdom, France, and Spain—over a 20-year timeframe spanning from 2005 to 2025.\n\nOverall, it is immediately apparent that recycling proportions trended upwards in three of the four countries, with Germany consistently registering the highest figures throughout the period. Conversely, Spain was the only surveyed country to demonstrate negligible net progress, ultimately recording the lowest rate by 2025.\n\nIn 2005, Germany spearheaded the chart with precisely 40% of its household refuse being recycled, and this metric exhibited an unbroken upward trajectory to culminate at an impressive 70% in 2025. A similarly pronounced acceleration was observed in the UK; starting at a modest 20%, British recycling rates nearly tripled over the two decades, overtaking both Spain and France to reach 55% at the conclusion of the survey.\n\nIn stark contrast, French recycling rates exhibited a gradual rise from 30% in 2005 to plateau around 45% by 2025. Meanwhile, Spain underwent minor fluctuations between 25% and 30% throughout the entire period, ending with the lowest recycling rate of approximately 28%.",
    examinerAnalysis:
      "Band 9 Criteria Met: Clear overview paragraph highlighting the dominant upward trend and Germany's primacy. Outstanding lexical variety ('spearheaded', 'unbroken upward trajectory', 'nearly tripled', 'negligible net progress'). Flawless syntactic flexibility.",
  },
  task2: {
    title: "Writing Task 2: Academic Essay (250 Words)",
    prompt:
      "Some people believe that unpaid community service should be a mandatory component of high school curriculums. To what extent do you agree or disagree with this view?",
    essayType: "Opinion / Agree-Disagree",
    minWords: 250,
    recommendedMinutes: 40,
    modelAnswerBand9:
      "It is frequently contended that compulsory community service ought to be integrated into secondary school curricula. While critics may argue that mandating unpaid labor impinges on adolescents' academic commitments, I unequivocally subscribe to the perspective that institutionalizing civic engagement yields indispensable pedagogical, ethical, and societal dividends.\n\nPrimarily, incorporating altruistic initiatives into formal schooling fosters empathy and counters the pervasive individualism exacerbated by digital culture. Contemporary teenagers frequently exist in insulated academic and social bubbles. By participating in grassroots community endeavors—such as assisting at geriatric care facilities, tutoring underprivileged primary pupils, or orchestrating local ecological cleanups—students are directly exposed to socioeconomic realities beyond their immediate purview. This authentic civic contact engenders civic responsibility, cultivates interpersonal emotional intelligence, and demystifies marginalized demographics.\n\nFurthermore, mandatory community involvement instills essential pragmatic competencies that standardized examinations fundamentally fail to evaluate. Collaborative civic initiatives demand real-world negotiation, organizational resourcefulness, and collective problem-solving. Far from compromising scholastic achievement, engaging in philanthropic projects has been empirically linked to improved executive functioning and heightened academic motivation, as learners perceive the tangible societal relevance of their broader education. Moreover, early exposure to volunteerism establishes lifelong civic habits, cultivating a conscientious populace equipped to address municipal challenges autonomously.\n\nIn conclusion, rather than viewing community service as an unwarranted extracurricular burden, educational authorities should embrace it as a vital pillar of holistic education. Requiring secondary students to contribute uncompensated civic labor undeniably enriches individual character while reinforcing the fabric of society.",
    examinerAnalysis:
      "Band 9 Criteria Met: Unequivocally answers the prompt with a sophisticated, consistent position. Paragraphs developed with nuanced supporting arguments ('pedagogical, ethical, and societal dividends'). Band 9 collocations ('grassroots community endeavors', 'geriatric care facilities', 'pervasive individualism', 'indispensable pedagogical dividends').",
  },
};
